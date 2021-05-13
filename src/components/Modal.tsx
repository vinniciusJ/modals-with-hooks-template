import React, { useImperativeHandle, useState, useCallback } from 'react'

import { X } from 'react-feather'

import styles from './Modal.module.scss'

const Modal: React.FC = ({ children }) => {
    const [ visibility, setVisibility ] = useState(false)

    const closeModal = useCallback(() => setVisibility(false), [  ])

    if(!visibility) 
        return null

    return (
        <div className={styles.container}>
            <header>
                <button onClick={closeModal}>
                    <X color='#988BC7'/>
                </button>
            </header>

            <div>
                {children}
            </div>
        </div>
    )
}

export default Modal
