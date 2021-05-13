import React, { useImperativeHandle, useState, useCallback, forwardRef, ReactNode, useRef, CSSProperties } from 'react'
import Portal from './Portal'
import styles from './Modal.module.scss'

import { X } from 'react-feather'

interface ModalProps {
    withPortal?: boolean
    style?: CSSProperties
    children: ReactNode
}

interface ModalHandles {
    openModal: () => void
}

export function useModal(){
    return useRef<ModalHandles>(null)
}

const Modal: React.ForwardRefRenderFunction<ModalHandles, ModalProps> = ({ children, style, withPortal }, ref) => {
    const [ visibility, setVisibility ] = useState(false)

    const openModal = useCallback(() => setVisibility(true), [  ])

    const closeModal = useCallback(() => setVisibility(false), [  ])

    useImperativeHandle(ref, () => ({ openModal }))

    if(!visibility) 
        return null

    return (
        <>
        { withPortal && (
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
        ) }

        { withPortal || (
            <div style={style}  className={styles.container}>
                <header>
                    <button onClick={closeModal}>
                        <X color='#988BC7'/>
                    </button>
                </header>

                <div className={styles.contentContainer} >
                    {children}
                </div>
            </div>
        ) }
        </>
    )
}

export default forwardRef(Modal)

