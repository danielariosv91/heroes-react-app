import { Navigate, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate(); 

    const handleLogout = () => {
        navigate('/login', {
            replace: true
        });
    } 

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
                    <NavLink to="/search">
                        Busqueda
                    </NavLink>
                </li>
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}
