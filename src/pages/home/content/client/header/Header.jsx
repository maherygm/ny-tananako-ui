import { useState } from "react"
import Avatar from "react-avatar"
import { FiAlignLeft } from "react-icons/fi"
import { IoSearchOutline } from "react-icons/io5"
import Disconnect from "../disconnect/Disconnect"

const Header = () => {

    //state
    const [open, setOpen] = useState(false);

    //action
    function handleClose() {
        setOpen(false);
    }
    const User = {
        name: "mahery"
    }
    return (
        <>
            <div className="absolute top-0 z-10 flex items-center justify-between w-full px-2 py-4 bg-white shadow-md">
                <div className="text-2xl">
                    <FiAlignLeft />
                </div>
                <div className="flex items-center justify-center gap-2">
                    <IoSearchOutline />
                    <input className="w-full outline-none" type="text" placeholder="rechercher dans la carte" />
                </div>
                <div>
                    <Avatar onClick={() => setOpen(true)} name="Foo Bar" size={42} round={true} color="blue" />
                </div>
            </div>

            <Disconnect handleClose={handleClose} open={open} Disconnect={Disconnect} Utilisateur={User} />
        </>
    )
}

export default Header
