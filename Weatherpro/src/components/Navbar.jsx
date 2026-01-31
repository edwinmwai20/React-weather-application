import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to='/add'>AddCity</NavLink>
        </nav>
    )
}

export default NavBar




