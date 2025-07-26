import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardEstudiante = ({ nombre, edad, imagen }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagen }} style={styles.imagen} />
      <View style={styles.info}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.edad}>Edad: {edad}</Text>
      </View>
    </View>
  );
};

export default CardEstudiante;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  edad: {
    fontSize: 16,
    color: '#555',
  },
});
