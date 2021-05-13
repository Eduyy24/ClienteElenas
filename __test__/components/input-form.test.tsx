import React from 'react';
import { fireEvent, render } from '@testing-library/react-native'
import InputForm from '../../src/components/input-form';


describe('<InputForm />', () => {

  test('Comprobar la UI del componente ButtonFlex', () => {
    const input = <InputForm onChangeText={() => {}} label="Nombre" />
    const {toJSON} = render(input);
    expect(toJSON()).toMatchSnapshot();
  });

  test('se valida el llamado al callback, cuando se escribe en el input, se genera snapshot del comportamiento', async () => {
    const onPress = jest.fn()
    const inputForm = <InputForm onChangeText={onPress} label="Nombre" />
    const wraper = render(inputForm)

    const input = wraper.getByTestId('input')
    fireEvent.changeText(input, 'Eduardo')

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(wraper.toJSON()).toMatchSnapshot();
  })
});