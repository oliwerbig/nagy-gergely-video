import { FC, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import styles from './BookMe.module.scss'
import BookMeForm from './BookMeForm'
import CTA from './CTA'
import Divider from './Divider'
import MyPrices from './MyPrices'

const BookMe: FC = () => {
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
			<section id='bookMe'>
				<Divider
					videoID='NwSuTIVtjfw'
					altImageURL='/bookMe.png'
					title='Ajánlatkérés'
				/>
				<section className={styles.section}>
					<div className={styles.row}>
						<div className={styles.left}>
							<p className={styles.text}>
								Sokakat zavar, hogy rengeteg felesleges kört
								kell lefutniuk, mert nincsenek feltüntetve az
								árak a szolgáltatók weboldalain és ajánlatot
								kérve rendszeresen olyan árakkal találják
								szemben magukat a párok, amik nem felelnek meg
								az elképzeléseinek.{' '}
							</p>
							<p className={styles.text}>
								Éppen ezért lejjebb görgetve láthatjátok az alap
								ajánlataimat. Három csomag közül tudtok
								választani, amik természetesen rugalmasak. Ezek
								a csomagok, árak irányadóak, arra szolgálnak,
								hogy nagyjából tisztában legyetek azzal, hogy
								milyen árajánlattal kell számolni, ha engem
								kértek fel esküvőtök megörökítéséhez.
							</p>{' '}
							<p className={styles.text}>
								Ha megfelelnek az áraim az elképzeléseiteknek,
								akkor kérlek töltsétek ki az űrlapot és
								hamarosan jelentkezni fogok.
							</p>
							<ScrollLink
								to='myPrices'
								duration={500}
								offset={-100}
								smooth={true}>
								<CTA
									title='Milyen árakra számíthatsz?'
									down
									className={styles.cta}
								/>
							</ScrollLink>
						</div>
						<div className={styles.right}>
							<BookMeForm
								formState={formState}
								setFormState={setFormState}
							/>
						</div>
					</div>
				</section>
			</section>
			<MyPrices formState={formState} setFormState={setFormState} />
		</>
	)
}

export default BookMe
