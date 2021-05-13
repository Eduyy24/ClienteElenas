import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { EmptyFuntion } from '../../../config/types'
import { ClientOutputModel } from '../../../modules/graphql/client/model/ClientModel'

type Props = {
  item: ClientOutputModel;
  index?: number;
  onPressEditClient: EmptyFuntion;
}

/**
 * Renderiza la información del cliente y la opción de editar.
 * @param {ClientOutputModel} props.item Data del cliente a renderizar
 * @param {number} props.index key para el item
 * @param {EmptyFuntion} props.onPressEditClient Resuelve el evento editar cliente 
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
      <TouchableOpacity 
        onPress={props.onPressEditClient}
      >
        <Text>Editar</Text>
      </TouchableOpacity>
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