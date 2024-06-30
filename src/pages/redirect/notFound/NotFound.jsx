import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white">404</h1>
                <p className="mt-4 text-2xl text-gray-400">Page non trouvée</p>
                <Link to="/" className="mt-6 inline-block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    )
}

export default NotFound
