import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SelectorDificultad = ({ navigation }) => {

  const handleSelectDifficulty = (difficulty) => {
    navigation.navigate('Juego', { difficulty });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona la dificultad</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#28a745' }]}
        onPress={() => handleSelectDifficulty(1)} 
      >
        <Text style={styles.buttonText}>Nivel 1</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#ffc107' }]}
        onPress={() => handleSelectDifficulty(2)}
      >
        <Text style={styles.buttonText}>Nivel 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#dc3545' }]} 
        onPress={() => handleSelectDifficulty(3)} 
      >
        <Text style={styles.buttonText}>Nivel 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SelectorDificultad;
