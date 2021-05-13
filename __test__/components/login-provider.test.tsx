import React from 'react';
import { render, waitFor, act } from '@testing-library/react-native'
import LoginProvider from '../../src/components/login-provider';
import { MockedProvider } from '@apollo/client/testing';
import LoginMutationMock from '../../__mocks__/login-mutation.mock';

describe('<LoginProvider />', () => {
  test('Ui del componente cuando esta cargando', () => {
    const component = 
      <MockedProvider mocks={LoginMutationMock} addTypename={false}>
        <LoginProvider />
      </MockedProvider>
    const wraper = render(component)
    const loading = wraper.queryByText('Cargando...')
    expect(loading).toBeTruthy();
    expect(wraper.toJSON()).toMatchSnapshot();
  })

  // test('Ui del componente cuando termina la carga',async () => {
  //   const component = 
  //     <MockedProvider mocks={LoginMutationMock} addTypename={false}>
  //       <LoginProvider />
  //     </MockedProvider>
    
  //   let wraper = render(component)
    
  //   //await waitFor(() => new Promise(resolve => setTimeout(resolve, 0)))
  //   act(() => jest.advanceTimersByTime(1000))

  //   const loading = wraper.queryByText('Clientes Elenas')
  //   expect(loading).toBeFalsy();
  //   //expect(wraper.toJSON()).toMatchSnapshot();
  // })
  
})