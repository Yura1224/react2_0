// import {useState} from "react";
// import Post from "../Post/Post";
// export default function User({item}) {
//
//     let [posts, setPosts] = useState([])
//
//     const getPostsUser = () => {
//         fetch(`https://jsonplaceholder.typicode.com/users/${item.id}/posts`)
//             .then(value => value.json())
//             .then(value => setPosts(value));
//     }
//
//     function dispatch(getPostsUser) {
//
//     }
//
//     return (
//         <div>
//             {/*{item.id} - {item.name}*/}
//             {/*<button className={dispatch(getPostsUser)}*/}
//             {/*    onClick={() => {*/}
//             {/*        dispatch({type: 'Posts of Users'})*/}
//             {/*    }}*/}
//             {/*>*/}
//             {/*    Posts of Users*/}
//             {/*</button>*/}
//             {/*{posts.map(value => <Post key={value.id} id={value.id} title={value.title}/>)}*/}
//             {/*<hr/>*/}
//         </div>
//     );
// }