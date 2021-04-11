const got = require('got');
const { integrator } = require('../../../config');

exports.signin = async (cc, password) => {
  const headers = {
    authorization: integrator.authorization,
  };
  const json = {
    login: cc,
    authentication_field: 'password',
    authentication_value: password,
  };
  const options = { headers, json };
  const response = await got.post(integrator.loginURL, options);
  return response;
};
