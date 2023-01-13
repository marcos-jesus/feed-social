import axios from 'axios'
import { useEffect, useState } from 'react'

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | []>([])
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const api = axios.create({
    baseURL: 'https://api.github.com/users/',
  })

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  return { data, isFetching, error }
}
