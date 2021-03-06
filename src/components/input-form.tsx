import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import { BACK_COLOR, WHITE_COLOR } from '../config/constans';

export type Props = {
  label: string;
  onChangeText: (text: string) => void;
  value?: string;
  selectList?: string[]
  type?: 'selectSearch' // se puede agregar mas tipos donde se requiera un comportamineto en específico
}

/**
 * Renderiza input para diligenciamiento de información
 * @param {string} props.label Label del input
 * @param {string} props.value opcional, inserta el valor para el input
 * @param {string[]} props.selectList opcional, lista de opciones a presentar
 * @param {(text: string) => void} props.onChangeText Callback para el cambio de texto,
 * aplica para el input por default y type: "selectSearch"
 * 
 * @returns {JSX.Element} InputForm
 */
export default function InputForm(props: Props): JSX.Element {
  const [valueAuto, setValueAuto] = useState('')
  const [options, setOptions] = useState([''])

  useEffect(() => {
    if(props.value){
      setValueAuto(props.value)
    } else {
      setValueAuto('')
    }
  }, [props.value])
  
  let _menu: any;

  const setMenuRef = (ref: any) => {
    _menu = ref;
  }

  const onPressOption = (index: number) => {
    _menu.hide();
    setValueAuto(options[index])
    return props.onChangeText(options[index])
  };

  const searchOption = () => {
    if(valueAuto){
      // filtro los primeros tres elementos de la lista las opciones que contengan el valor de entrada
      setOptions(props.selectList?.filter((item) => item.toLowerCase().includes(valueAuto.toLowerCase())).slice(0, 3) || [])
      _menu.show();
    }
  }

  const onChangeTextAuto = (value: string) => {
    setValueAuto(value)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.containerInput}>
        {
          !props.type && (
            <TextInput
              testID={props.label}
              style={styles.TextInput}
              onChangeText={props.onChangeText}
              value={props.value}
            />
          )
        }
        {
          props.type === 'selectSearch' && (
            <View style={styles.containerAutocomplete}>
              <View style={styles.subContainerAuto}>
                <TextInput
                  testID={props.label}
                  style={styles.TextInput}
                  onChangeText={onChangeTextAuto}
                  value={valueAuto}
                />
                <TouchableOpacity // botón para busqueda del valor del input
                  style={styles.searhOption}
                  onPress={searchOption}
                >
                  <Text testID={`buscar_${props.label}`}>Buscar</Text>
                </TouchableOpacity>
              </View>
              <Menu ref={setMenuRef}> 
                {props.selectList && ( // libreria que renderia el resultado de la busqueda
                  options.map((item: string, index: number) => (
                    <MenuItem testID={`item${index}`} key={index} onPress={() => onPressOption(index)}>
                      <Text>{item}</Text>
                    </MenuItem>
                  ))
                )}
              </Menu>
            </View>
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searhOption: {
    alignSelf: 'center'
  },
  subContainerAuto: {
    flex: 1,
    flexDirection: 'row',
  },
  containerAutocomplete: {
    flex: 1,
  },
  TextInput: {
    flex: 1,
    color: WHITE_COLOR
  },
  container: {
    height: 90,
    justifyContent: 'center',
  },
  containerInput: {
    backgroundColor: BACK_COLOR,
    borderRadius: 15,
    height: '40%',
    minHeight: 30,
    maxHeight: 50,
    paddingHorizontal: 5,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
});
