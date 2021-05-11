import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ButtonFlex from '../../components/button-flex';
import LoadingComponent from '../../components/loading-component';
import { getClients } from '../../modules/graphql/client/ClientController';
import ItemClientList from './components/item-client-list';


const HomeLayout = () => {
  let clients = getClients()
  console.log(clients);
  
  return (
    <View style={styles.container}>
      <View style={styles.sectionTitle}>
        <Text>Clientes Elenas</Text>
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
        <ButtonFlex onPress={()=>{}} />
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
  }
})

export default HomeLayout;