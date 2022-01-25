import React, { FC } from 'react'
import BookMeOptions from './BookMeOptions'
import styles from './MyPrices.module.scss'

interface Props {
	formState: any
	setFormState: (formState: any) => void
}
const MyPrices: FC<Props> = ({ formState, setFormState }) => {
	return (
		<section id='myPrices'>
			<section className={styles.section}>
				<h1 className={styles.title}>Irányadó áraim</h1>
				<BookMeOptions
					formState={formState}
					setFormState={setFormState}
				/>
				<p className={styles.furtherPrices}>
					Egyéb költségek:{' '}
					<ul>
						<li>Budapesten kívül 80 Ft / km</li>
						<li>
							100 km és 6 óra rendelkezésre állás felett szállás
							biztosítása.
						</li>
						<li>
							Amennyiben ott leszek veletek a lagzin is, vacsora
							biztosítása.
						</li>
					</ul>{' '}
					Ezek a csomagok és árak irányadóak. Természetesen van
					lehetőség kiegészíteni őket extrákkal, egyéni kérésekkel.
					Lehetőség van például a szertartás alatt is drónfelvételt
					kérni vagy két profi kamerával való rögzítést és hosszú film
					összevágását is kérni. Személyre szabott kéréseket és
					árajánlatot a fentebb található űrlapot kitöltve kérhettek.
				</p>
			</section>
		</section>
	)
}

export default MyPrices
