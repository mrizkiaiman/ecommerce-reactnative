import {useState, useEffect} from 'react'

export default (apiFunction, args) => {
  const [response, setResponse] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  let isMounted = false

  useEffect(() => {
    isMounted = true
    const callApi = async () => {
      try {
        const result = await apiFunction(args)
        if (isMounted) {
          setLoading(false)
          setResponse(result)
        }
      } catch (error) {
        if (isMounted) setError(true)
      }
    }
    callApi()
    return () => {
      isMounted = false
    }
  }, [])

  return {response, loading, error}
}
