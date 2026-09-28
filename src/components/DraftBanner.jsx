import { useState } from 'react'

// Delete this component (and its line in App.jsx) when the real content is in place.
export default function DraftBanner() {
	const [open, setOpen] = useState(true)
	if (!open) return null

	return (
		<div className="draft">
			<div className="wrap">
				<span>Draft preview. Notices and events are sample content, and the photos are placeholders.</span>
				<button type="button" onClick={() => setOpen(false)}>Dismiss</button>
			</div>
		</div>
	)
}
