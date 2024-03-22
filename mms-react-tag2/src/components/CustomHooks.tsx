import { useFetch } from "@/hooks/useFetch"

const CustomHooks = () => {

    const URL = 'https://jsonplaceholder.typicode.com/posts/1';

    const fetchedData = useFetch(URL);
    console.log("useFetch", fetchedData);

    if(fetchedData){
        localStorage.setItem("post", JSON.stringify(fetchedData.data))
    }

    return (
        <div>

        </div>
    )
}

export default CustomHooks
