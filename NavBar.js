import { Link } from "react-router-dom";

const navBar = () => {
    return ( 
        <nav>
            <Link to="users">users</Link>
            <Link to="listToDo">list to do</Link>
        </nav>
     );
}
 
export default navBar;