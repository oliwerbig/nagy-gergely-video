import Link from 'next/link'
import { FC } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import CTA from './CTA'
import Divider from './Divider'
import styles from './MyExperiences.module.scss'
import YouTubeResponsive from './YouTubeResponsive'

const MyExperiences: FC = () => {
	return (
		<section id='myExperiences'>
			<Divider
				videoID='jwsw-Ca-3N0'
				altImageURL='/myExperiences.png'
				title='Munkáim'
			/>
			<section className={styles.section}>
				<div className={styles.left}>
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
							<YouTubeResponsive videoId='3wzFopqwR6k' />
							<YouTubeResponsive videoId='20hNkjwwVg0' />
						</div>
						<div className={styles.row}>
							<YouTubeResponsive videoId='NwSuTIVtjfw' />
							<YouTubeResponsive videoId='rLqIL5bqa1A' />
							<YouTubeResponsive videoId='zGinDqdg9vE' />
							<YouTubeResponsive videoId='SLxTvW1C3ow' />
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
				<div className={styles.right}>
					<ScrollLink
						to='bookMe'
						duration={500}
						offset={-50}
						smooth={true}
						className={styles.cta}
						spyThrottle={1000}>
						<CTA
							title='Kérj ajánlatot!'
							down
							className={styles.cta}
						/>
					</ScrollLink>
				</div>
			</section>
		</section>
	)
}

export default MyExperiences
