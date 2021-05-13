import React from 'react';
import { fireEvent, render } from '@testing-library/react-native'

import ButtonFlex from '../../src/components/button-flex';


describe('<ButtonFlex />', () => {

  test('Comprobar la UI del componente ButtonFlex', () => {
    const {toJSON} = render(<ButtonFlex onPress={() => {}} title="CREAR" />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('Validación de la ejecución del callback cuando se interactua con el Button', async () => {
    const onPress = jest.fn()
    const { getByText } = render(<ButtonFlex onPress={onPress} title="CREAR" />)
  
    const button = getByText('CREAR')
    fireEvent.press(button)

    expect(onPress).toHaveBeenCalledTimes(1);
  })
});