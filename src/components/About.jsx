import { COLLEGE, FACTS, FACULTY, IMAGES } from '../data'

export default function About() {
	const principal = FACULTY.find((f) => f.role === 'Principal')

	return (
		<section className="section alt" id="about">
			<div className="wrap about-grid">
				<div>
					<h2 className="section-title">About the college</h2>
					<p>
						{COLLEGE.fullName}, is a dream come true for many students, especially from the {COLLEGE.district} zone.
					</p>
					<p>
						The college is affiliated to the {COLLEGE.affiliation} and offers five undergraduate and two postgraduate
						programmes in full-time mode. Students have an auditorium, library, laboratories, sports complex, gym,
						hostel, cafeteria, medical facilities and a Wi-Fi campus.
					</p>

					{principal && (
						<div className="principal">
							<img src={principal.photo} alt={`Portrait of ${principal.name}`} />
							<div className="who">
								<h3>{principal.name}</h3>
								<p>{principal.degree}</p>
								<p className="role">Principal, Department of {principal.department}</p>
								{COLLEGE.principalMessage && (
									<blockquote><p>{COLLEGE.principalMessage}</p></blockquote>
								)}
							</div>
						</div>
					)}
				</div>

				<div className="glance">
					<h3>College at a glance</h3>
					<dl className="facts">
						{FACTS.map((f) => (
							<div key={f.label}>
								<dt>{f.label}</dt>
								<dd>{f.value}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	)
}
