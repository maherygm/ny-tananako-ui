import { Outlet } from "react-router-dom"
import Bottomtabs from "./components/bottomtabs/Bottomtabs"
import Header from "./components/header/Header"


const Client = () => {


    return (
        <div className="relative h-screen overflow-hidden">
            <Header />
            <Outlet />
            <Bottomtabs />
        </div>
    )
}

export default Client
