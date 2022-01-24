import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import CTA from './CTA'
import Divider from './Divider'
import styles from './MyExperiences.module.scss'
import YouTubeResponsive from './YouTubeResponsive'

const MyExperiences = () => {
	return (
		<>
			<Divider
				videoID='jwsw-Ca-3N0'
				altImageURL='/myExperiences.png'
				title='Munkáim'
				id='myExperiences'
			/>
			<section className={styles.section}>
				<div>
					<p className={styles.text}>
						Minden szónál többet ér, ha megnézitek a munkáim.
						Tekintsétek meg a referencia videóimat, olvassátok el
						hogyan dolgozom és ha a látottak, illetve az irányadó
						árak egyeznek az elképzeléseitekkel, akkor szeretettel
						várom árajánlatkéréseteket. Kívánom, hogy megtaláljátok
						a számotokra legmegfelelőbb videós és szolgáltatókat.
						Stresszmentes, örömteli készülődést kívánok nektek és
						nem utolsó sorban sok boldogságot az ifjú párnak!
					</p>
					<p>
						<div className={styles.row}>
							<YouTubeResponsive videoId='20hNkjwwVg0' />
							<YouTubeResponsive videoId='NwSuTIVtjfw' />
						</div>
						<div className={styles.row}>
							<YouTubeResponsive videoId='SLxTvW1C3ow' />
							<YouTubeResponsive videoId='rLqIL5bqa1A' />
							<YouTubeResponsive videoId='zGinDqdg9vE' />
							<YouTubeResponsive videoId='8HEn74PgOUg' />
							<Link
								href='https://www.youtube.com/watch?v=3wzFopqwR6k&list=PLKicgw4LWR7OxHWd2aXh3n7pBRytIHh3q'
								passHref>
								<a
									className={styles.moreVideos}
									target='_blank'>
									<CTA title='Több' right />
								</a>
							</Link>
						</div>
					</p>
				</div>
				<ScrollLink
					to='bookMe'
					duration={500}
					offset={150}
					smooth={true}
					className={styles.cta}
					spyThrottle={1000}>
					<CTA title='Kérj ajánlatot!' down className={styles.cta} />
				</ScrollLink>
			</section>
		</>
	)
}

export default MyExperiences
