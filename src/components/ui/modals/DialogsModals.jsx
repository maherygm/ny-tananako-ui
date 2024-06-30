import React from 'react'

const DialogsModals = ({ Open, handleClose, children }) => {

    if (!Open) {
        return null
    }
    return (
        <div className='absolute top-0 left-0 w-screen h-screen z-50 '>
            <div onClick={() => handleClose()} className='absolute top-0 left-0 w-full h-full bg-black/50'></div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                {children}
            </div>
        </div>
    )
}

export default DialogsModals
