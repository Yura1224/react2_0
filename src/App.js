import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./Lesson3/Components/Users/Users";
import Posts from "./Lesson3/Components/Posts/Posts";
import Comments from "./Lesson3/Components/Comments/Comments";



export default function App() {
let appFn

    return (
        <Router>
            <div className={"App"}>
                <ul>
                    <li>
                        <Link to={"/"}>Home </Link>
                    </li>
                    <li>
                        <Link to={"/users"}>Users</Link>
                    </li>
                    <li>
                        <Link to={"/posts"}>Posts</Link>
                    </li>
                    <li>
                        <Link to={"/comments"}>Comments</Link>
                    </li>
                    <Switch>
                        <Route exact={true} path={"/"}>
                            <Users/>
                        </Route>
                        <Route path={"/users"} component={Users}/>

                        <Route path={"/posts"} component={Posts}/>
                        <Route path={"/comments"} render={() => <Comments/>}/>
                    </Switch>
                </ul>
            </div>


        </Router>
    );


}






