import { Navigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
//
    const logout = () => {
        setAuth({ ...auth, user: null, token: ""});
        localStorage.removeItem("auth");
        navigate('/login');
    };

    return <>
        <div className="container-md">
            <ul className="nav d-flex justify-content-between shadow-sm">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                        HOME
                    </NavLink>
                </li>

                {!auth?.user ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/content">
                                CONTENT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a onClick={logout} className="nav-link pointer">
                                LOGOUT
                            </a>
                        </li>
                    </>
                    
                )}
                
            </ul>
        </div>
    </>;
}