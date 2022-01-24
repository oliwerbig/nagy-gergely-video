import { Link as ScrollLink } from 'react-scroll'
import YouTube, { Options as YTOptions } from 'react-youtube'
import CTA from './CTA'
import styles from './MyMission.module.scss'
import YouTubeResponsive from './YouTubeResponsive'

const MyMission = () => {
	return (
		<section className={styles.section} id='myMission'>
			<h1 className={styles.title}>Kedves Ifjú pár!</h1>
			<section className={styles.content}>
				<div>
					<p className={styles.text}>
						Egy esküvőn az érzelmek szinte egész skálája megjelenik,
						tele van örömmel, nevetéssel, meghatódottsággal és
						könnyekkel is, amit az egész család és a számotokra
						legfontosabb emberekkel osztotok meg. Óriási nagy
						megtiszteltetésnek és felelősségnek érzem, amikor
						meghívást kapok egy ilyen különleges VIP eseményre.
						Szenvedélyemmé vált az esküvői videózás, szeretem
						megélni ezeket a csodás pillanatokat és hihetetlen nagy
						öröm számomra, amikor a pár visszanézi a videót és
						lelkesen felhívnak és kifejezik hálájukat a munkámért.
						Az mozgat engem, hogy valami olyat adjak a párnak, ami
						több csodásan komponált cinematikus felvételek
						montázsánál. Valami olyat, ami tényleg a pár és az
						esküvő egyéniségére épül és a valós érzelmeket a
						leghitelesebben adja vissza. Tekintsétek meg lejjebb
						görgetve a munkáimat és azt, hogy hogyan dolgozom.
					</p>
					<ScrollLink
						to='myWorkflow'
						duration={500}
						offset={150}
						smooth={true}>
						<CTA
							title='Hogyan dolgozom?'
							down
							className={styles.cta}
						/>
					</ScrollLink>
				</div>
				<div>
					<YouTubeResponsive
						videoId='3wzFopqwR6k'
						autoplay={true}
						mute={true}
						loop={true}
						className={styles.video}
					/>
				</div>
			</section>
		</section>
	)
}

export default MyMission
