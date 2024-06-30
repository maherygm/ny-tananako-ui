import { useNavigate } from "react-router-dom";
import Admin from "./content/admin/Admin";
import Client from "./content/client/Client";

import { useEffect } from 'react';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

   /*  useEffect(() => {
        if (!user) {
            navigate('/unhautorized');
        } else if (user.type !== "admin" && user.type !== "client") {
            navigate('/unhautorized');
        }
    }, [navigate, user]);
    if (!user) {
        return null;
    }

    if (user.type === "admin") {
        return <Admin />
    } else if (user.type === "client") {
        return <Client />
    } */

    return <Admin />;
}

export default Home;
