import { useState } from "react"
import Avatar from "react-avatar"
import { FiAlignLeft } from "react-icons/fi"
import { IoSearchOutline } from "react-icons/io5"
import Disconnect from "../disconnect/Disconnect"

const Header = () => {
    const [open, setOpen] = useState(true)
    function handleClose(params) {
        setOpen(false);
    }
    const User = {
        name: "mahery"
    }
    return (
        <>
            <div className="flex absolute top-0 w-full bg-white z-10 justify-between items-center py-4 px-2 shadow-md">
                <div className="text-2xl">
                    <FiAlignLeft />
                </div>
                <div className="flex items-center justify-center  gap-2">
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
