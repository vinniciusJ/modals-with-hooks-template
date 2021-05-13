import React, { useCallback, useRef } from 'react'
import Modal, { ModalHandles } from './components/Modal'
import styles from './index.module.scss'

import { Maximize2 } from 'react-feather'

const App: React.FC = () => {
	const modalRef = useRef<ModalHandles>(null)

	const openModal = useCallback(() => modalRef.current?.openModal(), [])

	return (
		<div className={styles.container}>
			<button onClick={openModal}>
				<Maximize2 color='#988BC7'/>

				<span>Open Modal</span>
			</button>

			<Modal ref={modalRef}>
				<h1>Hello World</h1>
			</Modal>
		</div>
    )
}

export default App


