import React, { CSSProperties, useCallback } from 'react'
import Modal, { useModal } from './components/Modal'
import styles from './index.module.scss'

import { Maximize2 } from 'react-feather'

const INLINE_STYLE_MODAL: CSSProperties = {
	background: 'var(--current-line)',
	width: '60vw',
	height: '40vh'
}

const App: React.FC = () => {
	const modal = useModal()

	const openModal = useCallback(() => modal.current?.openModal(), [ modal ])

	return (
		<div className={styles.container}>
			<button onClick={openModal}>
				<Maximize2 color='#988BC7'/>

				<span>Open Modal</span>
			</button>

			<Modal ref={modal} withPortal style={INLINE_STYLE_MODAL}>
				<h1 className={styles.modalTitle}>Hello World</h1>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus accusamus tempore id suscipit nostrum molestias tempora voluptatum doloribus. Sint aliquam distinctio inventore eveniet impedit tenetur quia reprehenderit adipisci. Quia.</p>
			</Modal>
		</div>
    )
}

export default App


