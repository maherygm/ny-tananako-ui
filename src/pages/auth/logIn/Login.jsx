import { NavLink } from "react-router-dom"


const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
                    <h2 className="mb-6 text-2xl font-bold text-center">Se Connecter</h2>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                            Nom d'utilisateur
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded outline-none"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                            Mots de passe
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="******************"
                            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded focus:outline-none "
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none "
                            type="button"
                        >
                            Connection
                        </button>
                    </div>
                    <div className="my-4 text-center">
                        <span>Ou</span>
                    </div>
                    <div className="flex justify-center">
                        <button className="px-4 py-2 mx-1 font-bold text-white bg-red-500 rounded hover:bg-red-700">
                            G
                        </button>
                        <button className="px-4 py-2 mx-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                            f
                        </button>
                    </div>
                    <div className="my-4 text-center">
                        <NavLink to={"/signUp"}><a href="#" className="text-blue-500 hover:text-blue-800">Don't have an account? Sign Up</a></NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
