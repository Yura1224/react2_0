import {useEffect} from "react";


export default function Users(props) {
    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
        // .then(value => console.log(value))
        .then(value => value.json())
        .then(usersfromServer => {
            console.log(usersfromServer);
        });
}, []);

    return (
        <div>
           
        </div>
    );
}