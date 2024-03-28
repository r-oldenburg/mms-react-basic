import { BlogPostListing } from "../components/BlogPostListing"
import { BlogPostForm } from "../components/Forms/BlogPostForm"
import { useQuery } from "react-query";
import { Post } from "../models/Post";

export const BlogPage = ({blogService}:{blogService:{GetPostsAsync:any}}) => { 

// const [posts, setPosts] = useState<Post[]>();
//    const [isLoading, setIsLoading] = useState(false);
    const controller = new AbortController();

    // React query als Alternative
    const response = useQuery(["posts"], () => blogService.GetPostsAsync(controller))
    const {data, isLoading, isError, isSuccess, refetch} = response;

    // async function processEffect() {
    //     setIsLoading(true)
    //     const posts = await BlogService.GetPostsAsync(controller)
    //     setPosts(posts)
    //     setIsLoading(false)
    // }
    //console.log(response);
    if (data) {
        localStorage.setItem("post", JSON.stringify(data[0]));
    }

    // Fetch user data
    // useEffect(() => {
    //     processEffect().catch((e) => {
    //         // log error
    //         console.log(e);
    //     });
    //     return () => controller.abort()
    // }, []);

    function newPostCallback(post:Post) {
        //setPosts((prev) => { const result = Object.assign([], prev); result.push(post); return result } )
        console.log(post);
    }

    // const URL = 'https://jsonplaceholder.typicode.com/posts';
    // const fetchedPosts : Post[] = useFetch(URL);
    // console.log("FETCH", fetchedPosts);

    if (!isSuccess || isError) {
        return <h1>ERROR</h1>
    } else
    return <div>
        BlogPage
        { isLoading || Object.getOwnPropertyNames(data).length == 0 ? <p>Loading...</p> : (<>
            <BlogPostListing posts={data || []} />
            <BlogPostForm newPostCallback={newPostCallback}/>
            <button onClick={() => refetch()}>refetch</button>
        </>
        )}
    </div>
}
