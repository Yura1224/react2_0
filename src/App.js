import './App.css';

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
            <NestedChild />
            <hr/>
            <Comments/>
           
        </div>
    );
}

export default App;





