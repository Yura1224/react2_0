import './App.css';
import Users from "./Lesson2/Components/Users/Users";
import {useEffect, useState} from "react";
import {getPost, getPosts, getUser, getUsers} from './Lesson2/Components/API/API'
import Posts from "./Lesson2/Components/Posts/Posts";

export default function App() {
let [user, setUser] = useState(null);
// let [post, setPost] = useState(null);

    let [users,setUsers] = useState([]);
    // let [posts,setPosts] = useState([]);

    useEffect( ()=> {
        getUsers().then(value =>setUsers(value.data))
        // getPosts().then(value =>setPosts(value.data))
    },[] );

    let appFn = (id) => {
        // console.log(id);
        getUser(id).then(value => setUser(value.data));
        // getPost(id).then(value => setPost(value.data));
    }

    return (
        <div>
             <Users items={users} appFn={appFn}/>
                {/*<Posts props={posts} appFn={appFn}/>*/}
                {/*<hr/>*/}
            {/*{*/}
            {/*    user && <div>{user.username}</div>*/}
            {/*}*/}
            {/*    <hr/>*/}
            {/*<hr/>*/}
            {/*/!*{*!/*/}
            {/*/!*    post && <div>{post.title}</div>*!/*/}
            {/*/!*}*!/*/}
            {/*<hr/>*/}

        </div>
    );
}




