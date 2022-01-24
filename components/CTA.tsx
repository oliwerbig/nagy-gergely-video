import React, { FC } from 'react'
import {
	ArrowIosBackOutline,
	ArrowIosDownwardOutline,
	ArrowIosForwardOutline,
	ArrowIosUpwardOutline,
} from 'styled-icons/evaicons-outline'
import styles from './CTA.module.scss'

interface Props {
	title?: string
	to?: string
	duration?: number
	offset?: number
	up?: boolean
	right?: boolean
	down?: boolean
	left?: boolean
	light?: boolean
	[key: string]: any
}
const CTA: FC<Props> = ({ title, up, right, down, left, light, ...rest }) => {
	return (
		<div {...rest}>
			<div className={`${styles.cta} ${light ? styles.light : ''}`}>
				{up && (
					<ArrowIosUpwardOutline
						className={`${styles.arrow} ${styles.up}`}
					/>
				)}
				{right && (
					<ArrowIosForwardOutline
						className={`${styles.arrow} ${styles.right}`}
					/>
				)}
				<div>{title}</div>
				{down && (
					<ArrowIosDownwardOutline
						className={`${styles.arrow} ${styles.down}`}
					/>
				)}
				{left && (
					<ArrowIosBackOutline
						className={`${styles.arrow} ${styles.left}`}
					/>
				)}
			</div>
		</div>
	)
}

export default CTA
