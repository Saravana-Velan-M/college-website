
import { Link } from 'react-router-dom'
import { COLLEGE, HERO_SLIDES } from '../data'

export default function Hero() {

	return (
		<section
			className="hero"
		>
			<div className="slides" >
				{HERO_SLIDES.map((s) => (
					<figure
						className="slide"
						key={s.caption}

					>
						<img src={s.image} alt={s.alt} />
					</figure>
				))}
			</div>
			<div className="hero-overlay" />

			<div className="wrap hero-content">
				<div className="inner">
					<h1>Learn well.<br />Then live by it.</h1>
					<p className="kural" lang="ta">
						கற்க கசடறக் கற்பவை கற்றபின்<br />நிற்க அதற்குத் தக<span>திருக்குறள் 391</span>
					</p>
					<p className="lede">
						{COLLEGE.fullName}, is affiliated to the {COLLEGE.affiliation} and offers undergraduate and postgraduate
						programmes in Tamil, Historical Studies, Commerce and Computer Applications.
					</p>
					<div className="actions">
						<Link className="btn btn-primary" to="/programmes">Explore Course</Link>
						<Link className="btn btn-ghost" to="/gallery">See the campus</Link>
					</div>
				</div>
			</div>

		</section>
	)
}
