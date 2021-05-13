import React from 'react';
import { fireEvent, render } from '@testing-library/react-native'
import HomeLayout from '../../../src/pages/home/home-layout';
import { MockedProvider } from '@apollo/client/testing';
import QueryMock from '../../../__mocks__/queries.moks';


describe('<HomeLayout />', () => {
  test('Ui del componente', ()=> {
    const wraper = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <HomeLayout />
      </MockedProvider>
    )
    expect(wraper.toJSON()).toMatchSnapshot()
  })

  test('Probar funcionalidad de crear cliente', ()=> {
    const wraper = render(
      <MockedProvider mocks={QueryMock} addTypename={false}>
        <HomeLayout />
      </MockedProvider>
    )
    const btnCreate = wraper.getByText('CREAR')
    fireEvent.press(btnCreate)
    expect(wraper.queryByText('Cerrar')).toBeTruthy();
    expect(wraper.toJSON()).toMatchSnapshot()
  })

  test('Probar funcionalidad de actualizar cliente', async ()=> {
    const wraper = render(
      <MockedProvider mocks={QueryMock} addTypename={false}>
        <HomeLayout />
      </MockedProvider>
    )

    await new Promise(resolve => setTimeout(resolve, 0)); // wait for response
    
    //expect(wraper.toJSON()).toMatchSnapshot()
  })
})