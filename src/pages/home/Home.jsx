import { useNavigate } from "react-router-dom";
import Client from "./content/client/Client";

import { useEffect } from 'react';

const Home = () => {
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
        return <Client />
    }
}

export default Home;
