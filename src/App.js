import './App.css';
import Users from "./components/users/Users";
import Menu from "./components/menu/Menu";


export default function App() {
    return (
        <div>
            <Menu pages={["users page","posts page","comments page"]}/>
            <Users/>
            <Menu pages={["about","team"]}/>
        </div>
    );
}




