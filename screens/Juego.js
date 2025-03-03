import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useScore } from '../context/ScoreContext';

const Juego = ({ route, navigation }) => {
  const { difficulty } = route.params; // Obtener la dificultad seleccionada desde route.params

  const {
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
    setSpecialMultiplier,
  } = useScore();

  const [currentQuestion, setCurrentQuestion] = useState({});
  const [options, setOptions] = useState([]);
  const [time, setTime] = useState(timeLeft);

  // Generar una pregunta basada en la dificultad seleccionada
  const generateQuestion = () => {
    let num1, num2, correctAnswer, questionText;
    const operation = Math.floor(Math.random() * 4); // Suma, Resta, Multiplicación, División

    // Generar números según la dificultad seleccionada
    switch (difficulty) {
      case 1:
        num1 = Math.floor(Math.random() * 10) + 1;  // 1 dígito
        num2 = Math.floor(Math.random() * 10) + 1;
        break;
      case 2:
        num1 = Math.floor(Math.random() * 90) + 10;  // 2 dígitos
        num2 = Math.floor(Math.random() * 90) + 10;
        break;
      case 3:
        num1 = Math.floor(Math.random() * 900) + 100;  // 3 dígitos
        num2 = Math.floor(Math.random() * 900) + 100;
        break;
      default:
        num1 = 1;
        num2 = 1;
    }

    // Generar la pregunta y la respuesta correcta
    switch (operation) {
      case 0: // Suma
        correctAnswer = num1 + num2;
        questionText = `${num1} + ${num2}`;
        break;
      case 1: // Resta
        correctAnswer = num1 - num2;
        questionText = `${num1} - ${num2}`;
        break;
      case 2: // Multiplicación
        correctAnswer = num1 * num2;
        questionText = `${num1} * ${num2}`;
        break;
      case 3: // División
        correctAnswer = Math.floor(num1 / num2);
        questionText = `${num1} ÷ ${num2}`;
        break;
    }

    // Crear opciones de respuesta (incluyendo la correcta)
    const randomOptions = [correctAnswer];
    while (randomOptions.length < 4) {
      const randomOption = Math.floor(Math.random() * 20) + 1;
      if (!randomOptions.includes(randomOption)) randomOptions.push(randomOption);
    }

    setCurrentQuestion({ questionText, correctAnswer });
    setOptions(randomOptions.sort(() => Math.random() - 0.5)); // Mezclar las opciones
  };

  useEffect(() => {
    generateQuestion();
  }, [difficulty]); // Generar una nueva pregunta cuando cambie la dificultad

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      // Fin de tiempo, resetear y guardar puntaje
      alert('¡Se acabó el tiempo!');
      resetScore();
      navigation.navigate('FinJuego');
    }
  }, [time]);

  // Función para manejar respuesta seleccionada
  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      // Respuesta correcta
      incrementScore(applyMultiplier(10));
      incrementStreak();
      generateQuestion();
    } else {
      // Respuesta incorrecta
      resetStreak();
      generateQuestion();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.question}>{currentQuestion.questionText}</Text>
      <View style={styles.options}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.option} onPress={() => handleAnswer(option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.time}>Tiempo restante: {time}s</Text>
      <Text style={styles.score}>Puntuación: {score}</Text>
      <Text style={styles.streak}>Racha: {streak}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  options: {
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 18,
    marginTop: 10,
  },
  streak: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Juego;
