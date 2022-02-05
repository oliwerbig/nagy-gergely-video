import React, { useRef, useState } from 'react'
import range from '../utils/range'
import styles from './Gallery.module.scss'
import Image from 'next/image'
import useOnClickOutside from '../hooks/useClickOutside'

const Gallery = () => {
	const [selectedID, setSelectedID] = useState()
	const ref = useRef(null)

	const handleClickOutside = () => {
		setSelectedID(undefined)
	}

	useOnClickOutside(ref, handleClickOutside)

	return (
		<section id='gallery'>
			<section className={styles.gallery}>
				{selectedID !== undefined && (
					<div className={styles.modal}>
						<div ref={ref}>
							<Image
								src={`/gallery/${selectedID}.png`}
								width={768}
								height={432}
								alt=''
							/>
						</div>
					</div>
				)}
				{range(0, 39).map(i => (
					<div key={i} className={styles.image}>
						<Image
							key={i}
							src={`/gallery/${i}.png`}
							width={768}
							height={432}
							alt=''
						/>
					</div>
				))}
			</section>
		</section>
	)
}

export default Gallery
