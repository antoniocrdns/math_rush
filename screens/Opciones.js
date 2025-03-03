import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const Opciones = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <View style={[styles.container, darkMode ? styles.darkMode : styles.lightMode]}>
      {/* Modo Oscuro */}
      <View style={styles.option}>
        <Text style={styles.optionText}>Modo Oscuro</Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode} // Cambia entre modo claro y oscuro
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#007bff" : "#f4f3f4"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  lightMode: {
    backgroundColor: '#f7f7f7', // Fondo claro
  },
  darkMode: {
    backgroundColor: '#333', // Fondo oscuro
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  lightTitle: {
    color: '#007bff', // Titulo claro
  },
  darkTitle: {
    color: '#fff', // Titulo oscuro
  },
  option: {
    marginBottom: 20,
  },
  optionText: {
    fontSize: 20,
    color: '#007bff',
    marginBottom: 10,
    fontWeight: 'bold'
  },
});

export default Opciones;
