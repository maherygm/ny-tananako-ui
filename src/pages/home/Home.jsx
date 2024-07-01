import { useNavigate } from "react-router-dom";
import Admin from "./content/admin/Admin";
import Client from "./content/client/Client";

import { useEffect } from 'react';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)


    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/unhautorized');
        } else if (user.role !== "admin" && user.role !== "client") {
            navigate('/unhautorized');
        }
    }, []);
    if (!user) {
        return null;
    }

    if (user.role === "admin") {
        return <Admin />
    } else if (user.role === "client") {
        return <Client />
    }
    return null;
}

export default Home;
