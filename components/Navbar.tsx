import { Link as ScrollLink, scroller } from 'react-scroll'
import usePageOffset from '../hooks/usePageOffset'
import styles from './Navbar.module.scss'

const Navbar = () => {
	const offset = usePageOffset()

	const handleSetActive = (to: string) => {
		if (to === 'myWorkflow') {
			scroller.scrollTo('myWorkflow', {
				duration: 80000,
				delay: 0,
				smooth: true,
				offset:
					document.getElementById('myWorkflow')?.scrollHeight - 750 ??
					0,
			})
		}
	}

	return (
		<nav
			className={`${styles.navbar} ${offset > 0 ? styles.scrolled : ''}`}
			id='navbar'>
			<ul>
				<li>
					<ScrollLink
						to='myMission'
						activeClass={styles.active}
						spy={true}
						smooth={true}
						duration={500}
						onSetActive={handleSetActive}
						offset={-200}
						spyThrottle={1000}>
						<div className={styles.link}>Küldetésem</div>
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to='myExperiences'
						activeClass={styles.active}
						spy={true}
						smooth={true}
						duration={500}
						onSetActive={handleSetActive}
						offset={150}
						spyThrottle={1000}>
						<div className={styles.link}>Munkáim</div>
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to='myWorkflow'
						activeClass={styles.active}
						spy={true}
						smooth={true}
						duration={500}
						onSetActive={handleSetActive}
						offset={150}
						spyThrottle={1000}>
						<div className={styles.link}>Hogy dolgozom</div>
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to='bookMe'
						activeClass={styles.active}
						spy={true}
						smooth={true}
						duration={500}
						onSetActive={handleSetActive}
						offset={150}
						spyThrottle={1000}>
						<div className={styles.link}>Ajánlatkérés</div>
					</ScrollLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
