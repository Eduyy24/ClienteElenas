/**
 * Define el modelo para un Ciudad
 * @class
 */
export class CityModel {
  id = '';
  name = '';
}

/**
 * Define el modelo para un Estado
 * @class
 */
export class StateModel {
  id = '';
  name = '';
  cities = Array<CityModel>(0);
}

/**
 * Define el modelo para un cliente
 * @class
 */
export default class ClientModel {
  id = '';
  firstName = '';
  lastName = '';
  cedula = '';
  address = '';
  cellphone = '';
  email = '';
  city = '';
  state = new StateModel();
}