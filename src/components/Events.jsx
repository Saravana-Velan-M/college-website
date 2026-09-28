import { EVENTS } from '../data'

export default function Events() {
	return (
		<section className="section" id="events">
			<div className="wrap">
				<h2 className="section-title">Coming up on campus</h2>
				<p className="intro">Events open to all students, and to visitors where mentioned.</p>
				<ul className="events">
					{EVENTS.map((e) => (
						<li key={e.title}>
							<div className="date"><b>{e.day}</b><small>{e.month}</small></div>
							<div>
								<h3>{e.title}</h3>
								<p>{e.text}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
