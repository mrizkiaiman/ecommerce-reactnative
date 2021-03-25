import {useState, useEffect} from 'react'

export default (apiFunction, args) => {
  const [response, setResponse] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const callApi = async () => {
      try {
        const result = await apiFunction(args)

        setLoading(false)
        setResponse(result)
      } catch (error) {
        setError(true)
      }
    }
    callApi()
  }, [])

  return {response, loading, error}
}
