import { Post } from "../models/Post";
import { BlogPostDetails } from "./BlogPostDetails";

export const BlogPostListing = ({posts}:{posts:Post[]}) => {
    return <div>
        <h2>Blog posts</h2>
        <ul>
        { posts?.map((post) => <BlogPostDetails key={post.id} post={post} />) }
        </ul>
    </div>
}
