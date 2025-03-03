import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const FinJuego = ({ route, navigation }) => {
  const { puntajeFinal } = route.params;  // Puntaje final que se pasa desde la pantalla Juego
  const [nombre, setNombre] = useState('');  // Estado para almacenar el nombre del jugador

  // Función para manejar el guardado del puntaje
  const handleGuardarPuntaje = () => {
    if (nombre.trim() === '') {
      alert('Por favor ingresa tu nombre');
      return;
    }

    // Aquí se guardaría el puntaje en la base de datos o AsyncStorage
    // Ejemplo: guardado en la base de datos o en un arreglo global

    // Luego de guardar, redirigimos a la pantalla de Marcadores
    navigation.navigate('Marcadores');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>¡Fin del Juego!</Text>
      <Text style={styles.puntaje}>Tu puntaje final es: {puntajeFinal}</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TouchableOpacity style={styles.button} onPress={handleGuardarPuntaje}>
        <Text style={styles.buttonText}>Terminado</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  puntaje: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FinJuego;
