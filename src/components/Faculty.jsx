import { FACULTY } from '../data'

export default function Faculty() {
	return (
		<section className="section alt" id="faculty">
			<div className="wrap">
				<h2 className="section-title">Our faculty</h2>
				<p className="intro">Meet the principal, heads of department and lecturers.</p>

				<ul className="faculty-grid">
					{FACULTY.map((f) => (
						<li key={f.name}>
							<img className="faculty-photo" src={f.photo} alt={`Photo of ${f.name}`} loading="lazy" />
							<h3 className="faculty-name">{f.name}</h3>
							<p className="faculty-degree">{f.degree}</p>
							<p className="faculty-role">{f.role}, Department of {f.department}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
