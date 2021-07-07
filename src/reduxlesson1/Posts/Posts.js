import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


const Posts =  () => {
    let dispatch2 = useDispatch();
    let {posts} = useSelector(state => state);
    console.log(posts);
    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        dispatch2({
            type: 'ADD_POSTS',
            payload: json
        })
    }

    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <div>
            {posts.map(post => (
                <li key={post.id}>{post.title} ==== {post.body}</li>
            ))}
        </div>
    )
}
export default Posts


