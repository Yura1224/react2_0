import {useEffect, useState} from "react";


export default function Users(props) {


    const [usersArray, setUsersArray] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            // .then(value => console.log(value))
            .then(value => value.json())
            .then(usersfromServer => {
                console.log(usersfromServer);
                setUsersArray(usersfromServer);
            });
    }, []);

    return (
        <div>
            {
                usersArray.map(user => <div key={user.id}>{user.id} - {user.name}</div>)
            }
        </div>
    );
}