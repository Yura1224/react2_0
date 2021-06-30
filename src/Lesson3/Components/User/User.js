
import {useState} from "react";

export default function User({}) {
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