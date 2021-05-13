import React from 'react';
import { fireEvent, render } from '@testing-library/react-native'
import ModalForm from '../../../../src/pages/home/components/modal-form';
import { MockedProvider } from '@apollo/client/testing';
import { ClientInputModel } from '../../../../src/modules/graphql/client/model/ClientModel';


describe('<ModalForm />', () => {
  const clientInput = new ClientInputModel()

  test('Ui del componente para la creación de usuarios', ()=> {
    const wraper = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ModalForm 
          onPressCloseModal={() => {}}
          visibleModal={true}
          client={clientInput}
          type="create"
        />
      </MockedProvider>
    )
    expect(wraper.toJSON()).toMatchSnapshot()
  })

  test('Funcionalidad onPressCloseModal', ()=> {
    const onPressCloseModal = jest.fn()
    const wraper = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ModalForm 
          onPressCloseModal={onPressCloseModal}
          visibleModal={true}
          client={clientInput}
          type="create"
        />
      </MockedProvider>
    )
    
    const buttonCloseModal = wraper.getByText('Cerrar')
    fireEvent.press(buttonCloseModal)

    expect(onPressCloseModal).toHaveBeenCalled()
  })

  test('Funcionalidad creación de usuario', ()=> {
    const wraper = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ModalForm 
          onPressCloseModal={() => {}}
          visibleModal={true}
          client={clientInput}
          type="create"
        />
      </MockedProvider>
    )

  })
})