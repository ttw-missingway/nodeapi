import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import Loading from './Loading';
import axios from 'axios';

export default function PrivateRoute() {
    //context
    const [auth, setAuth] = useAuth();
    //state
    const [ok, setOk] = useState(false);

    useEffect(() => {
        const authCheck = async () => {
            console.log("getting stuff");
            const { data } = await axios.get(`/auth-check`);
            if (data.ok) {
                console.log("hello true");
                setOk(true);
            }else{
                console.log("goodbye, false");
                setOk(false);
            }
        };

        authCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Loading/>;
};
