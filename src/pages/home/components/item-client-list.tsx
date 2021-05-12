import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ClientOutputModel } from '../../../modules/graphql/client/model/ClientModel'

type Props = {
  item: ClientOutputModel,
  index: number
}

/**
 * Renderiza la información del cliente y la opción de editar.
 * @param {Props}
 * @returns {JSX.Element}
 */

const ItemClientList = (props: Props): JSX.Element => {
  const { firstName, lastName, cedula } = props.item;
  return (
    <View style={styles.container} key={props.index}>
      <View>
        <Text>{`${firstName} ${lastName}`}</Text>
        <Text>{cedula}</Text>
      </View>
      <TouchableOpacity><Text>Editar</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})

export default ItemClientList;