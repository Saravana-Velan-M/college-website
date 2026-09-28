import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { COLLEGE, FACULTY, PROGRAMMES } from '../data'

export default function Programmes() {
	const { setProgramme } = useOutletContext()
	const navigate = useNavigate()
	const [index, setIndex] = useState(0)
	const p = PROGRAMMES[index]
	const groups = [...new Set(PROGRAMMES.map((x) => x.group))]
	const hod = p.department && FACULTY.find((f) => f.department === p.department && /HOD/.test(f.role))

	return (
		<section className="section" id="programmes">
			<div className="wrap">
				<h2 className="section-title">Course </h2>
				<p className="intro">Pick a course to see its duration, fee and what the course is about.</p>

				<div className="finder">
					<div className="finder-list">
						{groups.map((g) => (
							<div key={g}>
								<h3>{g}</h3>
								{PROGRAMMES.map((x, i) =>
									x.group === g ? (
										<button key={x.name} type="button" aria-current={i === index} onClick={() => setIndex(i)}>
											{x.name}
										</button>
									) : null
								)}
							</div>
						))}
					</div>

					<div className="finder-panel" aria-live="polite">
						<h3>{p.name}</h3>
						<dl className="facts3">
							<div><dt>Duration</dt><dd>{p.duration}</dd></div>
							<div><dt>Fee</dt><dd>{p.fee}</dd></div>
							<div><dt>Mode</dt><dd>{p.mode}</dd></div>
						</dl>

						<h4>About the course</h4>
						<p>{p.about}</p>

						{p.department && (
							<>
								<h4>Department</h4>
								<p>
									Department of {p.department}.{hod ? ` Head of department: ${hod.name}.` : ''}
								</p>
							</>
						)}

						<p className="panel-note">
							For eligibility and admission dates, please contact the college office on {COLLEGE.phones.join(' or ')}.
						</p>
						<p className="go">
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								setProgramme(p.name)
								navigate('/contact')
							}}
						>
							{COLLEGE.email ? 'Enquire about this Course' : 'Contact the college office'}
						</button>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
