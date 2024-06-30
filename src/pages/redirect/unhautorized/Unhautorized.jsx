import { Link } from "react-router-dom"


const Unhautorized = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white">403</h1>
                <p className="mt-4 text-2xl text-gray-400">Accès refusé</p>
                <Link to="/login" className="mt-6 inline-block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Se connecter
                </Link>
            </div>
        </div>
    )
}

export default Unhautorized
