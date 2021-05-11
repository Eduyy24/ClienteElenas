import { useMutation } from '@apollo/client';
import React from 'react'
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import ButtonFlex from '../../components/button-flex';
import LoadingComponent from '../../components/loading-component';
import { TEXT_ERROR } from '../../config/constans';
import { useCreateClient, getClients } from '../../modules/graphql/client/ClientController';
import { ClientInputModel } from '../../modules/graphql/client/model/ClientModel';
import ItemClientList from './components/item-client-list';


const HomeLayout = () => {
  let clients = getClients()

  const createClient = useCreateClient(
    () => {
      clients = getClients();
      Alert.alert('Creación Exitosa')
    },
    () => {Alert.alert(TEXT_ERROR)},
  )

  const onPressCreateClient = () => createClient(new ClientInputModel)
  return (
    <View style={styles.container}>
      <View style={styles.sectionTitle}>
        <Text style={styles.textTittle}>Clientes Elenas</Text>
      </View>
      <View style={styles.sectionList}>
        {
          clients ? (
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={clients}
              renderItem={({ item, index}) => <ItemClientList item={item} index={index} />}
              refreshing={false}
              onRefresh={() => clients = getClients()}
            />
          ) : (
            <LoadingComponent />
          )
        }
      </View>
      <View style={styles.sectionFooter}>
        <ButtonFlex onPress={onPressCreateClient} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    flex: 1,
    maxHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionList:{
    flex: 1,
    padding: 16,
  },
  sectionFooter:{
    flex: 1,
    maxHeight: 40,
  },
  textTittle: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '500',
  }
})

export default HomeLayout;