import React, { FC } from 'react'
import { Check } from 'styled-icons/bootstrap'
import styles from './BookMeOptions.module.scss'

interface Props {
	formState: any
	setFormState: (formState: any) => void
}
const BookMeOptions: FC<Props> = ({ formState, setFormState }) => {
	return (
		<div className={styles.row}>
			<div
				className={`${styles.priceOption} ${
					formState.option === 'Ceremónia' ? styles.selected : ''
				} ${styles.ceremony}`}
				onClick={() =>
					setFormState({
						...formState,
						option: 'Ceremónia',
					})
				}>
				<header>
					<h1 className={styles.title}>Ceremónia</h1>
					<h3 className={styles.price}>100.000Ft</h3>
				</header>
				<ul>
					<li>
						<Check className={styles.check} />
						<div>
							3 órás rendelkezésre állás a szertartás alatt.
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							Szertartást és az azt közvetlen megelőző és követő
							fő események rögzítése az összefoglaló rövid
							videóhoz, profi kamerával, stabilizátorral, a
							referencia videókban látott minőséget garantálva.
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							A szertartás hangjának profi rögzítése
							vezetéknélküli csipis mikrofonokkal és keverőpultból
							való rögzítéssel. A felvett hanganyag
							összeszinkronizálása a felvételekkel.
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							A szertartás hangjának profi rögzítése
							vezetéknélküli csipis mikrofonokkal és keverőpultból
							való rögzítéssel. A felvett hanganyag
							összeszinkronizálása a felvételekkel.
						</div>
					</li>
				</ul>
			</div>
			<div
				className={`${styles.priceOption} ${
					formState.option === 'Highlights' ? styles.selected : ''
				}  ${styles.highlights}`}
				onClick={() =>
					setFormState({
						...formState,
						option: 'Highlights',
					})
				}>
				<header>
					<h1 className={styles.title}>Highlights</h1>
					<h3 className={styles.price}>150.000Ft</h3>
				</header>
				<ul>
					<li>
						<Check className={styles.check} />
						<div>
							6 órás rendelkezésre állás a szertartás alatt.
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							Szertartást és az azt közvetlen megelőző és követő
							fő események rögzítése az összefoglaló rövid
							videóhoz, profi kamerával, stabilizátorral, a
							referencia videókban látott minőséget garantálva.
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							A szertartás hangjának profi rögzítése
							vezetéknélküli csipis mikrofonokkal és keverőpultból
							való rögzítéssel. A felvett hanganyag
							összeszinkronizálása a felvételekkel.
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							3-4 perces highlight videó elkészítése a referencia
							videóimban látott megoldásokkal és minőségben.
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							A szertartás felvétele egy fix helyre lerakott
							egyszerűbb kamerával és annak vágatlanul való
							átadása, ami azt a célt szolgálja, hogy legyen egy
							olyan felvétel is, amin egy az egyben vissza lehet
							nézni a szertartást.
						</div>
					</li>
				</ul>
			</div>
			<div
				className={`${styles.priceOption} ${
					formState.option === 'Álomvideó' ? styles.selected : ''
				}  ${styles.dream}`}
				onClick={() =>
					setFormState({
						...formState,
						option: 'Álomvideó',
					})
				}>
				<header>
					<h1 className={styles.title}>Álomvideó</h1>
					<h3 className={styles.price}>200.000Ft</h3>
				</header>
				<ul>
					<li>
						<Check className={styles.check} />
						<div>
							12 órás rendelkezésre állás a szertartás alatt.
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							Szertartást és az azt közvetlen megelőző és követő
							fő események rögzítése az összefoglaló rövid
							videóhoz, profi kamerával, stabilizátorral, a
							referencia videókban látott minőséget garantálva.
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							Szertartást és az azt közvetlen megelőző és követő
							fő események rögzítése az összefoglaló rövid
							videóhoz, profi kamerával, stabilizátorral, a
							referencia videókban látott minőséget garantálva.
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							Szertartást és az azt közvetlen megelőző és követő
							fő események rögzítése az összefoglaló rövid
							videóhoz, profi kamerával, stabilizátorral, a
							referencia videókban látott minőséget garantálva.
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							Drónfelvételek a helyszínről. (amennyiben az
							időjárás és helyszíni adottságok lehetővé teszik)
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							5-10 perces highlight videó elkészítése a referencia
							videóimban látott megoldásokkal és minőségben.
						</div>
					</li>
					<li>
						<Check className={styles.check} />
						<div>
							A szertartás felvétele egy fix helyre lerakott
							egyszerűbb kamerával és annak vágatlanul való
							átadása, ami azt a célt szolgálja, hogy legyen egy
							olyan felvétel is, amin egy az egyben vissza lehet
							nézni a szertartást.
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default BookMeOptions
