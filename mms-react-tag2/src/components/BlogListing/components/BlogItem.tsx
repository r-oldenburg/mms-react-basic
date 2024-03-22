import styles from '../BlogListing.module.css'

const BlogItem = ({item }: { item: {title: string, body: string} }) => {
    return (
        <div className={styles.blogItem}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>

        </div>
    )
}   

export default BlogItem
