import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useTheme } from '../context/ThemeContext';

const Tutorial = ({ navigation }) => {
  const { darkMode } = useTheme();

  return (
    <SafeAreaView style={[styles.container, darkMode ? styles.darkMode : styles.lightMode]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Sección 1: De qué trata el juego */}
        <View style={styles.section}>
          <FontAwesome5 name="question" size={40} color="#007bff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.header}>¿De qué trata el juego?</Text>
            <Text style={[styles.text, darkMode && styles.darkText]}>
              Math Rush es un juego de matemáticas donde deberás resolver operaciones básicas.
              ¡Responde rápidamente para ganar más puntos!
            </Text>
          </View>
        </View>

        <View style={styles.separator} />

        {/* Sección 2: Cómo se juega */}
        <View style={styles.section}>
          <Ionicons name="game-controller" size={40} color="#007bff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.header}>¿Cómo se juega?</Text>
            <Text style={[styles.text, darkMode && styles.darkText]}>
              Debes elegir la respuesta correcta entre 4 opciones para cada operación.
              El tiempo se reduce conforme avanzas y las operaciones se vuelven más difíciles.
            </Text>
          </View>
        </View>

        <View style={styles.separator} />

        {/* Sección 3: Sistema de puntuación y racha */}
        <View style={styles.section}>
          <FontAwesome5 name="fire-alt" size={40} color="#007bff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.header}>Sistema de puntuación y racha</Text>
            <Text style={[styles.text, darkMode && styles.darkText]}>
              Tu puntaje aumentará por cada respuesta correcta. Si mantienes una racha, ganarás puntos extras.
              ¡No dejes que tu racha se rompa!
            </Text>
          </View>
        </View>

        <View style={styles.separator} />

        {/* Sección 4: Sistema de preguntas especiales */}
        <View style={styles.section}>
          <Octicons name="number" size={40} color="#007bff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.header}>Sistema de preguntas especiales</Text>
            <Text style={[styles.text, darkMode && styles.darkText]}>
              Algunas preguntas especiales te darán multiplicadores de puntos. ¡Sé rápido y no falles!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  lightMode: {
    backgroundColor: '#f7f7f7',  // Fondo blanco suave para el modo claro
  },
  darkMode: {
    backgroundColor: '#333',  // Fondo oscuro para el modo oscuro
  },
  scrollContainer: {
    paddingBottom: 60,  // Para que el contenido no quede pegado al final
  },
  section: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',  // Alinea los íconos y el texto al principio
  },
  icon: {
    marginRight: 20,  // Espacio entre el icono y el texto
  },
  textContainer: {
    flex: 1,  // Hace que el texto ocupe todo el espacio disponible
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  darkHeader: {
    color: '#fff',  // Cambia el color del título a blanco en modo oscuro
  },
  text: {
    fontSize: 18,
    color: '#333',
    lineHeight: 25,  // Aumenta la altura de línea para mejor legibilidad
  },
  darkText: {
    color: '#ccc',  // Cambia el color del texto a un gris claro en modo oscuro
  },
  separator: {
    height: 1,
    backgroundColor: '#d3d3d3',  // Línea gris separadora
    marginVertical: 10,
  },
});

export default Tutorial;
