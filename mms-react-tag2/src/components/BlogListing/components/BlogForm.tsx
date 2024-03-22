import { useState } from "react"
import styles from '../BlogListing.module.css'

const BlogForm = () => {

    const INIT = { title: "", body: "" }
    const [newPost, setNewPost] = useState(INIT)
    const [response, setResponse] = useState(INIT)
    const [preview, setPreview] = useState(false)

    const URL = 'https://jsonplaceholder.typicode.com/posts';

    function handleChange(e: { target: { name: string, value: string } }) {
        setNewPost((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e: any) {
        e.preventDefault()

        const config = {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(URL, config)
            .then(res => res.json())
            .then(data => {
                setResponse(data)
                setPreview(true)
                setNewPost(INIT)

            })



    }
    return (
        <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.formInner}>
                <label htmlFor='title'>Title</label>
                <input id="title" type="text" name="title" onChange={handleChange} value={newPost.title} />
                <label htmlFor='body'>Body Text</label>
                <textarea id="body" rows={5} name="body" value={newPost.body} onChange={handleChange} />
                <button type="submit" style={{ marginTop: "10px" }}>Add new post</button>
            </form>


            {preview ? <p><h3>Preview:</h3>
                <p><span style={{ fontWeight: "bold" }}>Title: </span> {response?.title}</p>
                <p><span style={{ fontWeight: "bold" }}>Body:</span> {response?.body}</p></p> : null}
        </div>
    )
}

export default BlogForm
