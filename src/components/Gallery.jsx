import { useEffect, useRef, useState } from 'react'
import { GALLERY } from '../data'

export default function Gallery() {
	const [open, setOpen] = useState(null) // index of the photo shown large, or null
	const closeBtn = useRef(null)
	const lastTile = useRef(null)
	const n = GALLERY.length
	const isOpen = open !== null

	useEffect(() => {
		if (!isOpen) return
		const onKey = (e) => {
			if (e.key === 'Escape') setOpen(null)
			if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % n)
			if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + n) % n)
		}
		document.addEventListener('keydown', onKey)
		const previousOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		closeBtn.current?.focus()
		return () => {
			document.removeEventListener('keydown', onKey)
			document.body.style.overflow = previousOverflow
			lastTile.current?.focus()
		}
	}, [isOpen, n])

	return (
		<section className="section alt" id="gallery">
			<div className="wrap">
				<h2 className="section-title">Gallery</h2>
				<p className="intro">Photos from around the campus. Click a photo to see it larger.</p>

				<ul className="gallery-grid">
					{GALLERY.map((g, i) => (
						<li key={g.caption}>
							<button
								type="button"
								className="tile"
								onClick={(e) => {
									lastTile.current = e.currentTarget
									setOpen(i)
								}}
							>
								<img src={g.image} alt={g.caption} loading="lazy" />
								{/* <span>{g.caption}</span> */}
							</button>
						</li>
					))}
				</ul>
			</div>

			{isOpen && (
				<div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setOpen(null)}>
					<figure onClick={(e) => e.stopPropagation()}>
						<img src={GALLERY[open].image} alt={GALLERY[open].caption} />
						{/* <figcaption>{GALLERY[open].caption} ({open + 1} of {n})</figcaption> */}
					</figure>
					<button ref={closeBtn} type="button" className="lb-btn lb-close" aria-label="Close" onClick={(e) => { e.stopPropagation(); setOpen(null) }}>
						<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
					</button>
					<button type="button" className="lb-btn lb-prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); setOpen((i) => (i - 1 + n) % n) }}>
						<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
					</button>
					<button type="button" className="lb-btn lb-next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); setOpen((i) => (i + 1) % n) }}>
						<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
					</button>
				</div>
			)}
		</section>
	)
}
