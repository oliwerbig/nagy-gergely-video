import YouTube, { Options as YTOptions } from 'react-youtube'
import useWindowSize from '../hooks/useWindowSize'
import Divider from './Divider'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer} id='footer'>
			<Divider videoID='rLqIL5bqa1A'></Divider>
		</footer>
	)
}

export default Footer
