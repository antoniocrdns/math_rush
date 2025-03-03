import React, { createContext, useState, useContext } from 'react';

const ScoreContext = createContext();

// Proveedor del contexto
export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0); // Puntuación total
  const [streak, setStreak] = useState(0); // Racha de respuestas correctas
  const [multiplier, setMultiplier] = useState(1); // Multiplicador normal
  const [specialMultiplier, setSpecialMultiplier] = useState(1); // Multiplicador especial
  const [timeLeft, setTimeLeft] = useState(30); // Tiempo restante en segundos

  const incrementScore = (points) => {
    setScore((prevScore) => prevScore + points);
  };

  const resetScore = () => {
    setScore(0);
    setStreak(0);
    setMultiplier(1);
    setSpecialMultiplier(1);
  };

  const incrementStreak = () => {
    setStreak((prevStreak) => prevStreak + 1);
  };

  const resetStreak = () => {
    setStreak(0);
  };

  const applyMultiplier = (points) => {
    return points * multiplier * specialMultiplier;
  };

  return (
    <ScoreContext.Provider
      value={{
        score,
        streak,
        multiplier,
        specialMultiplier,
        timeLeft,
        incrementScore,
        resetScore,
        incrementStreak,
        resetStreak,
        applyMultiplier,
        setTimeLeft,
        setMultiplier,
        setSpecialMultiplier
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);
