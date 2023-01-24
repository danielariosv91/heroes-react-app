import { Navigate, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink to="/dc-comics">
                        DC Comics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/marvel">
                        Marvel
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/logout">
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
