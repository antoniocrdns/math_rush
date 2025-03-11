import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
const MenuPrincipal = ({ navigation }) => {
  const { darkMode } = useTheme();

  return (
    <SafeAreaView style={[styles.container, darkMode ? styles.darkMode : styles.lightMode]}>
      {/* Título del juego en rojo */}
      <Text style={styles.title}>Math Rush</Text>

      {/* Botón de Jugar */}
      <TouchableOpacity 
        style={[styles.button, styles.playButton]} 
        onPress={() => navigation.navigate('SelectorDificultad')}
      >
        <Text style={styles.buttonText}>Jugar</Text>
      </TouchableOpacity>

      {/* Cuadrícula 2x2 para los botones */}
      <View style={styles.grid}>
        {/* Fila 1 */}
        <TouchableOpacity 
          style={styles.gridButton} 
          onPress={() => navigation.navigate('Tutorial')}
        >
          <Text style={styles.buttonText}>Tutorial</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.gridButton} 
          onPress={() => navigation.navigate('Marcadores')}
        >
          <Text style={styles.buttonText}>Marcadores</Text>
        </TouchableOpacity>

        {/* Fila 2 */}
        <TouchableOpacity 
          style={styles.gridButton} 
          onPress={() => navigation.navigate('Opciones')}
        >
          <Text style={styles.buttonText}>Opciones</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.gridButton, styles.exitButton]} 
          onPress={() => alert('Saliendo de la app...')} // No funciona
        >
          <Text style={styles.exitButtonText}>Salir</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lightMode: {
    backgroundColor: '#f7f7f7',
  },
  darkMode: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  playButton: {
    backgroundColor: '#0056b3',
    fontSize: 20,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '80%',
  },
  gridButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center', 
    width: '48%',
  },
  exitButton: {
    backgroundColor: '#e60000', 
  },
  exitButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MenuPrincipal;
