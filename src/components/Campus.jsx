import { FACILITIES } from '../data'

export default function Campus() {
	return (
		<section className="section" id="campus">
			<div className="wrap">
				<h2 className="section-title">Campus and facilities</h2>
				<p className="intro">Everything a student needs during the day is on campus.</p>
				<ul className="facilities">
					{FACILITIES.map((f) => (
						<li key={f.title}>
							<h3>{f.title}</h3>
							<p>{f.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
