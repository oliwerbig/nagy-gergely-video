import { FC } from 'react'
import { Background, Parallax } from 'react-parallax'
import YouTube, { Options as YTOptions } from 'react-youtube'
import styles from './Divider.module.scss'

interface Props {
	videoID: string
	altImageURL?: string
	title?: string
	children?: any
	id?: string
}
const Divider: FC<Props> = ({ videoID, title, altImageURL, children, id }) => {
	const opts: YTOptions = {
		height: (1080).toString(),
		width: (1920).toString(),
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
			loop: 1,
			mute: 1,
			controls: 1,
			showinfo: 0,
			rel: 0,
			playsinline: 1,
			enablejsapi: 1,
			modestbranding: 1,
			origin: 'https://www.youtube.com',
			playlist: videoID,
		},
	}
	return (
		<section className={styles.divider} id={id}>
			<Parallax strength={750} bgImage={altImageURL}>
				<Background>
					<YouTube
						videoId={videoID}
						opts={opts}
						className={styles.video}
					/>
				</Background>
				<div className={styles.placeholder}>
					{title && <div className={styles.title}>{title}</div>}
					{children}
				</div>
			</Parallax>
		</section>
	)
}

export default Divider
