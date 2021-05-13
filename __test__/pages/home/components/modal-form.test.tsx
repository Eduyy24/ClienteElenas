import React from 'react';
import { fireEvent, render } from '@testing-library/react-native'
import ModalForm from '../../../../src/pages/home/components/modal-form';
import { MockedProvider } from '@apollo/client/testing';
import { ClientInputModel } from '../../../../src/modules/graphql/client/model/ClientModel';
import QueryMock from '../../../../__mocks__/queries.moks';


describe('<ModalForm />', () => {
  const clientInput = new ClientInputModel()

  test('Ui del componente para la creación de usuarios', () => {
    const wraper = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ModalForm
          onPressCloseModal={() => { }}
          visibleModal={true}
          client={clientInput}
          type="create"
        />
      </MockedProvider>
    )
    expect(wraper.toJSON()).toMatchSnapshot()
  })

  test('Funcionalidad onPressCloseModal', () => {
    const onPressCloseModal = jest.fn()
    const wraper = render(
      <MockedProvider mocks={QueryMock} addTypename={false}>
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

  test('Funcionalidad creación de usuario', async () => {
    const wraper = render(
      <MockedProvider mocks={QueryMock} addTypename={false}>
        <ModalForm
          onPressCloseModal={() => { }}
          visibleModal={true}
          client={clientInput}
          type="create"
        />
      </MockedProvider>
    )
    await new Promise(resolve => setTimeout(resolve, 0)); // wait for response


    //valido que el input ciudad no está presente
    const queryCity = wraper.queryByTestId('Ciudad')
    expect(queryCity).toBeFalsy()

    // Comienzo a diligenciar el form
    const inputName = wraper.getByTestId('Nombre')
    fireEvent.changeText(inputName, 'Eduardo')

    const inputLast = wraper.getByTestId('Apellido')
    fireEvent.changeText(inputLast, 'Pinedo')

    const inputDoc = wraper.getByTestId('Cédula')
    fireEvent.changeText(inputDoc, '112233')

    const inputCell = wraper.getByTestId('Celular')
    fireEvent.changeText(inputCell, '3130909091')

    const inputEmail = wraper.getByTestId('Correo electrónico')
    fireEvent.changeText(inputEmail, 'edu@edu.co')

    const inputAdreess = wraper.getByTestId('Dirección')
    fireEvent.changeText(inputAdreess, 'Calle 20 ####')

    const inputCountry = wraper.getByTestId('País')
    fireEvent.changeText(inputCountry, 'Colombia')

    const inputState = wraper.getByTestId('Departamento')
    fireEvent.changeText(inputState, 'Amaz')

    let btnbuscar = wraper.getByTestId('buscar_Departamento')
    fireEvent.press(btnbuscar)
    jest.useFakeTimers();
    let item = wraper.getByText('Amazonas')
    fireEvent.press(item)
    
    const inputCity = wraper.getByTestId('Ciudad')
    fireEvent.changeText(inputCity, 'Leti')

    btnbuscar = wraper.getByTestId('buscar_Ciudad')
    fireEvent.press(btnbuscar)
    jest.useFakeTimers();

    item = wraper.getByText('Leticia')
    fireEvent.press(item)

    const btnSave = wraper.getByText('GUARDAR')
    fireEvent.press(btnSave)

  })

  test('Ui del componente para la actualización de usuarios', () => {
    clientInput.cedula = '112233';
    clientInput.cellphone = '3130909091'
    clientInput.email = 'edu@edu.co'
    clientInput.firstName = 'Eduardo'
    clientInput.lastName = 'Pinedo'
    clientInput.id = 2323
    clientInput.address.city = 'Leticia'
    clientInput.address.cityId = 3
    clientInput.address.country = undefined;
    clientInput.address.stateId = 2
    clientInput.address.stateShortCode = "AMA"
    clientInput.address.streetAddress = 'Calle 20 ####'

    const wraper = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ModalForm
          onPressCloseModal={() => { }}
          visibleModal={true}
          client={clientInput}
          type="update"
        />
      </MockedProvider>
    )
    expect(wraper.toJSON()).toMatchSnapshot()
  })

  test('Funcionalidad actualizar usuario', () => {
    const wraper = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ModalForm
          onPressCloseModal={() => { }}
          visibleModal={true}
          client={clientInput}
          type="update"
        />
      </MockedProvider>
    )

    const btnUpdate = wraper.getByText('ACTUALIZAR')
    fireEvent.press(btnUpdate)

    expect(wraper.toJSON()).toMatchSnapshot()
  })
})