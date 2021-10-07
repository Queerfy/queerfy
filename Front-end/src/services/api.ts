import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8080',
})

export const apiCorreios = axios.create({
  baseURL: ': viacep.com.br/ws',
})
