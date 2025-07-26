// SegundaPantalla.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CardEstudiante from '../components/Card';

const SegundaPantalla = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CardEstudiante
        nombre="Fabiola Aracely Retana Osorto"
        edad={18}
        imagen="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
      />
      <Button
        title="Volver a la pantalla principal"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default SegundaPantalla;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#EAF0F1',
  },
});
