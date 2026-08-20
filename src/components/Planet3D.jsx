import { useEffect, useRef, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { mockActiveMatches } from '../utils/mockData';

const Planet3D = memo(({ onMatchClick, showMatches = true, filteredMatches = [] }) => {
  const mountRef = useRef(null);
  const canvasRef = useRef(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const [hoveredMatch, setHoveredMatch] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const onMatchClickRef = useRef(onMatchClick);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    onMatchClickRef.current = onMatchClick;
  }, [onMatchClick]);

  const convertFlatCoordsToSphereCoords = (x, y, width, height, globeRadius) => {
    let latitude = ((x - width / 2) / (width / 2)) * -180;
    let longitude = ((y - height / 2) / (height / 2)) * -90;
    latitude = (latitude * Math.PI) / 180;
    longitude = (longitude * Math.PI) / 180;
    const radius = Math.cos(longitude) * globeRadius;
    return {
      x: Math.cos(latitude) * radius,
      y: Math.sin(longitude) * globeRadius,
      z: Math.sin(latitude) * radius,
    };
  };

  const latLngToVector3 = (lat, lng, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  };

  useEffect(() => {
    if (!mountRef.current || !canvasRef.current) return;
    if (isInitializedRef.current) return;
    isInitializedRef.current = true;

    let scene, camera, renderer, controls, globeShape, matchGroup;
    let matchCores = [];
    let handleMouseMove, handleClick, handleResize;
    let sceneReady = false;
    const pulseMeshes = [];

    const createGlobe = () => {
      const container = mountRef.current;
      const canvas = canvasRef.current;
      if (!container || !canvas) return;

      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) {
        requestAnimationFrame(createGlobe);
        return;
      }

      const globeRadius = 75;
      const globeWidth = 4098 / 2;
      const globeHeight = 1968 / 2;

      scene = new THREE.Scene();
      scene.background = null;
      scene.fog = new THREE.FogExp2(0x060608, 0.0018);

      camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 2000);
      camera.position.set(0, 8, 250);

      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      scene.add(new THREE.AmbientLight(0x6a7084, 0.55));
      const keyLight = new THREE.DirectionalLight(0xf2f4f8, 0.85);
      keyLight.position.set(90, 50, 120);
      scene.add(keyLight);
      const rimLight = new THREE.PointLight(0x9aa6c0, 1.1, 420);
      rimLight.position.set(-70, 30, 90);
      scene.add(rimLight);

      const starGeo = new THREE.BufferGeometry();
      const starCount = 900;
      const starPos = new Float32Array(starCount * 3);
      const starSizes = new Float32Array(starCount);
      for (let i = 0; i < starCount; i++) {
        const r = 380 + Math.random() * 520;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        starPos[i * 3 + 2] = r * Math.cos(phi);
        starSizes[i] = 0.4 + Math.random() * 1.4;
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      const stars = new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({
          color: 0xd8dce8,
          size: 0.9,
          transparent: true,
          opacity: 0.55,
          depthWrite: false,
          sizeAttenuation: true,
        })
      );
      scene.add(stars);

      const core = new THREE.Mesh(
        new THREE.SphereGeometry(globeRadius - 0.6, 64, 64),
        new THREE.MeshStandardMaterial({
          color: 0x0a0a10,
          roughness: 0.88,
          metalness: 0.18,
          emissive: 0x0b0d14,
          emissiveIntensity: 0.35,
        })
      );
      scene.add(core);

      const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(globeRadius * 1.12, 48, 48),
        new THREE.ShaderMaterial({
          transparent: true,
          side: THREE.BackSide,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          uniforms: {},
          vertexShader: `
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            varying vec3 vNormal;
            void main() {
              float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
              gl_FragColor = vec4(0.72, 0.78, 0.92, 1.0) * intensity * 0.85;
            }
          `,
        })
      );
      scene.add(atmosphere);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(globeRadius + 14, 0.12, 12, 180),
        new THREE.MeshBasicMaterial({
          color: 0x8e96ac,
          transparent: true,
          opacity: 0.22,
        })
      );
      ring.rotation.x = Math.PI / 2.15;
      ring.rotation.z = 0.18;
      scene.add(ring);

      const generateContinentPoints = () => {
        const points = [];
        const gw = 4098 / 2;
        const gh = 1968 / 2;
        const add = (n, x, y, w, h) => {
          for (let i = 0; i < n; i++) {
            points.push({ x: gw * x + Math.random() * gw * w, y: gh * y + Math.random() * gh * h });
          }
        };
        add(220, 0.2, 0.3, 0.3, 0.4);
        add(160, 0.25, 0.7, 0.2, 0.25);
        add(110, 0.45, 0.25, 0.15, 0.2);
        add(130, 0.48, 0.45, 0.12, 0.3);
        add(270, 0.6, 0.2, 0.35, 0.4);
        add(90, 0.75, 0.6, 0.2, 0.25);
        return points;
      };

      const makeGlobeWithPoints = (points) => {
        if (!points?.length) return;

        if (globeShape) {
          scene.remove(globeShape);
          globeShape.geometry?.dispose();
          globeShape.material?.dispose();
        }

        const positions = [];
        for (const point of points) {
          const { x, y, z } = convertFlatCoordsToSphereCoords(
            point.x,
            point.y,
            globeWidth * 2,
            globeHeight * 2,
            globeRadius
          );
          if (x && y && z) positions.push(x, y, z);
        }
        if (!positions.length) return;

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        globeShape = new THREE.Points(
          geo,
          new THREE.PointsMaterial({
            color: 0xc6ccd8,
            size: 0.95,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.92,
            depthWrite: false,
          })
        );
        scene.add(globeShape);
        renderer.render(scene, camera);
        if (!sceneReady) createMatchesAndControls();
      };

      const createMatchesAndControls = () => {
        if (sceneReady) return;
        sceneReady = true;
        matchCores = [];
        pulseMeshes.length = 0;

        if (showMatches) {
          matchGroup = new THREE.Group();
          const matchesToShow = filteredMatches.length > 0 ? filteredMatches : mockActiveMatches;

          matchesToShow.forEach((match) => {
            const position = latLngToVector3(match.lat, match.lng, globeRadius + 2.2);
            const group = new THREE.Group();
            group.position.copy(position);
            group.userData = match;

            const isOnline = match.status === 'online';
            const coreMesh = new THREE.Mesh(
              new THREE.SphereGeometry(1.35, 16, 16),
              new THREE.MeshBasicMaterial({
                color: isOnline ? 0xf0f2f6 : 0x9aa0ae,
              })
            );
            coreMesh.userData = match;

            const glow = new THREE.Mesh(
              new THREE.SphereGeometry(3.2, 16, 16),
              new THREE.MeshBasicMaterial({
                color: isOnline ? 0xdde3f0 : 0x888ea0,
                transparent: true,
                opacity: 0.22,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
              })
            );

            const ringMesh = new THREE.Mesh(
              new THREE.RingGeometry(3.6, 4.05, 32),
              new THREE.MeshBasicMaterial({
                color: 0xe8ecf4,
                transparent: true,
                opacity: 0.35,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
              })
            );
            ringMesh.lookAt(0, 0, 0);

            group.add(coreMesh);
            group.add(glow);
            group.add(ringMesh);
            matchGroup.add(group);
            matchCores.push(coreMesh);
            pulseMeshes.push({ glow, ring: ringMesh, phase: Math.random() * Math.PI * 2 });
          });

          scene.add(matchGroup);
        }

        if (!controls) {
          controls = new OrbitControls(camera, canvas);
          controls.enablePan = false;
          controls.enableZoom = false;
          controls.enableDamping = true;
          controls.dampingFactor = 0.06;
          controls.enableRotate = true;
          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.55;
          controls.rotateSpeed = 0.45;
        }

        handleMouseMove = (event) => {
          if (!showMatches || matchCores.length === 0) return;
          const rect = canvas.getBoundingClientRect();
          mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
          raycasterRef.current.setFromCamera(mouseRef.current, camera);
          const intersects = raycasterRef.current.intersectObjects(matchCores);

          matchCores.forEach((point) => point.scale.set(1, 1, 1));
          if (intersects.length > 0) {
            const match = intersects[0].object.userData;
            setHoveredMatch(match);
            setTooltipPosition({ x: event.clientX, y: event.clientY });
            intersects[0].object.scale.set(1.55, 1.55, 1.55);
            canvas.style.cursor = 'pointer';
          } else {
            setHoveredMatch(null);
            canvas.style.cursor = 'grab';
          }
        };

        handleClick = () => {
          if (!showMatches || matchCores.length === 0) return;
          raycasterRef.current.setFromCamera(mouseRef.current, camera);
          const intersects = raycasterRef.current.intersectObjects(matchCores);
          if (intersects.length > 0 && onMatchClickRef.current) {
            onMatchClickRef.current(intersects[0].object.userData);
          }
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('click', handleClick);
        canvas.style.cursor = 'grab';

        handleResize = () => {
          if (!container || !camera || !renderer) return;
          const newWidth = container.clientWidth;
          const newHeight = container.clientHeight;
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        };
        window.addEventListener('resize', handleResize);

        let lastTime = 0;
        const frameInterval = 1000 / 60;

        const animate = (currentTime) => {
          animationFrameRef.current = requestAnimationFrame(animate);
          const deltaTime = currentTime - lastTime;
          if (deltaTime < frameInterval) return;
          lastTime = currentTime - (deltaTime % frameInterval);

          const t = currentTime * 0.0016;
          pulseMeshes.forEach(({ glow, ring, phase }) => {
            const s = 1 + Math.sin(t + phase) * 0.18;
            glow.scale.setScalar(s);
            glow.material.opacity = 0.16 + Math.sin(t + phase) * 0.1;
            ring.scale.setScalar(1 + Math.sin(t + phase) * 0.12);
            ring.material.opacity = 0.22 + Math.sin(t + phase) * 0.14;
          });
          stars.rotation.y += 0.00008;

          controls?.update();
          renderer?.render(scene, camera);
        };

        animate(0);
      };

      const loadGlobePoints = () => {
        const fallbackPoints = generateContinentPoints();
        makeGlobeWithPoints(fallbackPoints);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        const loadInBackground = () => {
          fetch(
            'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard-pro/assets/js/points.json',
            { signal: controller.signal, cache: 'force-cache' }
          )
            .then((response) => {
              clearTimeout(timeoutId);
              if (!response.ok) throw new Error('Network response was not ok');
              return response.json();
            })
            .then((data) => {
              if (data.points && data.points.length > fallbackPoints.length) {
                makeGlobeWithPoints(data.points);
              }
            })
            .catch(() => {
              clearTimeout(timeoutId);
            });
        };

        if ('requestIdleCallback' in window) {
          requestIdleCallback(loadInBackground, { timeout: 2000 });
        } else {
          setTimeout(loadInBackground, 100);
        }
      };

      try {
        loadGlobePoints();
      } catch {
        makeGlobeWithPoints(generateContinentPoints());
      }

      return () => {
        window.removeEventListener('resize', handleResize);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('click', handleClick);
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        controls?.dispose();
        scene?.traverse((object) => {
          object.geometry?.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) object.material.forEach((mat) => mat.dispose());
            else object.material.dispose();
          }
        });
        renderer?.dispose();
      };
    };

    const cleanup = createGlobe();

    return () => {
      if (typeof cleanup === 'function') cleanup();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      isInitializedRef.current = false;
    };
  }, [showMatches, filteredMatches]);

  return (
    <div className="relative w-full h-full min-h-[500px]">
      <div className="planet-halo absolute inset-0 pointer-events-none" />
      <div ref={mountRef} className="relative z-[1] w-full h-full min-h-[500px]">
        <canvas
          ref={canvasRef}
          width="700"
          height="600"
          style={{ outline: 'none', width: '100%', height: '100%', background: 'transparent' }}
        />
      </div>

      <AnimatePresence>
        {hoveredMatch && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 pointer-events-none"
            style={{ left: tooltipPosition.x + 14, top: tooltipPosition.y - 12 }}
          >
            <div className="glass rounded-2xl px-4 py-3 min-w-[210px]">
              <div className="flex items-center justify-between gap-3 mb-1.5">
                <div className="font-display font-semibold text-light-text">{hoveredMatch.name}</div>
                <span className="flex items-center gap-1.5 text-[11px] text-medium-text">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      hoveredMatch.status === 'online' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-zinc-500'
                    }`}
                  />
                  {hoveredMatch.status === 'online' ? 'En línea' : 'Ausente'}
                </span>
              </div>
              <div className="text-medium-text text-xs mb-2 tracking-wide">
                {hoveredMatch.games.slice(0, 2).join(' · ')}
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-light-text/80">{hoveredMatch.platform}</span>
                <span className="text-medium-text">★ {hoveredMatch.rating}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

Planet3D.displayName = 'Planet3D';

export default Planet3D;
