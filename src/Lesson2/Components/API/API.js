import  axios from "axios";



let option = {
    baseURL:https: "jsonplaceholder.typicode.com"
};
let axiosIstance = axios.create(option)

const getUsers = () => axiosInstance("/users")
export {getUsers};
const getPosts = () => axiosInstance("/posts")
export {getPosts};