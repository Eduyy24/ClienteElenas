import React from 'react';
import { fireEvent, render } from '@testing-library/react-native'
import InputForm from '../../src/components/input-form';


describe('<InputForm />', () => {

  test('Comprobar la UI del componente ButtonFlex', () => {
    const input = <InputForm value="Luis" onChangeText={() => {}} label="Nombre" />
    const {toJSON} = render(input);
    expect(toJSON()).toMatchSnapshot();
  });

  test('Validación de la funcionalidad onChangeText', async () => {
    const onPress = jest.fn()
    const inputForm = <InputForm onChangeText={onPress} label="Nombre" />
    const wraper = render(inputForm)

    const input = wraper.getByTestId('Nombre')
    fireEvent.changeText(input, 'Eduardo')

    expect(onPress).toHaveBeenCalledTimes(1);
  })

  test('Busqueda de una opción y selección de la misma', async () => {
    const onPress = jest.fn()
    const selectList = ['Fonseca ', 'Bogotá', 'Barranquilla']
    const inputForm = 
      <InputForm 
        type="selectSearch" 
        onChangeText={onPress} 
        label="Nombre"
        selectList={selectList}
      />
    const wraper = render(inputForm)

    const input = wraper.getByTestId('Nombre')
    fireEvent.changeText(input, 'Fons')

    const btnBuscar = wraper.getByText('Buscar')
    fireEvent.press(btnBuscar)

    jest.useFakeTimers();

    const optionA = wraper.getByTestId('item0')
    fireEvent.press(optionA)
    
    expect(input.props.value).toBe(selectList[0])
    expect(onPress).toHaveBeenCalledTimes(1);
  })

  test('Busqueda de una opción y selección de la misma, cuando el valor se pasa por props', async () => {
    const onPress = jest.fn()
    const selectList = ['Fonseca', 'Bogotá', 'Barranquilla']
    const inputForm = 
      <InputForm
        value={selectList[2]}
        type="selectSearch" 
        onChangeText={onPress} 
        label="Ciudad"
        selectList={selectList}
      />
    const wraper = render(inputForm)

    const input = wraper.getByTestId('Ciudad')
    const btnBuscar = wraper.getByText('Buscar')
    fireEvent.press(btnBuscar)

    jest.useFakeTimers();

    const optionA = wraper.getByTestId('item0')
    fireEvent.press(optionA)
    
    expect(input.props.value).toBe(selectList[2])
    expect(onPress).toHaveBeenCalledTimes(1);
  })

  test('Validar opciones vacias cuando no se envian datos a salectList', async () => {
    const onPress = jest.fn()
    const inputForm = 
      <InputForm
        value={'Cordoba'}
        type="selectSearch" 
        onChangeText={onPress} 
        label="Ciudad"
      />
    const wraper = render(inputForm)

    const btnBuscar = wraper.getByText('Buscar')
    fireEvent.press(btnBuscar)

    jest.useFakeTimers();

    const optionA = wraper.queryByTestId('item0')
    expect(optionA).toBeFalsy();
    expect(onPress).not.toHaveBeenCalledTimes(1);
  })

  test('Funionalidad de validación, para no filtrar la lista, cuando no envia las selectList y se presiona buscar', async () => {
    const onPress = jest.fn()
    const inputForm = 
      <InputForm
        type="selectSearch" 
        onChangeText={onPress} 
        label="Ciudad"
      />
    const wraper = render(inputForm)
    
    const btnBuscar = wraper.getByText('Buscar')
    fireEvent.press(btnBuscar)

    const optionA = wraper.queryByTestId('item0')
    expect(optionA).toBeFalsy();
    expect(onPress).not.toHaveBeenCalledTimes(1);
  })
});