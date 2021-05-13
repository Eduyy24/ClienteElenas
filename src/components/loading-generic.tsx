import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Renderiza loading genérico centrado, necesita un contenedor
 * o de lo contrario ocupará todo el espacio disponible, dado que tiene flex: 1
 * 
 * @returns {JSX.Element}
 */
const LoadingComponent = (): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.textLoading}>Cargando...</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoading: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default LoadingComponent;