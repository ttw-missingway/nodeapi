import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Loading() {
    //state
    const [count, setCount] = useState(3);
    //hooks
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);
        //redirect once count is equal to zero
        count === 0 && navigate('/login');
        //cleanup
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            Redirecting you in {count} seconds...
        </div>
    );
}