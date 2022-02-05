import { toast } from 'react-toastify'

const sendBookingEmail = async ({
	bride,
	groom,
	email,
	phone,
	date,
	location,
	option,
	message,
}) => {
	const res = await fetch('/api/sendgrid', {
		body: JSON.stringify({
			to: 'email@nagygergely.info',
			from: {
				name: name,
				email: 'email@nagygergely.info',
			},
			subject: 'Új árajánlat kérés!',
			message: `
                <h1>Árajánlat kérés tartalma:</h1>
                <p>
                    <strong>Menyasszony neve:</strong> ${bride}<br />
                    <strong>Vőlegény neve:</strong> ${groom}<br />
                    <strong>E-mail:</strong> ${email}<br />
                    <strong>Telefon:</strong> ${phone}<br />
                    <strong>Dátum:</strong> ${date}<br />
                    <strong>Helyszín:</strong> ${location}<br />
                    <strong>Csomag:</strong> ${option}<br />
                    <strong>Üzenet:</strong> ${message}<br />
                </p>
                <h3>Vedd fel a kapcsolatot vele!</h3>
            `,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
	})

	const { error } = await res.json()
	if (error) {
		toast(error, { type: 'error' })
		console.log(error)
		return
	}

	toast.success('Árajánlat kérésed elküldve! Hamarosan jelentkezem!')
}

export default sendBookingEmail
