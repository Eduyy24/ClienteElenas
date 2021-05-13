import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../src/components/button-flex';

describe('test', () => {
  test('should ', () => {
    expect('10').toEqual('10');
  })
})

describe('Button Snapshot', () => {
  test('Comprobar la UI del componente Button', () => {
    const footer = create(<Button onPress={() => {}} title="CREAR" />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});