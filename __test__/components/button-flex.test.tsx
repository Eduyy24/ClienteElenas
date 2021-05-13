import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../../src/components/button-flex';
import { fireEvent, render } from '@testing-library/react-native'


describe('Button Snapshot', () => {

  test('Comprobar la UI del componente Button', () => {
    const footer = create(<Button onPress={() => {}} title="CREAR" />);
    expect(footer.toJSON()).toMatchSnapshot();
  });

  test('examples of some things', async () => {
    const onPress = jest.fn()
    const { getByText } = render(<Button onPress={onPress} title="CREAR" />)
  
    const button = getByText('CREAR')
    fireEvent.press(button)

    expect(onPress).toHaveBeenCalledTimes(1);
  })
});