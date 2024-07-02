import { useState } from "react"
import Avatar from "react-avatar"
import { FiAlignLeft } from "react-icons/fi"
import { IoSearchOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import Disconnect from "../disconnect/Disconnect"

const Header = () => {

    //constant
    const USER = JSON.parse(localStorage.getItem('user'));

    //state
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    //action
    function handleClose() {
        setOpen(false);
    }


    function disconnect(params) {
        localStorage.setItem("user", null);
        navigate("/")
    }

    return (
        <>
            <div className="h-14 top-0 z-10 flex items-center justify-between w-full px-2 py-4 bg-white shadow-md">
                <div className="text-2xl">
                    <FiAlignLeft />
                </div>
                <div className="flex items-center justify-center gap-2">
                    <IoSearchOutline />
                    <input className="w-full outline-none" type="text" placeholder="rechercher dans la carte" />
                </div>
                <div>
                    <Avatar onClick={() => setOpen(true)} name={USER.username} size={42} round={true} color="blue" />
                </div>
            </div>

            <Disconnect handleClose={handleClose} open={open} disconnect={disconnect} Utilisateur={USER} />
        </>
    )
}

export default Header
