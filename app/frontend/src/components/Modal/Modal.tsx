import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ModalOverlay } from './Modal.styles'

interface ModalProps {
    children: React.ReactNode
    open: boolean
    setClose: () => void
}

export function Modal({ children, open, setClose }: ModalProps) {
    if (!open) return <Fragment></Fragment>
    return ReactDOM.createPortal(
        <div>
            <ModalOverlay onClick={setClose} />
            {children}
        </div>,
        document.getElementById('portal') as Element,
    )
}
