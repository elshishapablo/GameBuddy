// Algoritmo de match basado en juegos en común y disponibilidad horaria
export const findMatches = (userProfile, allMatches) => {
  if (!userProfile || !allMatches) return [];

  const { games: userGames, schedule: userSchedule, platform: userPlatform } = userProfile;

  return allMatches
    .map((match) => {
      // Calcular juegos en común
      const commonGames = userGames.filter((game) => match.games.includes(game));
      const commonGamesCount = commonGames.length;

      // Calcular puntuación de compatibilidad
      let score = 0;

      // Puntos por juegos en común (máximo 50 puntos)
      score += (commonGamesCount / Math.max(userGames.length, match.games.length)) * 50;

      // Puntos por horario coincidente (30 puntos)
      if (match.schedule === userSchedule) {
        score += 30;
      }

      // Puntos por plataforma coincidente (20 puntos)
      if (match.platform === userPlatform) {
        score += 20;
      }

      return {
        ...match,
        commonGames,
        compatibilityScore: Math.round(score),
      };
    })
    .filter((match) => match.compatibilityScore > 0) // Solo matches con alguna compatibilidad
    .sort((a, b) => b.compatibilityScore - a.compatibilityScore); // Ordenar por compatibilidad
};

// Filtrar por micrófono
export const filterByMicrophone = (matches, hasMicrophone) => {
  if (hasMicrophone === null) return matches; // null = mostrar todos
  return matches.filter((match) => match.hasMicrophone === hasMicrophone);
};

