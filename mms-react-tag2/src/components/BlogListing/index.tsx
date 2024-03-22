
import { useState, useEffect } from 'react'
import BlogItem from './components/BlogItem';
import BlogForm from './components/BlogForm';
import Button from '../Button';

const BlogListing = () => {

    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const [blogPosts, setBlogPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [openForm, setOpenForm] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        setTimeout(() => {
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    setBlogPosts(data)
                    setIsLoading(false)
                })

        }, 2000)


    }, [])

    const BlogList = blogPosts.map((item: { title: string, id: string, body: string, userId: string }) => {
        return <BlogItem key={item.id} {...item} />

    })
    return (
        <>
            <div style={{ display: openForm ? "block" : "none" }}>
                <BlogForm />
            </div>
            <div>
                <button onClick={() => setOpenForm(!openForm)}>{openForm ? "Close" : "Open "}</button>
            
            </div>
            <div style={{ minHeight: "50vh" }}>
                {isLoading ? <h3>is Loading...</h3> : BlogList}
            </div>
        </>
    )
}

export default BlogListing
