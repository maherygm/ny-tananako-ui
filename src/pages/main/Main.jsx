import { FaMapSigns } from "react-icons/fa"
import { NavLink } from "react-router-dom"


const Main = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <header className="flex items-center justify-between w-full px-10 py-5 bg-transparent">
                <div className="flex items-center justify-center gap-4 font-bold text-white text4-lg"><FaMapSigns /><p>Ny Tananako</p></div>
                <nav className="space-x-6">
                    <NavLink to={"/login"}><a href="#home" className="text-white">Connection</a></NavLink>
                    <NavLink to={"/signUp"}><a href="#home" className="text-white">Inscription</a></NavLink>
                </nav>
            </header>
            <main className="flex flex-col items-center justify-center flex-1">
                <h1 className="mb-4 text-4xl font-bold text-center text-white">Bienvenue sur la Carte de Transport</h1>
                <p className="mb-6 text-white">Abstract Background</p>
                <p className="max-w-lg mb-10 text-center text-white">
                    Trouvez les meilleurs itinéraires et arrêts pour votre voyage
                </p>
                <button className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">
                    En savoir plus
                </button>
            </main>
            <footer className="w-full py-4 text-center text-gray-400 bg-gray-800">
                &copy; 2024 Carte de Transport. Tous droits réservés.
            </footer>
        </div>
    )
}

export default Main
