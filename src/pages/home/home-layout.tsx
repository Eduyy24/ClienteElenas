import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ButtonFlex from '../../components/button-flex';
import LoadingComponent from '../../components/loading-component';
import { getClients } from '../../modules/graphql/client/ClientController';
import { ClientInputModel } from '../../modules/graphql/client/model/ClientModel';
import ItemClientList from './components/item-client-list';
import ModalForm from './components/modal-form';


const HomeLayout = () => {
  let client = new ClientInputModel() // variable de paso, para evitar hacer re-render
  const [stateModal, setStateModal] = useState(false)
  const {clients, refetch} = getClients()
  console.log(clients);
  
  const onPressCreateClient = () => {
    setStateModal(true)
  }

  const onPressCloseModal = () => {
    client = new ClientInputModel();
    refetch()
    setStateModal(false)
  }

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
              onRefresh={() => refetch()}
            />
          ) : (
            <LoadingComponent />
          )
        }
      </View>
      <View style={styles.sectionFooter}>
        <ButtonFlex title="CREAR" onPress={onPressCreateClient} />
      </View>
      <ModalForm 
        visibleModal={stateModal}
        onPressCloseModal={onPressCloseModal} 
        client={client}
      />
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