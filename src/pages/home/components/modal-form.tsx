import React, { useCallback, useEffect, useState } from 'react';
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
import { useCreateClient, useGetStates } from '../../../modules/graphql/client/ClientController';
import { CityModel, ClientInputModel } from '../../../modules/graphql/client/model/ClientModel';

type Props = {
  visibleModal: boolean;
  onPressCloseModal: EmptyFuntion;
  client: ClientInputModel;
  type: string;
};

/**
 * Renderiza modal para el diligenciamiento del formulario.
 * @param {EmptyFuntion} props.onPressCloseModal Callback para cerrar el modal
 * @param {boolean} props.visibleModal Controla la visibilidad del modal
 * @param {ClientInputModel} props.client Modelo de datos para el formulario
 * @param {string} props.type controla el comportamiento, para crear o actualizar un cliente,
 * opciones válidas: 'create', 'update'
 * 
 * @returns {JSX.Element} ModalForm
 */
export default function ModalForm(props: Props): JSX.Element {
  const statesData = useGetStates()
  const { visibleModal, onPressCloseModal } = props;
  const [client, setClient] = useState(new ClientInputModel())
  const [cities, setCities] = useState(Array<string>(0))
  const [citiesData, setCitiesData] = useState(Array<CityModel>(0))
  const [states, setStates] = useState(Array<string>(0))


  useEffect(() => {
    if (props.client) {
      setClient(props.client)
    }
  }, [props.client])

  useEffect(() => {
    if (statesData) {
      setStates(statesData.map((item) => item.name))
    }
    // si viene un cliente con stateId cargo tanto la lista del input,
    // para extraer la data al seleccionar una nueva ciudad.
    if (props.client.address.stateId){ 
      const state = statesData.find((item) => item.id === props.client.address.stateId)
      const cities = state?.cities.map((item) => item.name) || []
      setCitiesData(state?.cities || []); 
      setCities(cities)
    }
  }, [statesData])

  const getNameState = (id: number) => {
    return statesData.find((item) => item.id === id)?.name || ''
  }

  const createClient = useCreateClient(
    () => {
      props.onPressCloseModal()
      Alert.alert('Creación Exitosa')
    },
    () => {Alert.alert(TEXT_ERROR)},
  )

  const onPressSaveClient = useCallback(() => {
    if(
      client.cedula !== '',
      client.cellphone !== '',
      client.email != '',
      client.firstName !== '',
      client.lastName !== '',
      client.address.city !== '',
      client.address.country !== '',
      client.address.streetAddress !== '',
      client.address.stateShortCode !== ''
    ){
      client.cellphone = `+57 ${client.cellphone}`
      createClient(client)
    } else {
      Alert.alert('Por favor diligenciar todos los campos')
    }
  }, [client])

  const onPressUpdateClient = () => {

  }


  const setNameValue = (value: string) => {
    client.firstName = value;
    setClient({ ...client });
  };

  const setLastNameValue = (value: string) => {
    client.lastName = value;
    setClient({ ...client });
  };

  const setCedulaValue = (value: string) => {
    client.cedula = value;
    setClient({ ...client });
  };

  const setCellphoneValue = (value: string) => {
    client.cellphone = value;
    setClient({ ...client });
  };

  const setEmailValue = (value: string) => {
    client.email = value;
    setClient({ ...client });
  };

  const setCountryValue = (value: string) => {
    client.address.country = value;
    setClient({ ...client });
  };

  const setStreetAddressValue = (value: string) => {
    client.address.streetAddress = value;
    setClient({ ...client });
  };

  const onChangeState = (value: string) => {
    const state = statesData.find((item) => item.name === value)
    client.address.stateId = state?.id || 0;
    client.address.stateShortCode = state?.shortCode || '';
    
    const cities = state?.cities.map((item) => item.name) || []
    
    setCitiesData(state?.cities || []); // guardo la lista original para extraer los datos despues
    setCities(cities)
  };

  const onChangeCity = (value: string) => {
    const city = citiesData.find((item) => item.name === value)
    client.address.cityId = city?.id || 0;
    client.address.city = city?.name || '';
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
        {
          props.type === 'create' ? ( // en caso de haber mas types, se debe agregar mas comparaciones
            <Text style={styles.textTitle}>Crear cliente</Text>
          ):(
            <Text style={styles.textTitle}>Actualizar cliente</Text>
          )
        }
        <View style={styles.sectionForm}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <InputForm value={client.firstName} label="Nombre" onChangeText={setNameValue} />
            <InputForm value={client.lastName} label="Apellido" onChangeText={setLastNameValue} />
            <InputForm value={client.cedula} label="Cédula" onChangeText={setCedulaValue} />
            <InputForm value={client.cellphone.replace('+57 ', '')} label="Celular" onChangeText={setCellphoneValue} />
            <InputForm value={client.email} label="Correo electrónico" onChangeText={setEmailValue} />
            { // campo no mapeado para actualizar clientes
              props.type === 'create' && (
                <InputForm label="País" onChangeText={setCountryValue} />
              )
            }
            <InputForm
              label="Departamento"
              value={client.address.stateId ? getNameState(client.address.stateId) : ''}
              selectList={states}
              type="selectSearch"
              onChangeText={onChangeState}
            />
            { // si no existe stateId no han selecionado departamento
              !!client.address.stateId && (
                <InputForm
                  label="Ciudad"
                  value={client.address.city}
                  selectList={cities}
                  type="selectSearch"
                  onChangeText={onChangeCity}
                />
              )
            }
            <InputForm value={client.address.streetAddress} label="Dirección" onChangeText={setStreetAddressValue} />
            <View style={styles.containerButton}>
              {
                props.type === 'create' ? ( // en caso de haber mas types, se debe agregar mas comparaciones
                  <ButtonFlex title="GUARDAR" onPress={onPressSaveClient} />
                ) : (
                  <ButtonFlex title="ACTUALIZAR" onPress={onPressUpdateClient} />
                )
              }
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    marginTop: 24,
    height: 40,
  },
  textTitle: {
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
