
import Avatar from 'react-avatar'
import DialogsModals from '../../../../../components/ui/modals/DialogsModals'

const Disconnect = ({ handleClose, open, Disconnect, Utilisateur }) => {
    return (
        <DialogsModals Open={open} handleClose={handleClose}>
            <div className="bg-white w-[80vw] rounded-2xl">
                <div className="relative w-full max-w-sm p-4 mx-auto bg-white rounded-2xl shadow-lg">
                    <button
                        onClick={handleClose}
                        className="absolute top-0 right-0 mt-2 mr-2 text-gray-700 focus:outline-none"

                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col items-center">
                        <div className='flex gap-4 capitalize items-center  my-3 '>
                            <Avatar name={Utilisateur.name} size={42} round={true} color="blue" />
                            <h2 className="mb-2 text-xl font-bold text-gray-800">{Utilisateur.name}</h2>
                        </div>

                        <div className="w-full border-t border-gray-300" />
                        <p>
                            Voulez vous se deconnecter
                        </p>
                        <button
                            onClick={Disconnect}
                            className="px-4 py-2 mt-4 font-bold text-white bg-zinc-500 rounded-md hover:bg-zinc-600 transition-colors duration-200"
                        >
                            Déconnexion
                        </button>
                    </div>
                </div>
            </div>
        </DialogsModals>
    )
}

export default Disconnect
