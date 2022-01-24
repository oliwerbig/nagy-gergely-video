import { toast } from 'react-toastify'

const sendBookingEmailToClient = async ({
	name,
	email,
	phone,
	date,
	location,
	option,
	message,
}) => {
	const res = await fetch('/api/sendgrid', {
		body: JSON.stringify({
			to: email,
			from: {
				name: 'Nagy Gergely',
				email: 'email@nagygergely.info',
			},
			subject: 'Árajánlat kérés elküldve!',
			message: `
                <h1>Árajánlat kérésed tartalma:</h1>
                <p>
                    <strong>Név:</strong> ${name}<br />
                    <strong>E-mail:</strong> ${email}<br />
                    <strong>Telefon:</strong> ${phone}<br />
                    <strong>Dátum:</strong> ${date}<br />
                    <strong>Helyszín:</strong> ${location}<br />
                    <strong>Csomag:</strong> ${option}<br />
                    <strong>Üzenet:</strong> ${message}<br />
                </p>
                <h3>Köszönöm, hogy árajánlatot kértél, hamarosan jelentkezem!</h3>
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
}

export default sendBookingEmailToClient
