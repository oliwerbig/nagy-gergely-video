import { useState } from 'react'
import { toast } from 'react-toastify'
import sendBookingEmail from '../sendBookingEmail'
import sendBookingEmailToClient from '../sendBookingEmailToClient'
import styles from './BookMeForm.module.scss'

const BookMeForm = ({ formState, setFormState }) => {
	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target
		setFormState({ ...formState, [name]: value })
	}

	const validateForm = () => {
		const { name, email, phone, date, location, option, message } =
			formState
		return name && email && phone && date && location && option
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()

		if (!validateForm()) {
			toast.error('Kérlek töltsd ki a mezőket!')
		}

		sendBookingEmail(formState)
		sendBookingEmailToClient(formState)

		setFormState({
			name: '',
			email: '',
			phone: '',
			date: '',
			location: '',
			option: '',
			message: '',
		})
	}

	return (
		<form className={styles.form}>
			<h1>Ajánlatkérés</h1>
			<div className={styles.input}>
				<label>Név</label>
				<input
					required
					name='name'
					placeholder='Neved'
					type='text'
					onChange={handleChange}
					value={formState.name}
				/>
			</div>
			<div className={styles.input}>
				<label>E-mail cím</label>
				<input
					required
					name='email'
					placeholder='Email címed'
					type='text'
					onChange={handleChange}
					value={formState.email}
				/>
			</div>
			<div className={styles.input}>
				<label>Telefonszám</label>
				<input
					required
					name='phone'
					placeholder='Telefonszámod'
					type='text'
					onChange={handleChange}
					value={formState.phone}
				/>
			</div>
			<div className={styles.input}>
				<label>Dátum</label>
				<input
					required
					name='date'
					placeholder='Esküvő dátuma'
					type='date'
					onChange={handleChange}
					value={formState.date}
				/>
			</div>
			<div className={styles.input}>
				<label>Helyszín</label>
				<input
					required
					name='location'
					placeholder='Esküvő helyszíne'
					type='text'
					onChange={handleChange}
					value={formState.location}
				/>
			</div>
			<div className={`${styles.input} ${styles.optionLabel}`}>
				<label>Melyik csomag érdekelne?</label>
				<select
					name='option'
					onChange={handleChange}
					defaultValue={'---'}
					value={formState.option}>
					<option value={''} disabled={formState.option !== ''}>
						---
					</option>
					<option value='Ceremónia'>Ceremónia csomag</option>
					<option value='Highlights'>Highlights csomag</option>
					<option value='Álomvideó'>Álomvideó csomag</option>
				</select>
			</div>
			<div className={styles.input}>
				<label>
					Kérlek röviden írjátok meg, amit még tudnom kell az
					esküvőről, illetve, hogy milyen egyéb kérésetek van, amit
					nem tartalmaz a választott csomag.
				</label>
				<textarea
					name='message'
					onChange={handleChange}
					value={formState.message}
				/>
			</div>
			<button id='submit' type='button' onClick={handleSubmit}>
				Küldés
			</button>
		</form>
	)
}

export default BookMeForm
