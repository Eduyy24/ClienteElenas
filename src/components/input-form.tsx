import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { BACK_COLOR, WHITE_COLOR } from '../config/constans';

export type Props = {
  label: string;
  onChangeText: (text: string) => void;
}

/**
 * Renderiza input para diligenciamiento de información
 * @param {string} props.label Label del input
 * @param {(text: string) => void} props.onChangeText Callback para el cambio de texto
 * @returns {JSX.Element} InputForm
 */
export default function InputForm(props: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.TextInput}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
