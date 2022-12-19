import { useAuth0 } from "@auth0/auth0-react";
import Button  from 'react-bootstrap/Button';

const Navigation = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const logoutWithRedirect = () => logout({
        returnTo: window.location.origin,
    });

    return(
        <div>
            {!isAuthenticated && (
                <div className='centered'>
                    <Button onClick={() => loginWithRedirect()}>
                        LOGIN
                    </Button>
                </div>
            )}
            {isAuthenticated && (
                <div className='centered'>
                    <Button onClick={() => logoutWithRedirect()}>
                        LOGOUT
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Navigation;