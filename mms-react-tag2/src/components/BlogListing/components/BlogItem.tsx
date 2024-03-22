import styles from '../BlogListing.module.css'

const BlogItem = ({ body, title, id, userId }: { body: string, title: string, id: string, userId: string }) => {
    return (
        <div className={styles.blogItem}>
            <h4>{title}</h4>
            <p>{body}</p>

        </div>
    )
}

export default BlogItem
