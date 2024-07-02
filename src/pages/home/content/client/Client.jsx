import Bottomtabs from "./components/bottomtabs/Bottomtabs"
import Header from "./components/header/Header"
import Section from "./contents/explore/Section"


const Client = () => {


    return (
        <div className="relative h-screen overflow-hidden">
            <Header />
            <Section />
            <Bottomtabs />
        </div>
    )
}

export default Client
