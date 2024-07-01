import Bottomtabs from "./bottomtabs/Bottomtabs"
import Header from "./header/Header"
import Section from "./section/Section"


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
