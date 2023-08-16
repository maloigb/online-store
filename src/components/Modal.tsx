import React from 'react';

interface ModalProps {
    children: React.ReactNode
    title: string
    onClose : () => void
}

export function Modal({children, title, onClose} : ModalProps) {
    return (
        <>
            <div
                className="fixed bg-black top-0 rigth-0 left-0 buttom-0" 
                onClick={() => onClose()}
            />
            <div
                className='bg-black/50 w-[500px] p-5 rounded fixed top-10 left-1/2 -translate-x-1/2'
            >
                <h1 className="bg-white/50 text-2xl text-center mb-2">{ title}</h1>
                {children}
            </div>
        </>

    )
}