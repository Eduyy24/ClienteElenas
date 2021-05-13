import React from 'react';
import { render } from '@testing-library/react-native'
import Home from '../../../src/pages/home/home';
import { MockedProvider } from '@apollo/client/testing';


describe('<Home />', () => {
  test('Ui del componente', ()=> {
    const wraper = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Home />
      </MockedProvider>
    )
    expect(wraper.toJSON()).toMatchSnapshot()
  })
})