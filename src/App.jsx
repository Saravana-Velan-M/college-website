import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { COLLEGE } from './data'

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Programmes from './components/Programmes'
import Faculty from './components/Faculty'
import Campus from './components/Campus'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Contact from './components/Contact'

export default function App() {
	useEffect(() => {
		document.title = `${COLLEGE.fullName} `
	}, [])

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="programmes" element={<Programmes />} />
				<Route path="faculty" element={<Faculty />} />
				<Route path="campus" element={<Campus />} />
				<Route path="gallery" element={<Gallery />} />
				<Route path="events" element={<Events />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
	)
}
