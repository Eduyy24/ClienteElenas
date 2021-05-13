import React from 'react';
import { fireEvent, render } from '@testing-library/react-native'
import ItemClientList from '../../../../src/pages/home/components/item-client-list';
import { ClientOutputModel } from '../../../../src/modules/graphql/client/model/ClientModel';


describe('<HomeLayout />', () => {
  const clientOut = new ClientOutputModel();
    clientOut.firstName = "Eduardo"
    clientOut.lastName = "Pinedo"
    clientOut.cedula = "111111"

  test('Ui del componente', ()=> {
    const wraper = render(
      <ItemClientList item={clientOut} onPressEditClient={() => {}} />
    )
    expect(wraper.toJSON()).toMatchSnapshot()
  })

  test('Funcionalidad del onPress', ()=> {
    const onPress = jest.fn()
    const wraper = render(
      <ItemClientList item={clientOut} onPressEditClient={onPress} />
    )
    const buttonEdit = wraper.getByText('Editar')
    fireEvent.press(buttonEdit)

    expect(onPress).toHaveBeenCalledTimes(1)
  })
})