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
  shortCode = '';
  cities = Array<CityModel>(0);
}

/**
 * Define el modelo para address
 * @class
 */
 export class AddressModel {
  streetAddress = ''
  city = ''
  cityId = 0
  stateShortCode = ''
  stateId = 0
  country = ''
}


/**
 * Define el modelo de salida para un cliente
 * @class
 */
export class ClientOutputModel {
  id = '';
  firstName = '';
  lastName = '';
  cedula = '';
  address = '';
  cellphone = '';
  email = '';
  city = '';
  state?: StateModel;
}


/**
 * Define el modelo de entrada para un cliente
 * @class
 */
 export  class ClientInputModel {
  firstName = '';
  lastName = '';
  cedula = '';
  address = new AddressModel();
  cellphone = '';
  email = '';
}