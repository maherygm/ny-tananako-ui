import { CgAddR } from "react-icons/cg"
import { CiBookmarkCheck, CiLocationArrow1 } from "react-icons/ci"
import { IoBusOutline } from "react-icons/io5"
import { TbMapSearch } from "react-icons/tb"
import SlideChangeHooks from "../slider/Slider"

const Bottomtabs = () => {

    const items = [
        {
            title: "Explorer",
            Icons: <TbMapSearch />
        },
        {
            title: "Enregistrer",
            Icons: <CiBookmarkCheck />
        },
        {
            title: "Gps",
            Icons: <CiLocationArrow1 />
        },
        {
            title: "Ajouter",
            Icons: <CgAddR />
        },
        {
            title: "Arrets",
            Icons: <IoBusOutline />
        },
    ]
    return (
        <div className="absolute z-10  w-full text-zinc-600 bottom-0">
            <div>
                <SlideChangeHooks />
            </div>
            <div className="bg-white">
                <div className="flex justify-between px-4 py-4">
                    {
                        items.map((el, index) => (
                            <div className="flex flex-col justify-center items-center" key={index}>
                                <p>{el.Icons}</p>
                                <p>{el.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Bottomtabs
