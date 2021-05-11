import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import ClientModel from '../../../modules/graphql/client/model/ClientModel'

type Props = {
  item: ClientModel,
  index: number
}

/**
 * Renderiza la información del cliente y la opción de editar.
 * @param {Props}
 * @returns {JSX.Element}
 */

const ItemClientList = (props: Props): JSX.Element => {
  const {firstName, lastName, cedula} = props.item;
  return (
    <View style={styles.container} key={props.index}>
      <Text>{`${firstName} ${lastName}`}</Text>
      <Text>{cedula}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
})

export default ItemClientList;