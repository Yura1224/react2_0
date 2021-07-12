import './App.css';
import {
    BrowserRouter as Router ,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import Comments from "./reduxlesson1/Comments/Comments";

const NestedChild = () => {
    // const dispatch = useDispatch();

    let {counter: {value : counter}} = useSelector(state => state);

    return (
        <header className="App-header">
            <h1>{counter}</h1>

            <ul>

            </ul>
        </header>
    )
}

function App() {
    const dispatch = useDispatch();

    return (
        <Router>
        <div className="App">
            <button
                onClick={() => {
                    dispatch({type: 'INC'})
                }}
            >
                inc
            </button>

            <button
                onClick={() => {
                    dispatch({type: 'DEC'})
                }}
            >
                dec
            </button>
            <ul>
                <li>
                    <Link to={"/"}>Comments for Users</Link>
                </li>
                <li>
                    <Link to={"/Posts for Users"}>Posts for Users</Link>
                </li>
                <li>
                    <Link to={"/Albums for Users"}>Albums for Users</Link>
                </li>
                <Switch>
                    <Route exact={true} path={"/"}>
                        <Comments/>
                    </Route>
                {/*<Route  path={"/Posts for Users"} component={}/>*/}

            </Switch>
            </ul>
            <NestedChild />
            <hr/>
            <Comments/>
           
        </div>
        </Router>
    );

}

export default App;





