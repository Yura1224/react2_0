import  axios from "axios";
let option = {
    baseURL: "https:jsonplaceholder.typicode.com"
};
let axiosInstance = axios.create(option)

const getUsers = () => axiosInstance("/users");
const getPosts = () => axiosInstance("/posts");
const getUser = (id) => axiosInstance("/users/"+ id );
const getPost = (id) => axiosInstance("/users/"+ id + "/posts" );

export {getPosts, getUsers,getUser,getPost};