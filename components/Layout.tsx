import Head from 'next/head'
import { FC } from 'react'
import styles from './Layout.module.scss'

interface Props {
	children: any
}
const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Nagy Gergely Wedding Videography</title>
			</Head>
			<main className={styles.main}>{children}</main>
		</>
	)
}

export default Layout
