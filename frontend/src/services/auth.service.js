import axios from 'axios';
import {config } from '../config/config';

const LOGIN_URL = "https://app.smartfit.com.br/api/public/v1/person_session";

const options = {
  "authorization": config.authorization,
}

export const login = async (user, password) => {
  console.log(options);
  console.log({
    login: user,
    authentication_field: "password",
    authentication_value: password
  });
  const response = await axios.post(LOGIN_URL, {
    login: user,
    authentication_field: "password",
    authentication_value: password
  },
  {
    headers: options,
  });
  console.log(response);
  if(response.status === 200 ){
    localStorage.setItem("authToken", response.data.data.auth_token);
    return {status: 200};
  }
  else if(response.status === 422){
    return {status: 422};
  }
  else{
    return {status: response.status};
  }

}