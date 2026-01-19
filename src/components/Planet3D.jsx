import { useEffect, useRef, useState, memo } from 'react';
import { motion } from 'framer-motion';
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

  // Actualizar el ref cuando cambie onMatchClick sin causar re-render
  useEffect(() => {
    onMatchClickRef.current = onMatchClick;
  }, [onMatchClick]);

  // Función para convertir coordenadas planas a coordenadas esféricas
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

  // Función para convertir lat/lng a coordenadas 3D
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

    let scene, camera, renderer, controls, globeShape, matchPoints = [];
    let handleMouseMove, handleClick, handleResize;

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

      // Setup scene
      scene = new THREE.Scene();
      scene.background = null;

      // Setup camera
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 265);

      // Setup renderer
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(width, height);
      renderer.setClearColor(0xffffff, 0);

      // Función para generar puntos aproximados de continentes
      const generateContinentPoints = () => {
        const points = [];
        const gw = 4098 / 2;
        const gh = 1968 / 2;

        // América del Norte
        for (let i = 0; i < 200; i++) {
          points.push({
            x: gw * 0.2 + Math.random() * gw * 0.3,
            y: gh * 0.3 + Math.random() * gh * 0.4,
          });
        }
        // América del Sur
        for (let i = 0; i < 150; i++) {
          points.push({
            x: gw * 0.25 + Math.random() * gw * 0.2,
            y: gh * 0.7 + Math.random() * gh * 0.25,
          });
        }
        // Europa
        for (let i = 0; i < 100; i++) {
          points.push({
            x: gw * 0.45 + Math.random() * gw * 0.15,
            y: gh * 0.25 + Math.random() * gh * 0.2,
          });
        }
        // África
        for (let i = 0; i < 120; i++) {
          points.push({
            x: gw * 0.48 + Math.random() * gw * 0.12,
            y: gh * 0.45 + Math.random() * gh * 0.3,
          });
        }
        // Asia
        for (let i = 0; i < 250; i++) {
          points.push({
            x: gw * 0.6 + Math.random() * gw * 0.35,
            y: gh * 0.2 + Math.random() * gh * 0.4,
          });
        }
        // Oceanía
        for (let i = 0; i < 80; i++) {
          points.push({
            x: gw * 0.75 + Math.random() * gw * 0.2,
            y: gh * 0.6 + Math.random() * gh * 0.25,
          });
        }

        return points;
      };

      // Cargar puntos geográficos
      const loadGlobePoints = () => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        fetch(
          'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard-pro/assets/js/points.json',
          {
            signal: controller.signal,
            cache: 'force-cache',
          }
        )
          .then((response) => {
            clearTimeout(timeoutId);
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
          })
          .then((data) => {
            makeGlobeWithPoints(data.points || []);
          })
          .catch((error) => {
            clearTimeout(timeoutId);
            if (error.name !== 'AbortError') {
              console.warn('No se pudieron cargar los puntos desde la URL:', error);
            }
            const fallbackPoints = generateContinentPoints();
            makeGlobeWithPoints(fallbackPoints);
          });
      };

      // Función para crear el globo con los puntos
      const makeGlobeWithPoints = (points) => {
        if (!points || points.length === 0) {
          console.warn('No hay puntos para renderizar');
          return;
        }

        // Crear geometría merged para los puntos del globo
        const mergedGeometry = new THREE.BufferGeometry();
        const pointGeometry = new THREE.SphereGeometry(0.8, 4, 4);
        const pointMaterial = new THREE.MeshBasicMaterial({
          color: '#9ca3af',
        });

        const positions = [];
        const indices = [];
        let vertexOffset = 0;

        for (const point of points) {
          const { x, y, z } = convertFlatCoordsToSphereCoords(
            point.x,
            point.y,
            globeWidth * 2,
            globeHeight * 2,
            globeRadius
          );

          if (x && y && z) {
            const geometry = pointGeometry.clone();
            const positionAttribute = geometry.attributes.position;

            for (let i = 0; i < positionAttribute.count; i++) {
              positions.push(
                positionAttribute.getX(i) + x,
                positionAttribute.getY(i) + y,
                positionAttribute.getZ(i) + z
              );
            }

            const indexAttribute = geometry.index;
            if (indexAttribute) {
              for (let i = 0; i < indexAttribute.count; i++) {
                indices.push(indexAttribute.getX(i) + vertexOffset);
              }
            }

            vertexOffset += positionAttribute.count;
          }
        }

        if (positions.length === 0) {
          console.warn('No se generaron posiciones válidas');
          return;
        }

        mergedGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        if (indices.length > 0) {
          mergedGeometry.setIndex(indices);
        }
        mergedGeometry.computeVertexNormals();

        globeShape = new THREE.Mesh(mergedGeometry, pointMaterial);
        scene.add(globeShape);

        renderer.render(scene, camera);
        createMatchesAndControls();
      };

      // Función para crear partidas y controles
      const createMatchesAndControls = () => {
        // Crear puntos para las partidas activas
        if (showMatches) {
          const matchGroup = new THREE.Group();
          matchPoints = [];

          const matchesToShow = filteredMatches.length > 0 ? filteredMatches : mockActiveMatches;

          matchesToShow.forEach((match) => {
            const position = latLngToVector3(match.lat, match.lng, globeRadius + 2);
            const matchGeometry = new THREE.SphereGeometry(1.5, 8, 8);
            const matchMaterial = new THREE.MeshBasicMaterial({
              color: match.status === 'online' ? '#4a5568' : '#a0a0a0',
              transparent: true,
              opacity: 0.8,
            });
            const matchMesh = new THREE.Mesh(matchGeometry, matchMaterial);
            matchMesh.position.set(position.x, position.y, position.z);
            matchMesh.userData = match;
            matchGroup.add(matchMesh);
            matchPoints.push(matchMesh);
          });

          scene.add(matchGroup);
        } else {
          matchPoints = [];
        }

        // Setup OrbitControls
        controls = new OrbitControls(camera, canvas);
        controls.enableKeys = false;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableDamping = false;
        controls.enableRotate = true;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 2.0;

        // Mouse handlers
        handleMouseMove = (event) => {
          if (!showMatches || matchPoints.length === 0) return;

          const rect = canvas.getBoundingClientRect();
          mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

          raycasterRef.current.setFromCamera(mouseRef.current, camera);
          const intersects = raycasterRef.current.intersectObjects(matchPoints);

          if (intersects.length > 0) {
            const match = intersects[0].object.userData;
            setHoveredMatch(match);
            setTooltipPosition({ x: event.clientX, y: event.clientY });

            intersects[0].object.material.color.setHex(0x404040);
            intersects[0].object.scale.set(1.5, 1.5, 1.5);
          } else {
            setHoveredMatch(null);
            matchPoints.forEach((point) => {
              const match = point.userData;
              point.material.color.setHex(match.status === 'online' ? 0x4a5568 : 0xa0a0a0);
              point.scale.set(1, 1, 1);
            });
          }
        };

        handleClick = (event) => {
          if (!showMatches || matchPoints.length === 0) return;

          const rect = canvas.getBoundingClientRect();
          mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

          raycasterRef.current.setFromCamera(mouseRef.current, camera);
          const intersects = raycasterRef.current.intersectObjects(matchPoints);

          if (intersects.length > 0 && onMatchClickRef.current) {
            onMatchClickRef.current(intersects[0].object.userData);
          }
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('click', handleClick);

        // Handle resize
        handleResize = () => {
          if (!container || !camera || !renderer) return;
          const newWidth = container.clientWidth;
          const newHeight = container.clientHeight;
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        let lastTime = 0;
        const targetFPS = 60;
        const frameInterval = 1000 / targetFPS;

        const animate = (currentTime) => {
          animationFrameRef.current = requestAnimationFrame(animate);

          const deltaTime = currentTime - lastTime;
          if (deltaTime < frameInterval) return;
          lastTime = currentTime - (deltaTime % frameInterval);

          if (controls) {
            controls.update();
          }

          if (renderer && scene && camera) {
            renderer.render(scene, camera);
          }
        };

        animate(0);
      };

      try {
        loadGlobePoints();
      } catch (error) {
        console.error('Error al inicializar el globo:', error);
        const fallbackPoints = generateContinentPoints();
        makeGlobeWithPoints(fallbackPoints);
      }

      return () => {
        if (handleResize) {
          window.removeEventListener('resize', handleResize);
        }
        if (handleMouseMove) {
          canvas.removeEventListener('mousemove', handleMouseMove);
        }
        if (handleClick) {
          canvas.removeEventListener('click', handleClick);
        }

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        if (controls) {
          controls.dispose();
        }

        if (scene) {
          scene.traverse((object) => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach((mat) => mat.dispose());
              } else {
                object.material.dispose();
              }
            }
          });
        }

        if (renderer) {
          renderer.dispose();
        }
      };
    };

    const cleanup = createGlobe();

    return () => {
      if (cleanup && typeof cleanup === 'function') {
        cleanup();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      isInitializedRef.current = false;
    };
  }, [showMatches, filteredMatches]);

  return (
    <div className="relative w-full h-full min-h-[500px] bg-dark-bg">
      <div ref={mountRef} className="w-full h-full min-h-[500px] bg-dark-bg">
        <canvas
          ref={canvasRef}
          width="700"
          height="600"
          style={{ outline: 'none', width: '100%', height: '100%', background: 'transparent' }}
        />
      </div>

      {hoveredMatch && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed z-50 pointer-events-none"
          style={{
            left: tooltipPosition.x + 10,
            top: tooltipPosition.y - 10,
          }}
        >
          <div className="glass rounded-2xl p-4 min-w-[200px] glow-gray">
            <div className="font-semibold text-lg mb-1 text-light-text">{hoveredMatch.name}</div>
            <div className="text-medium-text text-sm mb-2">
              {hoveredMatch.games.slice(0, 2).join(', ')}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-light-text text-sm">{hoveredMatch.platform}</span>
              <span className="text-sm text-medium-text">⭐ {hoveredMatch.rating}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
});

Planet3D.displayName = 'Planet3D';

export default Planet3D;

