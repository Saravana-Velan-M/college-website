import { COLLEGE } from '../data'
import { telHref } from '../utils'

export default function TopBar() {
	return (
		<div className="util">
			<div className="wrap">
				<div className="group">
					{COLLEGE.phones.map((p) => (
						<a key={p} href={telHref(p)}>+{p}</a>
					))}
					{COLLEGE.email && <a href={`mailto:${COLLEGE.email}`}>{COLLEGE.email}</a>}
				</div>
				<div className="group">
					<a href="https://www.gascnemmeli.in/nirf/8" target="_blank" rel="noopener noreferrer">NIRF 2026</a>
					<a href="https://www.gascnemmeli.in/nirf/7" target="_blank" rel="noopener noreferrer">NIRF 2024</a>
				</div>
			</div>
		</div>
	)
}
