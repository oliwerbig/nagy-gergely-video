import { useState } from 'react'
import { toast } from 'react-toastify'
import { Check } from 'styled-icons/bootstrap'
import styles from './BookMe.module.scss'
import BookMeForm from './BookMeForm'
import Divider from './Divider'

const BookMe = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		phone: '',
		date: '',
		location: '',
		option: '',
		message: '',
	})

	return (
		<>
			<Divider
				videoID='NwSuTIVtjfw'
				altImageURL='/bookMe.png'
				title='Ajánlatkérés'
				id='bookMe'
			/>
			<section className={styles.section}>
				<div>
					<p className={styles.text}>
						Sokakat zavar, hogy rengeteg felesleges kört kell
						lefutniuk, mert nincsenek feltüntetve az árak a
						szolgáltatók weboldalain és ajánlatot kérve rendszeresen
						olyan árakkal találják szemben magukat a párok, amik nem
						felelnek meg az elképzeléseinek.{' '}
					</p>
					<p className={styles.text}>
						Éppen ezért lejjebb görgetve láthatjátok az alap
						ajánlataimat. Három csomag közül tudtok választani, amik
						természetesen rugalmasak. Ezek a csomagok, árak
						irányadóak, arra szolgálnak, hogy nagyjából tisztában
						legyetek azzal, hogy milyen árajánlattal kell számolni,
						ha engem kértek fel esküvőtök megörökítéséhez.
					</p>{' '}
					<p className={styles.text}>
						Ha megfelelnek az áraim az elképzeléseiteknek, akkor
						kérlek töltsétek ki az űrlapot és hamarosan jelentkezni
						fogok.
					</p>
					<p>
						<div className={`${styles.row}`}>
							<div
								className={`${styles.priceOption} ${
									formState.option === 'Ceremónia'
										? styles.selected
										: ''
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
											3 órás rendelkezésre állás a
											szertartás alatt.
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											Szertartást és az azt közvetlen
											megelőző és követő fő események
											rögzítése az összefoglaló rövid
											videóhoz, profi kamerával,
											stabilizátorral, a referencia
											videókban látott minőséget
											garantálva.
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											A szertartás hangjának profi
											rögzítése vezetéknélküli csipis
											mikrofonokkal és keverőpultból való
											rögzítéssel. A felvett hanganyag
											összeszinkronizálása a
											felvételekkel.
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											A szertartás hangjának profi
											rögzítése vezetéknélküli csipis
											mikrofonokkal és keverőpultból való
											rögzítéssel. A felvett hanganyag
											összeszinkronizálása a
											felvételekkel.
										</div>
									</li>
								</ul>
							</div>
							<div
								className={`${styles.priceOption} ${
									formState.option === 'Highlights'
										? styles.selected
										: ''
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
											6 órás rendelkezésre állás a
											szertartás alatt.
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											Szertartást és az azt közvetlen
											megelőző és követő fő események
											rögzítése az összefoglaló rövid
											videóhoz, profi kamerával,
											stabilizátorral, a referencia
											videókban látott minőséget
											garantálva.
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											A szertartás hangjának profi
											rögzítése vezetéknélküli csipis
											mikrofonokkal és keverőpultból való
											rögzítéssel. A felvett hanganyag
											összeszinkronizálása a
											felvételekkel.
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											3-4 perces highlight videó
											elkészítése a referencia videóimban
											látott megoldásokkal és minőségben.
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											A szertartás felvétele egy fix
											helyre lerakott egyszerűbb kamerával
											és annak vágatlanul való átadása,
											ami azt a célt szolgálja, hogy
											legyen egy olyan felvétel is, amin
											egy az egyben vissza lehet nézni a
											szertartást.
										</div>
									</li>
								</ul>
							</div>
							<div
								className={`${styles.priceOption} ${
									formState.option === 'Álomvideó'
										? styles.selected
										: ''
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
											12 órás rendelkezésre állás a
											szertartás alatt.
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											Szertartást és az azt közvetlen
											megelőző és követő fő események
											rögzítése az összefoglaló rövid
											videóhoz, profi kamerával,
											stabilizátorral, a referencia
											videókban látott minőséget
											garantálva.
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											Szertartást és az azt közvetlen
											megelőző és követő fő események
											rögzítése az összefoglaló rövid
											videóhoz, profi kamerával,
											stabilizátorral, a referencia
											videókban látott minőséget
											garantálva.
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											Szertartást és az azt közvetlen
											megelőző és követő fő események
											rögzítése az összefoglaló rövid
											videóhoz, profi kamerával,
											stabilizátorral, a referencia
											videókban látott minőséget
											garantálva.
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											Drónfelvételek a helyszínről.
											(amennyiben az időjárás és helyszíni
											adottságok lehetővé teszik)
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											5-10 perces highlight videó
											elkészítése a referencia videóimban
											látott megoldásokkal és minőségben.
										</div>
									</li>
									<li>
										<Check className={styles.check} />
										<div>
											A szertartás felvétele egy fix
											helyre lerakott egyszerűbb kamerával
											és annak vágatlanul való átadása,
											ami azt a célt szolgálja, hogy
											legyen egy olyan felvétel is, amin
											egy az egyben vissza lehet nézni a
											szertartást.
										</div>
									</li>
								</ul>
							</div>
						</div>
					</p>
				</div>
				<BookMeForm formState={formState} setFormState={setFormState} />
			</section>
		</>
	)
}

export default BookMe
