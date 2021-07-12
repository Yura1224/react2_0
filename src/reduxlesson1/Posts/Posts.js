// import {useEffect} from "react";
// import {useDispatch, useSelector} from "react-redux";
// // import Post from "/src/reduxlesson1/Post/Post"
//
//
//
// const Posts =  () => {
//     let dispatch2 = useDispatch();
//     let {posts} = useSelector(state => state);
//     console.log(posts);
//     const fetchPosts = async () => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const json = await response.json();
//         dispatch2({
//             type: 'ADD_POSTS',
//             payload: json
//         })
//     }
//
//     useEffect(() => {
//         fetchPosts()
// //     }, [])
// //     return (
// //         <div>
// //             {
// //                 fetchPosts.map(value => <Post
// //                     key={value.id}
// //                     post={value.id}/> )
// //             }
// //         </div>
// //     )
// // }
// // export default Posts
