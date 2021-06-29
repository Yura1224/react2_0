import {getPost} from "../API/API";
import Posts from "../Posts/Posts";
import {useState} from "react";

export default function User({item, appFn}) {
    let [users, setUsers] = useState([])


    return (
        <div>
            {item.id} - {item.name} -
            <button onClick={()=>{
                appFn(item.id)
                getPost(item.id).then(value => setUsers(value.data))

            }}
            >Click me</button>

          <Posts postsUsers={users} />
        </div>
    );
}