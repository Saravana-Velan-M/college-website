import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { COLLEGE, IMAGES, NAV_LINKS } from '../data'

export default function Header() {
	const [open, setOpen] = useState(false)

	return (
		<header className="site-header">
			<div className="wrap">
				{/* Left: college logo and name */}
				<Link className="brand" to="/" aria-label={`${COLLEGE.fullName}, home`}>
					<img className="logo-img" src={IMAGES.logo} alt="college logo"/>
					<span>
						<span className="name">{COLLEGE.name}</span>
						<span className="since">{COLLEGE.place}, {COLLEGE.district}</span>
					</span>
				</Link>

				<nav className={`nav${open ? ' open' : ''}`} id="nav" aria-label="Main">
					<ul>
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<NavLink to={link.href} onClick={() => setOpen(false)}>{link.label}</NavLink>
							</li>
						))}
					</ul>
				</nav>

				{/* Right: Government of Tamil Nadu logo */}
				<div className="header-right">
					<div className="govt">
						<img src={IMAGES.govtLogo} alt="Government of Tamil Nadu" />
						<span lang="ta">தமிழ்நாடு அரசு</span>
					</div>
					<button
						className="menu-btn"
						type="button"
						aria-expanded={open}
						aria-controls="nav"
						onClick={() => setOpen((o) => !o)}
					>
						Menu
					</button>
				</div>
			</div>
		</header>
	)
}
