import Image from 'next/image'
import { FC } from 'react'
import { Background, Parallax } from 'react-parallax'
import { Link as ScrollLink } from 'react-scroll'
import YouTube, { Options as YTOptions } from 'react-youtube'
import CTA from './CTA'
import styles from './Hero.module.scss'
import Section from './Section'

const Hero: FC = () => {
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
			playlist: '3wzFopqwR6k',
			modestbranding: 1,
		},
	}

	return (
		<section id='hero'>
			<section className={styles.hero}>
				<Parallax strength={500}>
					<Background>
						<YouTube
							videoId='3wzFopqwR6k'
							opts={opts}
							className={styles.video}
						/>
					</Background>
					<div className={styles.placeholder}>
						<div className={styles.logo}>
							<Image src={'/logo.png'} width={800} height={350} />
						</div>
						<ScrollLink
							to='myMission'
							duration={500}
							offset={-50}
							smooth={true}
							spyThrottle={1000}>
							<CTA title='Mi küldetésem?' down light />
						</ScrollLink>
					</div>
				</Parallax>
			</section>
		</section>
	)
}

export default Hero
