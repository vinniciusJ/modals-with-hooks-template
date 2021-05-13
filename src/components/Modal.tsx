import React, { useImperativeHandle, useState, useCallback, forwardRef, ReactNode, CSSProperties } from 'react'
import Portal from './Portal'
import styles from './Modal.module.scss'

import { X } from 'react-feather'

interface ModalProps {
    style?: CSSProperties
    children: ReactNode
}

export interface ModalHandles {
    openModal: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalHandles, ModalProps> = ({ children, style }, ref) => {
    const [ visibility, setVisibility ] = useState(false)

    const openModal = useCallback(() => setVisibility(true), [  ])

    const closeModal = useCallback(() => setVisibility(false), [  ])

    useImperativeHandle(ref, () => ({
        openModal
    }))

    if(!visibility) 
        return null

    return (
        <Portal id="modal">
            <div style={style} className={styles.container}>
                <header>
                    <button onClick={closeModal}>
                        <X color='#988BC7'/>
                    </button>
                </header>

                <div>
                    {children}
                </div>
            </div>
        </Portal>
    )
}

export default forwardRef(Modal)

