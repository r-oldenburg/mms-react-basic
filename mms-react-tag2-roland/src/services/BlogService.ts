import { Post } from "../models/Post";

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const BlogService = {
    GetPostsAsync: async function(abort: AbortController) : Promise<Post[]> {
        const response = await fetch(URL, {signal: abort.signal})
        if (!response.ok) {
            throw new Error("Network response failed")
        }
        return await response.json();
    },
    SubmitPostAsync: async function(post:Post, abort: AbortController) : Promise<Post[]> {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            signal: abort.signal
        });
        if (!response.ok) {
            throw new Error("Network response failed")
        }
        return response.json();
    },
}