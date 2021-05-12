import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  Alert
} from 'react-native';
import ButtonFlex from '../../../components/button-flex';
import InputForm from '../../../components/input-form';
import { TEXT_ERROR } from '../../../config/constans';
import { EmptyFuntion } from '../../../config/types';
import { useCreateClient } from '../../../modules/graphql/client/ClientController';
import { ClientInputModel } from '../../../modules/graphql/client/model/ClientModel';

type Props = {
  visibleModal: boolean;
  onPressCloseModal: EmptyFuntion;
  client: ClientInputModel;
  type?: 'create' | 'update';
  onPressButton?: () => {}
};

/**
 * Renderiza modal para el diligenciamiento del formulario.
 * @param {EmptyFuntion} props.onPressCloseModal Callback para cerrar el modal
 * @param {boolean} props.visibleModal Controla la visibilidad del modal
 * @param {ClientInputModel} props.client Modelo de datos para el formulario
 * @returns {JSX.Element} ModalForm
 */
export default function ModalForm(props: Props): JSX.Element {
  const { visibleModal, onPressCloseModal} = props;
  const [client, setClient] = useState(new ClientInputModel())

  useEffect(() => {
    if(props.client){
      setClient(props.client)
    }
  }, [props.client])


  const createClient = useCreateClient(
    () => {
      Alert.alert('Creación Exitosa')
    },
    () => {Alert.alert(TEXT_ERROR)},
  )

  const onPressSaveClient = () => {

  }

  const setNameValue = (value: string) => {
    client.firstName = value;
    setClient({...client});
  };

  const setLastNameValue = (value: string) => {
    client.lastName = value;
    setClient({...client});
  };

  const setCedulaValue = (value: string) => {
    client.cedula = value;
    setClient({...client});
  };

  const setCellphoneValue = (value: string) => {
    client.cellphone = value;
    setClient({...client});
  };

  const setEmailValue = (value: string) => {
    client.email = value;
    setClient({...client});
  };

  const setCountryValue = (value: string) => {
    client.address.country = value;    
    setClient({...client});
  };

  const setStreetAddressValue = (value: string) => {
    client.address.streetAddress = value;    
    setClient({...client});
  };

  return (
    <Modal visible={visibleModal} animationType="fade">
      <View style={styles.containerModal}>
        <View style={styles.containerBtnCerrar}>
          <TouchableOpacity
            onPress={onPressCloseModal}
            hitSlop={{ top: 5, left: 5, bottom: 5, right: 5 }}>
            <Text>Cerrar</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.textTitle}>Crear cliente</Text>
        <View style={styles.sectionForm}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <InputForm value={client.firstName} label="Nombre" onChangeText={setNameValue} />
            <InputForm value={client.lastName} label="Apellido" onChangeText={setLastNameValue} />
            <InputForm value={client.cedula} label="Cédula" onChangeText={setCedulaValue} />
            <InputForm value={client.cellphone} label="Celular" onChangeText={setCellphoneValue} />
            <InputForm label="Correo electrónico" onChangeText={setEmailValue} />
            <InputForm label="País" onChangeText={setCountryValue} />
            <InputForm 
              label="Departamento"
              selectList={['hola', 'chao']}
              type="selectSearch"
              onChangeText={()=>{}} 
            />
            <InputForm 
              label="Ciudad" 
              onChangeText={()=>{}} 
            />
            <InputForm label="Dirección" onChangeText={setStreetAddressValue} />
            <View style={styles.containerButton}>
              <ButtonFlex title="GUARDAR" onPress={onPressSaveClient} />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  containerButton:{
    marginTop: 24,
    height: 40,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 18,
  },
  sectionForm: {
    flex: 1,
    padding: 16,
  },
  containerModal: {
    flex: 1,
  },
  containerBtnCerrar: {
    flex: 0.15,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: '4%',
  },
});
