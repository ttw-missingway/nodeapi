import { NavLink } from 'react-router-dom';

export default function Menu() {
    return <>
        <div className="container-md">
            <ul className="nav d-flex justify-content-between shadow-sm">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                        HOME
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                        LOGIN
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                        REGISTER
                    </NavLink>
                </li>
            </ul>
        </div>
    </>;
}