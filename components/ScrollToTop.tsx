import React, { useEffect } from 'react'
import { ArrowIosUpwardOutline } from 'styled-icons/evaicons-outline'
import styles from './ScrollToTop.module.scss'
import { animateScroll as scroll } from 'react-scroll'
import usePageOffset from '../hooks/usePageOffset'

const ScrollToTop = () => {
	const offset = usePageOffset()

	return (
		<div
			className={styles.scrollToTop}
			style={{
				display: offset > 20 ? 'block' : 'none',
			}}
			onClick={() => scroll.scrollToTop()}>
			<ArrowIosUpwardOutline className={styles.arrow} />
		</div>
	)
}

export default ScrollToTop