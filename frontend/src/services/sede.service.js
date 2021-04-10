import axios from 'axios';
import {config } from '../config/config';

const SEDES_URL = "https://api.smartfitreserva.com/smart-fit";

const options = {
  "x-auth-token": config.x_auth_token,
}

export const getSedes = async () => {
  const response = await axios.get(SEDES_URL, {
    headers: options
  });
  return response.data.data;
}