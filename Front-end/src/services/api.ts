import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://18.206.113.23:8080',
});

export const apiGeocode = axios.create({
  baseURL: 'http://www.mapquestapi.com/geocoding/v1/',
});

export const apiGeocodeSearch = axios.create({
  baseURL: 'http://www.mapquestapi.com/search/v2/',
});
