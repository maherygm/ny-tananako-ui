

const SignUp = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
                    <h2 className="mb-6 text-2xl font-bold text-center">INSCRIPTION</h2>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fullname">
                            Nom Complet
                        </label>
                        <input
                            id="fullname"
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none "
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                            Mails
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none "
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
                            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded appearance-none focus:outline-none "
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                            <input className="mr-2 leading-tight" type="checkbox" />
                            <span className="text-sm">
                                I agree to all the <a href="#" className="text-blue-500 hover:text-blue-800">Terms & Conditions</a>
                            </span>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">

                        <button
                            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Create Account
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
