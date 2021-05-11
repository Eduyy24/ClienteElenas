import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';
import InputForm from '../../../components/input-form';
import { EmptyFuntion } from '../../../config/types';
import { ClientInputModel } from '../../../modules/graphql/client/model/ClientModel';

type Props = {
  visibleModal: boolean;
  onPressCloseModal: EmptyFuntion;
  client: ClientInputModel;
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
          <InputForm label="Nombre" onChangeText={()=>{}} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    textAlign: 'center',
    fontSize: 18,
  },
  sectionForm: {
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
