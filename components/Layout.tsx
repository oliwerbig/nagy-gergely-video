import Head from 'next/head'
import styles from './Layout.module.scss'

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Nagy Gergely Wedding Videography</title>
			</Head>
			<main className={styles.main}>{children}</main>
		</>
	)
}
