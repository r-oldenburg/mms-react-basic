import { useState, useEffect } from 'react';

export function useFetch(url: string) {

    //basis daten und state management
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<any>(null)

    async function fetchData() {
        setIsLoading(true)
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response failed')
                console.log("hallo")
            }
            const json = await response.json()
            setData(json)

        } catch (err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {

        fetchData()

    }, [url])


    return { data, isLoading, error }

}