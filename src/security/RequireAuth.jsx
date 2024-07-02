import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const RequireAuth = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/unhautorized');
        } else if (user.role !== "admin" && user.role !== "clients") {
            navigate('/unhautorized');
        }
    }, []);
    if (!user) {
        return null;
    } else {
        return <Outlet />
    }
}

export default RequireAuth
