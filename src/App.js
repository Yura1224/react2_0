import './App.css';
import Users from "./Lesson2/Components/Users/Users";
import API, {getPosts, getUsers} from "./Lesson2/Components/API/API";
import
import {useEffect} from "react";

export default function App() {

    useEffect( ()=> {
        getUsers().then(value => console.log(value.data))
        getPosts().then(value => console.log(value.data))
    },[] )





    return (
        <div>

        </div>
    );
}




