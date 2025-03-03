import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext'; // Importamos el hook del tema

const MenuPrincipal = ({ navigation }) => {
  const { darkMode } = useTheme(); // Obtenemos el estado del tema

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
          onPress={() => alert('Saliendo de la app...')}  // Aquí puedes manejar el cierre de la app
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
    backgroundColor: '#f7f7f7',  // Fondo blanco suave para el modo claro
  },
  darkMode: {
    backgroundColor: '#333',  // Fondo oscuro para el modo oscuro
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'red',  // Título en color rojo
    marginBottom: 50,  // Separación con los botones
  },
  button: {
    backgroundColor: '#007bff',  // Color azul para los botones
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',  // Asegura que el texto esté centrado vertical y horizontalmente
    width: '80%',  // El botón tomará todo el ancho disponible
  },
  playButton: {
    backgroundColor: '#0056b3',  // Un azul más oscuro para el botón de "Jugar"
    fontSize: 20,
    marginBottom: 30,  // Separación con los botones de la cuadrícula
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  grid: {
    flexDirection: 'row',  // Distribuye los botones en filas horizontales
    flexWrap: 'wrap',  // Permite que los botones se ajusten en múltiples filas
    justifyContent: 'space-between',  // Espacio entre botones
    width: '80%',  // Limita el ancho de la cuadrícula a 80% de la pantalla
  },
  gridButton: {
    backgroundColor: '#007bff',  // Color azul para los botones
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',  // Centra el texto horizontalmente
    justifyContent: 'center',  // Centra el texto verticalmente
    width: '48%',  // Cada botón ocupa el 48% del ancho del contenedor, ajustándose a la cuadrícula
  },
  exitButton: {
    backgroundColor: '#e60000',  // Rojo para el botón de salir
  },
  exitButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MenuPrincipal;
