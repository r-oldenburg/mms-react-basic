import { Post } from '../models/Post'

export const BlogPostDetails = ({post}:{post:Post}) => {
  return (
    <li>
        {post.id}: {post.title} (user {post.userId || '<<empty>>'})
    </li>
  )
}
