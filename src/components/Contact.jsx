import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { COLLEGE, PROGRAMMES } from '../data'
import { telHref } from '../utils'

export default function Contact() {
	const { programme, setProgramme } = useOutletContext()
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [note, setNote] = useState('')
	const hasEmail = Boolean(COLLEGE.email)

	function handleSubmit(e) {
		e.preventDefault()
		if (!name.trim() || !phone.trim()) {
			setNote('Please enter your name and phone number.')
			return
		}
		const subject = 'Admission enquiry' + (programme ? `: ${programme}` : '')
		const body =
			`Name: ${name.trim()}\nPhone: ${phone.trim()}` +
			(programme ? `\nProgramme: ${programme}` : '') +
			(message.trim() ? `\n\n${message.trim()}` : '')
		setNote(`Your email app should open with the enquiry filled in. If it does not, write to ${COLLEGE.email}.`)
		window.location.href = `mailto:${COLLEGE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
	}

	return (
		<section className="section alt" id="contact">
			<div className="wrap contact-grid">
				<div>
					<h2 className="section-title">Contact us</h2>
					<p className="intro">Call or visit the college office for admission dates, eligibility and fee details.</p>
					<dl className="contact-list">
						<div><dt>Address</dt><dd>{COLLEGE.fullName}, {COLLEGE.address}</dd></div>
						<div>
							<dt>Phone</dt>
							<dd className="phone-list">
								{COLLEGE.phones.map((p) => (
									<a key={p} href={telHref(p)}>{p}</a>
								))}
							</dd>
						</div>
						{hasEmail && <div><dt>Email</dt><dd><a href={`mailto:${COLLEGE.email}`}>{COLLEGE.email}</a></dd></div>}
						{COLLEGE.officeHours && <div><dt>Office hours</dt><dd>{COLLEGE.officeHours}</dd></div>}
					</dl>
				</div>

				{hasEmail ? (
					<form className="enquiry" onSubmit={handleSubmit} noValidate>
						<h3>Send an enquiry</h3>
						<div className="row2">
							<div className="field">
								<label htmlFor="fName">Your name</label>
								<input id="fName" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required />
							</div>
							<div className="field">
								<label htmlFor="fPhone">Phone number</label>
								<input id="fPhone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
							</div>
						</div>
						<div className="field">
							<label htmlFor="fProg">Programme you are interested in</label>
							<select id="fProg" value={programme} onChange={(e) => setProgramme(e.target.value)}>
								<option value="">Select a programme</option>
								{PROGRAMMES.map((p) => (
									<option key={p.name} value={p.name}>{p.name}</option>
								))}
							</select>
						</div>
						<div className="field">
							<label htmlFor="fMsg">Message</label>
							<textarea id="fMsg" value={message} onChange={(e) => setMessage(e.target.value)} />
						</div>
						<button className="btn btn-primary" type="submit">Send enquiry</button>
						<p className="form-note" role="status">{note}</p>
					</form>
				) : (
					<div className="call-panel">
						<h3>Call the college office</h3>
						<p>
							{programme ? `You were looking at ${programme}. ` : ''}
							Ask about admission dates, eligibility and fees for any programme.
						</p>
						<div className="call-actions">
							{COLLEGE.phones.map((p) => (
								<a key={p} className="btn btn-primary" href={telHref(p)}>{p}</a>
							))}
						</div>
						<p className="panel-note">{COLLEGE.address}</p>
					</div>
				)}
			</div>

			<div className="wrap map-block">
				<iframe
					className="map-frame"
					title={`Map showing ${COLLEGE.fullName}`}
					src={COLLEGE.mapEmbed}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					allowFullScreen
				/>
				<a className="map-link" href={COLLEGE.mapLink} target="_blank" rel="noopener noreferrer">
					View larger map
				</a>
			</div>
		</section>
	)
}
