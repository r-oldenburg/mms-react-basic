import { FormEvent, useState } from 'react';
import { Post } from '../../models/Post'
import { BlogService } from '../../services/BlogService';

export const BlogPostForm = ({newPostCallback}: {newPostCallback: any}) => {
    const INIT:Post = {title: "", body: "", userId: 0};
    const [post, setPost] = useState<Post>(INIT);
    
    const controller = new AbortController();
    
    function handleChange(e:{target:{value:string, name: string}}) {
        setPost((prev:any) => ({...prev, [e.target.name]: e.target.value}))
    }
    
    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        if (post) {
            post.userId = 127;
            BlogService.SubmitPostAsync(post, controller).then((result) => {
                console.log("submitted post. Result:", result);
                newPostCallback(result);
                setPost(INIT);
            });
        } else {
            alert("error: no post");
        }
    }

    return (
        <div>
            <h2>New post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Title">Title</label>
                <input id="title" type="text" name="title" value={post?.title} placeholder="Title" onChange={handleChange} />
                <br/>
                <label htmlFor="body">Body text</label>
                <input id="body" type="text" name="body" value={post?.body} placeholder="Body" onChange={handleChange} />
                <br/>
                <button type="submit" >Send</button>
            </form>
        </div>
    )
}
