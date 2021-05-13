import React from 'react';
import { render } from '@testing-library/react-native'
import LoadingGeneric from '../../src/components/loading-generic';

describe('<LoadingGeneric />', () => {
  test('Ui del componente', ()=> {
    const wraper = render(<LoadingGeneric />)
    expect(wraper.toJSON()).toMatchSnapshot()
  })
})