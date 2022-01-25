import Image from 'next/image'
import { FC } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import CTA from './CTA'
import styles from './MyMission.module.scss'

const MyMission: FC = () => {
	return (
		<section id='myMission'>
			<section className={styles.section}>
				<div className={styles.left}>
					<h1 className={styles.title}>Kedves Ifjú pár!</h1>
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
						offset={-50}
						smooth={true}>
						<CTA
							title='Hogyan dolgozom?'
							down
							className={styles.cta}
						/>
					</ScrollLink>
				</div>
				<div className={styles.right}>
					<div className={styles.image}>
						<Image
							src='/Nagy-Gergely.png'
							width={433}
							height={531}
							layout='responsive'
						/>
					</div>
				</div>
			</section>
		</section>
	)
}

export default MyMission
