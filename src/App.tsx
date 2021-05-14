import React, { useCallback } from 'react'
import Modal, { useModal } from './components/Modal'
import styles from './index.module.scss'

import { Maximize2 } from 'react-feather'

const App: React.FC = () => {
	const firstModalExample = useModal()
	const secModalExample = useModal()

	const openModal = useCallback(({ modal }) => () => modal.current?.openModal(), [ ])
	const closeModal = useCallback(({ modal }) => () => modal.current?.closeModal(), [ ])

	return (
		<div className={styles.container}>
			<button onClick={openModal({ modal: firstModalExample })}>
				<Maximize2 color='#988BC7'/>

				<span>Open Modal I</span>
			</button>

			<button onClick={openModal({ modal: secModalExample })}>
				<Maximize2 color='#988BC7'/>

				<span>Open Modal II</span>
			</button>

			<Modal ref={firstModalExample} withPortal closeAction={true}>
				<h1 className={styles.modalTitle}>Hello World</h1>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus accusamus tempore id suscipit nostrum molestias tempora voluptatum doloribus. Sint aliquam distinctio inventore eveniet impedit tenetur quia reprehenderit adipisci. Quia.</p>
			</Modal>

			<Modal ref={secModalExample} withPortal>
				<h1 className={styles.modalTitle}>Hello World</h1>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus accusamus tempore id suscipit nostrum molestias tempora voluptatum doloribus. Sint aliquam distinctio inventore eveniet impedit tenetur quia reprehenderit adipisci. Quia.</p>

				<button className={styles.closeButton} onClick={closeModal({ modal: secModalExample })}>
					Cancel
				</button>
			</Modal>
		</div>
    )
}

export default App


