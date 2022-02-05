import { FC } from 'react'
import { Background, Parallax } from 'react-parallax'
import { Link as ScrollLink } from 'react-scroll'
import YouTube, { Options as YTOptions } from 'react-youtube'
import CTA from './CTA'
import styles from './Footer.module.scss'

const Footer: FC = () => {
	const opts: YTOptions = {
		height: (1080).toString(),
		width: (1920).toString(),
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
			loop: 1,
			mute: 1,
			controls: 0,
			showinfo: 0,
			rel: 0,
			playsinline: 1,
			enablejsapi: 1,
			origin: 'https://video.nagygergely.info',
			playlist: 'rLqIL5bqa1A',
			modestbranding: 1,
		},
	}

	return (
		<footer id='footer'>
			<section className={styles.content}>
				<Parallax strength={500}>
					<Background>
						<YouTube
							videoId='3wzFopqwR6k'
							opts={opts}
							className={styles.video}
						/>
					</Background>
					<div className={styles.placeholder}>
						<ScrollLink
							to='hero'
							duration={500}
							offset={-50}
							smooth={true}
							spyThrottle={1000}>
							<CTA title='Vissza' up light />
						</ScrollLink>
						<div className={styles.text}>
							<div className={styles.title}>Kapcsolat</div>
							<div className={styles.subtitle}>
								Nagy Gergely - email@nagygergely.info - 06 30
								646 4640
							</div>
						</div>
					</div>
				</Parallax>
			</section>
			<section className={styles.bar}>
				Nagy Gergely Wedding Videography
			</section>
		</footer>
	)
}

export default Footer
