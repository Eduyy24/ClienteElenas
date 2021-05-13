import {ClientInputModel, ClientOutputModel, CityModel} from '../../../../../src/modules/graphql/client/model/ClientModel'

describe('ClientModel', () => {
  test('Generar ClientInputModel', () => {
    const city = new CityModel()
    expect(city).toMatchSnapshot()
  })
})