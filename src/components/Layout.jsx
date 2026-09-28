import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import DraftBanner from './DraftBanner'
import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
	// The programme picked on the Programmes page is carried into the Contact page.
	const [programme, setProgramme] = useState('')
	const location = useLocation()

	// Scroll to top whenever the route changes, since pages are now separate.
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])

	return (
		<>
			{/* <a className="skip" href="#main">Skip to main content</a> */}
			{/* <DraftBanner /> */}
			<TopBar />	
			<Header />
			<main id="main">
				<Outlet context={{ programme, setProgramme }} />
			</main>
			<Footer />
		</>
	)
}
