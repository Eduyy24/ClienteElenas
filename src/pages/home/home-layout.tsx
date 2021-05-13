import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ButtonFlex from '../../components/button-flex';
import LoadingComponent from '../../components/loading-component';
import { useGetClients } from '../../modules/graphql/client/ClientController';
import { ClientInputModel, ClientOutputModel } from '../../modules/graphql/client/model/ClientModel';
import ItemClientList from './components/item-client-list';
import ModalForm from './components/modal-form';


const HomeLayout = () => {
  const {clients, refetch} = useGetClients()
  const [stateModal, setStateModal] = useState(false)
  const [mode, setMode] = useState('')
  const [clientRender, setClientRender] = useState(new ClientInputModel())

  const onPressCreateClient = () => {
    setMode('create')
    setClientRender(new ClientInputModel())
    setStateModal(true)
  }

  const onPressCloseModal = () => {
    refetch()
    setStateModal(false)
    setClientRender(new ClientInputModel())
  }

  const onPressEditClient = (client: ClientOutputModel) => {
    clientRender.id = client.id;
    clientRender.firstName = client.firstName;
    clientRender.lastName = client.lastName;
    clientRender.email = client.email;
    clientRender.cellphone = client.cellphone.replace('+57 ', '');
    clientRender.cedula = client.cedula;
    clientRender.address.streetAddress = client.address;
    clientRender.address.stateId = client.state.id;
    clientRender.address.stateShortCode = client.state.shortCode;
    const city = client.state.cities.find(item => item.name === client.city);
    clientRender.address.city = client.city;
    clientRender.address.cityId = city?.id || 0;

    setMode('update')
    setClientRender(clientRender)
    setStateModal(true)
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
              renderItem={({ item, index}) => 
                <ItemClientList
                  item={item} 
                  index={index}
                  onPressEditClient={() => onPressEditClient(item)}
              />}
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
      {stateModal && (<ModalForm
        type={mode}
        visibleModal={stateModal}
        onPressCloseModal={onPressCloseModal} 
        client={clientRender}
      />)}
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