import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { BACK_COLOR, WHITE_COLOR } from './config/constans'

type Props  = {
  onPress: () => void;
}
/**
 * Renderiza boton con nombre centrado que se extiende por todo el contenedor
 * dado que su contenedor es flex: 1.
 * @param props.onPress callback para el evento de touch
 * @returns {JSX.Element}
 */
const ButtonFlex = (props: Props): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.textButton}>CREAR</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACK_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: WHITE_COLOR,
    fontSize: 16,
    fontWeight: 'bold'
  },
})

export default ButtonFlex;

