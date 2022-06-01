import axios from 'axios';

export const api = axios.create({
  baseURL: 'queerfybackend.ddns.net:8080/',
});

export const apiGeocode = axios.create({
  baseURL: 'http://www.mapquestapi.com/geocoding/v1/',
});

export const apiGeocodeSearch = axios.create({
  baseURL: 'http://www.mapquestapi.com/search/v2/',
});
