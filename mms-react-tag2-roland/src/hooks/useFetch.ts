import { useEffect, useState } from "react";
import { Post } from "../models/Post";

export function useFetch<T>(url: string): T {
    const [data, setData] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const controller = new AbortController();
    
    async function fetchData() {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch(url, {signal: controller.signal})
            if (!response.ok) {
                throw new Error("Network response failed")
            }
            setData(await response.json())
        } catch(err:any) {
            setError(err);
        } finally {
            setIsLoading(false)
        }
    }

    // Fetch user data
    useEffect(() => {
        fetchData()
        return () => controller.abort()
    }, []);

    return {data, isLoading, error, controller} as T
}