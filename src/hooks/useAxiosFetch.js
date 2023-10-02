import axios from "axios";
import { useEffect, useState } from "react";


const useAxiosFetch = (dataURL) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [fetchError, setFetchError] = useState(null)
    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()
        const fetchData = async (url) => {
            setLoading(true)
            try {
                const res = axios.get(url, {
                    cancelToken: source.token
                })
                if (isMounted) {
                    setData(res.data)
                    setFetchError(null)
                }
            } catch (error) {
                console.log(error)
                if (isMounted) {
                    setFetchError(error.message)
                    setData([])
                }
            } finally {
                isMounted && setTimeout(() => setLoading(false), 2000)
            }

        }
        fetchData(dataURL)
        const cleanUp = () => {
            isMounted = false
            source.cancel()
        }

        return cleanUp
    }, [dataURL])
    return { data, fetchError, loading }
}

export default useAxiosFetch