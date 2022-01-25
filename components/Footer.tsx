import { FC } from 'react'
import Divider from './Divider'
import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.footer} id='footer'>
			Nagy Gergely Wedding Videography
		</footer>
	)
}

export default Footer
