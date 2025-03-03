import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const Marcadores = () => {
  const marcadores = [
    { id: '1', nombre: 'Juan', puntaje: 250 },
    { id: '2', nombre: 'Ana', puntaje: 200 },
    { id: '3', nombre: 'Carlos', puntaje: 150 },
    { id: '4', nombre: 'Maria', puntaje: 100 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.nombre}: {item.puntaje} puntos</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Marcadores</Text>
      <FlatList
        data={marcadores}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default Marcadores;
