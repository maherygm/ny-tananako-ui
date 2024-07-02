import { useState } from "react"
import { CgAddR } from "react-icons/cg"
import { CiLocationArrow1 } from "react-icons/ci"
import { IoBusOutline } from "react-icons/io5"
import { TbMapSearch } from "react-icons/tb"
import { NavLink } from "react-router-dom"
import SlideChangeHooks from "../slider/Slider"

const Bottomtabs = () => {

    const items = [
        {
            title: "Explorer",
            Icons: <TbMapSearch />,
            path: ""
        },
        {
            title: "Gps",
            Icons: <CiLocationArrow1 />,
            path: ""
        },
        {
            title: "Ajouter",
            Icons: <CgAddR />,
            path: "add",
        },
        {
            title: "Arrets",
            Icons: <IoBusOutline />
        },
    ]
    const items2 = [

        {
            title: "Explorer",
            Icons: <TbMapSearch />,
            path: ""
        },
        {
            title: "Gps",
            Icons: <CiLocationArrow1 />,
            path: ""
        },
        {
            title: "Arrets",
            Icons: <IoBusOutline />,
            path: ""
        },
    ]

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };

    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="absolute z-10 h-fit w-full text-zinc-600  bottom-0">
            <div>
                {
                    selectedIndex !== 0 ? "" : <SlideChangeHooks />
                }
            </div>
            <div className="bg-white shadow-md">
                <div className="flex">
                    {
                        (user.role === "admin" ? items : items2).map((el, index) => (
                            <NavLink className={"w-full"} to={el.path} key={index}>
                                <div onClick={() => handleClick(index)} className={`flex flex-col justify-center items-center w-full px-4 py-4 text-zinc-600 ${selectedIndex === index ? 'bg-blue-100 text-blue-700 transition-colors duration-300 ' : 'bg-white'}`} key={index}>
                                    <p className="text-2xl">{el.Icons}</p>
                                    <p className="">{el.title}</p>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Bottomtabs
