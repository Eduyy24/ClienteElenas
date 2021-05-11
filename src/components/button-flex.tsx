import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { BACK_COLOR, WHITE_COLOR } from '../config/constans'
import { EmptyFuntion } from '../config/types'

type Props  = {
  onPress: EmptyFuntion;
  title: string;
}
/**
 * Renderiza boton con nombre centrado que se extiende por todo el contenedor
 * dado que su contenedor es flex: 1.
 * @param {EmptyFuntion} props.onPress Callback para el evento de touch
 * @param {string} props.title Label del botón
 * @returns {JSX.Element}
 */
const ButtonFlex = (props: Props): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.textButton}>{props.title}</Text>
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

