import React, { FC, useEffect } from 'react'
import { ArrowIosUpwardOutline } from 'styled-icons/evaicons-outline'
import styles from './ScrollToTop.module.scss'
import { animateScroll as scroll } from 'react-scroll'
import usePageOffset from '../hooks/usePageOffset'

const ScrollToTop: FC = () => {
	const offset = usePageOffset()

	return (
		<div
			className={styles.scrollToTop}
			style={{
				display: offset > 20 ? 'flex' : 'none',
			}}
			onClick={() => scroll.scrollToTop()}>
			<ArrowIosUpwardOutline className={styles.arrow} />
		</div>
	)
}

export default ScrollToTop
