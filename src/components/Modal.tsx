import React, { useImperativeHandle, useState, useCallback, forwardRef, ReactNode, useRef, CSSProperties } from 'react'
import Portal from './Portal'
import styles from './Modal.module.scss'

import { X } from 'react-feather'

interface ModalProps {
    withPortal?: boolean
    style?: CSSProperties
    children: ReactNode
    closeAction?: boolean
    id?: string
}

interface ModalHandles {
    openModal: () => void
    closeModal: () => void
}

export function useModal(){
    return useRef<ModalHandles>(null)
}

const Modal: React.ForwardRefRenderFunction<ModalHandles, ModalProps> = (props, ref) => {
    const { children, withPortal, closeAction, id } = props

    const [ visibility, setVisibility ] = useState(false)

    const openModal = useCallback(() => setVisibility(true), [  ])
    const closeModal = useCallback(() => setVisibility(false), [  ])

    useImperativeHandle(ref, () => ({ openModal, closeModal }))

    if(!visibility) 
        return null

    if(withPortal){
        return (
            <Portal id={id ?? 'modal'}>
                <div className={styles.container}>
                    { closeAction && (
                        <header>
                            <button onClick={closeModal}>
                                <X color='#988BC7'/>
                            </button>
                        </header>
                    ) }

                    <div>
                        {children}
                    </div>
                </div>
            </Portal>
        )
    }

    return (
        <div className={styles.container}>
            { closeAction && (
                <header>
                    <button onClick={closeModal}>
                        <X color='#988BC7'/>
                    </button>
                </header>
            ) }

            <div className={styles.contentContainer} >
                {children}
            </div>
        </div>
    )
}

export default forwardRef(Modal)

