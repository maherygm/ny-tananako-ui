import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { toastMessage } from "../../../hooks/useToaster";
import { checkLogin } from "../../../services/loginService";



const Login = () => {

    const [username, setUserName] = useState();
    const [password, setPassWord] = useState();


    const [isUserNameValid, setIsUserNameValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();



    function handleSubmit(e) {
        e.preventDefault();

        //hecking form is valid 
        checkForm();

        //checklogin
        const isLoggedinPromise = checkLogin(username, password);

        isLoggedinPromise.then((loged) => {

            if (loged.isLogedIn) {
                localStorage.setItem('user', JSON.stringify(loged.user));
                toastMessage("vous etes connecter", "success");
                setIsLoading(false);
                navigate('/home');
            } else {
                toastMessage("erreur veuillez reessayer", "error");
                setIsLoading(false);
            }
        })
    }

    function checkForm() {

        let valid = true;
        setIsLoading(true)

        if (username === "") {
            setIsLoading(false);
            setIsUserNameValid(false);
            valid = false;
        }
        if (password === "") {
            setIsLoading(false);
            setIsPasswordValid(false);
            valid = false;
        }

        return valid
    }

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
                            value={username}

                            required
                            onChange={(e) => {
                                setIsUserNameValid(true)
                                setUserName(e.target.value)
                            }}
                            className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded outline-none ${isUserNameValid ? "" : "border-red-400"}`}
                        />
                        {
                            !isUserNameValid && <p className="w-full p-2 text-red-600 bg-red-50">Nom d'utilisateur ne peut pas etre vide !</p>
                        }
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                            Mots de passe
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setIsPasswordValid(true)
                                setPassWord(e.target.value)
                            }
                            }
                            placeholder="******************"

                            required
                            className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded focus:outline-none ${isPasswordValid ? "" : "border-red-400"}`}
                        />
                        {
                            !isPasswordValid && <p className="w-full p-2 mb-3 text-red-600 bg-red-50">Mots de passe ne peut pas etre vide !</p>
                        }
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="flex items-center justify-center w-full gap-4 px-4 py-2 font-bold text-white transition-all duration-200 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            {isLoading && <AiOutlineLoading3Quarters className="animate-spin" />} <p className="transition-all duration-200">Connection</p>
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
