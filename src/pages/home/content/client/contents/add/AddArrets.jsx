import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddArrets = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/unhautorized');
        } else if (user.role !== "admin") {
            navigate('/unhautorized');
        }
    }, []);
    if (!user) {
        return null;
    } else {
        return (

            <div>
                Add arrets
            </div>
        )
    }
}

export default AddArrets
