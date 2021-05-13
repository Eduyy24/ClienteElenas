import React from 'react';
import { render } from '@testing-library/react-native'
import HomeLayout from '../../../src/pages/home/home-layout';
import { MockedProvider } from '@apollo/client/testing';


describe('<HomeLayout />', () => {
  test('Ui del componente', ()=> {
    const wraper = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <HomeLayout />
      </MockedProvider>
    )
    expect(wraper.toJSON()).toMatchSnapshot()
  })
})