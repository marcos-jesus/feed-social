import axios from 'axios'

export const userApi = axios.create({
  baseURL: 'https://api.github.com/users',
})

export const repositoryApi = axios.create({
  baseURL: 'https://api.github.com/users',
})
