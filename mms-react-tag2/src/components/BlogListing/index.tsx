
import { useState, useEffect } from 'react';
import BlogItem from './components/BlogItem';
import BlogForm from './components/BlogForm';
import { useQuery } from 'react-query';

const BlogListing = () => {

    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const [blogPosts, setBlogPosts] = useState([])
    //const [isLoading, setIsLoading] = useState(false)
    const [openForm, setOpenForm] = useState(false)


    //React Query abfrage als Alternative für manuelles Requests state management

    const res = useQuery(["posts"], async () => {
        const response = await fetch(URL)
        return response.json()
    })

    console.log("query", res.data)
    if (!res.isSuccess) return <h1>error</h1>

    const BlogList = res.data?.map((item: { title: string, id: string, body: string, userId: string }) => {
        return <BlogItem key={item.id} item={item} />

    })


    /* useEffect(() => {
        setIsLoading(true)

        setTimeout(() => {
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    setBlogPosts(data)
                    setIsLoading(false)
                })

        }, 2000)


    }, []) */

    function handleRefetch(){
        res.refetch()
    }

    return (
        <>
            <div style={{ display: openForm ? "block" : "none" }}>
                <BlogForm />
            </div>
            <div>
                <button onClick={() => setOpenForm(!openForm)}>{openForm ? "Close" : "Open "}</button>
                <button onClick={handleRefetch}>refetch data</button>

            </div>
            <div style={{ minHeight: "50vh" }}>
                {res.isLoading ? <h3>is Loading...</h3> : BlogList}
            </div>
        </>
    )
}

export default BlogListing
