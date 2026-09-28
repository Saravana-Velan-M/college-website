import { Link } from 'react-router-dom'
import { NOTICES, QUICK_LINKS } from '../data'
import { placeholderClick } from '../utils'

export default function Notices() {
	return (
		<section className="section" id="notices">
			<div className="wrap notice-grid">
				<aside className="board" aria-labelledby="boardTitle">
					<header>
						<h2 id="boardTitle">Notice board</h2>
						<span>Latest notices</span>
					</header>
					<ol>
						{NOTICES.map((n) => (
							<li key={n.title}>
								<div className="date">
									<b>{n.day}</b>
									<small>{n.month}</small>
								</div>
								<div className="item">
									<a href="#" onClick={placeholderClick}>{n.title}</a>
									<span className="tag">{n.tag}</span>
								</div>
							</li>
						))}
					</ol>
					<footer>
						{/* <a href="#" onClick={placeholderClick}>See all notices</a> */}
					</footer>
				</aside>

				<nav aria-label="Quick links">
					<h2 className="quick-title">Quick links</h2>
					<ul className="quick-list">
						{QUICK_LINKS.map((q) => (
							<li key={q.title}>
								{q.external ? (
									<a href={q.href} target="_blank" rel="noopener noreferrer">
										<b>{q.title}</b>
										<small>{q.text}</small>
									</a>
								) : q.href === '#' ? (
									<a href={q.href} onClick={placeholderClick}>
										<b>{q.title}</b>
										<small>{q.text}</small>
									</a>
								) : (
									<Link to={q.href}>
										<b>{q.title}</b>
										<small>{q.text}</small>
									</Link>
								)}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</section>
	)
}
