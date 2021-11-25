import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const apiGeocode = axios.create({
  baseURL: 'http://www.mapquestapi.com/geocoding/v1/',
});
