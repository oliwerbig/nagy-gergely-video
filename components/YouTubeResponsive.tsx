import { FC, useEffect, useRef, useState } from 'react'
import YouTube, { Options as YTOptions } from 'react-youtube'
import styles from './YouTubeResponsive.module.scss'

interface Props {
	videoId: string
	altImageURL?: string
	loop?: boolean
	mute?: boolean
	autoplay?: boolean
	controls?: boolean
	[key: string]: any
}
const YouTubeResponsive: FC<Props> = ({
	videoID,
	loop = 0,
	mute = 0,
	autoplay = 0,
	controls = 1,
	...rest
}) => {
	const ref = useRef(null)
	const [width, setWidth] = useState(ref?.current?.clientWidth ?? 0)
	const opts: YTOptions = {
		height: (width * (9 / 16)).toString(),
		width: width.toString(),
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: autoplay ? 1 : 0,
			loop: loop ? 1 : 0,
			mute: mute ? 1 : 0,
			controls: controls ? 1 : 0,
			showinfo: 0,
			rel: 0,
			playsinline: 1,
			enablejsapi: 1,
			modestbranding: 1,
			origin: 'https://www.youtube.com',
			playlist: videoID,
		},
	}

	useEffect(() => {
		setWidth(ref?.current?.clientWidth)
	}, [ref?.current?.clientWidth, ref])

	return (
		<div ref={ref} className={`${styles.element}`}>
			<YouTube
				videoId={videoID}
				opts={opts}
				className={styles.video}
				{...rest}
			/>
		</div>
	)
}

export default YouTubeResponsive
