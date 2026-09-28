/* =========================================================
   ALL THE CONTENT OF THE WEBSITE IS IN THIS ONE FILE.
   Change the text here and the whole site updates.

   ========================================================= */

import collegeLogo from './assets/college-logo.png'
import govtLogo from './assets/govt-logo.png'
import hero1 from './assets/hero/hero-1.jpg'
import gallery1 from './assets/gallery/main block.jpeg'
import gallery2 from './assets/gallery/sports.jpg'
import gallery3 from './assets/gallery/auditorium.jpg'
import gallery4 from './assets/gallery/auditorium1.jpg'
import gallery5 from './assets/gallery/gallery-5.svg'
import gallery6 from './assets/gallery/gallery-6.svg'
import gallery7 from './assets/gallery/gallery-7.svg'
import gallery8 from './assets/gallery/gallery-8.svg'
import faculty1 from './assets/faculty/faculty-1.svg'
import faculty2 from './assets/faculty/faculty-2.svg'
import faculty3 from './assets/faculty/faculty-3.svg'
import faculty4 from './assets/faculty/faculty-4.svg'
import faculty5 from './assets/faculty/faculty-5.svg'
import faculty6 from './assets/faculty/faculty-6.svg'
import faculty7 from './assets/faculty/faculty-7.svg'
import faculty8 from './assets/faculty/faculty-8.svg'

/* ---------- 1. College details ---------- */
export const COLLEGE = {
	name: 'Government Arts and Science College',
	place: 'Nemmeli',
	district: 'Chengalpattu',
	since: '2011', // as written on the college website: please confirm
	address: 'East Coast Road, Nemmeli, Chengalpattu District, Tamil Nadu 603 104',
	phones: ['044-27444040', '044-27444041'],
	// The college website only shows a placeholder email (contact@yourdomain.com).
	// Put the real email here. Until then the enquiry form is hidden and the
	// Contact section shows the phone numbers instead.
	email: 'uccnemmeli@gmail.com',
	officeHours: '', // add if you know them, for example 'Monday to Friday, 9:30 am to 4:30 pm'
	affiliation: 'University of Madras',
	website: 'https://www.gascnemmeli.in',
	mapLink: 'https://www.google.com/maps/place/Government+Arts+and+Science+College/@12.722233,80.2260997,17z/data=!4m6!3m5!1s0x3a5253d5d88a3efb:0x9417fa1979db1df3!8m2!3d12.7222338!4d80.227633!16s%2Fg%2F11b7g47y1t?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D',
	// Embedded map (taken from the Contact page of the college website)
	mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.864843150889!2d80.22505807585475!3d12.72223902029472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5253d5d88a3efb%3A0x9417fa1979db1df3!2sGovernment%20Arts%20and%20Science%20College!5e0!3m2!1sen!2sin!4v1716371081954!5m2!1sen!2sin',
	// Optional short message from the principal. Leave empty to hide it.
	principalMessage: '',
}
COLLEGE.fullName = `${COLLEGE.name}, ${COLLEGE.place}`

/* ---------- 2. Images ----------
   All images here are PLACEHOLDER drawings. To use real photos: put the
   file in src/assets, import it at the top of this file, and use it here.
   See README.md for the exact links on the college site. */
export const IMAGES = {
	logo: collegeLogo,     // college logo (top left of the header)
	govtLogo: govtLogo,    // Tamil Nadu Government logo (top right of the header)
}

/* Home page slideshow: wide photos (about 1600 x 640) work best.
   Keep the main building on the RIGHT half, because the text sits on the left. */
export const HERO_SLIDES = [
	{ image: hero1, alt: 'Main block of the college', caption: 'Main block' },
	
]

/* ---------- Gallery (SAMPLE images) ---------- */
export const GALLERY = [
	{ image: gallery1, caption: 'Main block' },
	{ image: gallery2, caption: 'Library' },
	{ image: gallery3, caption: 'Computer lab' },
	{ image: gallery4, caption: 'Classroom' },
	{ image: gallery5, caption: 'Sports ground' },
	{ image: gallery6, caption: 'Annual day' },
	{ image: gallery7, caption: 'Campus avenue' },
	{ image: gallery8, caption: 'Main gate' },
]

/* ---------- 3. Menu ---------- */
export const NAV_LINKS = [
	{ label: 'About', href: '/about' },
	{ label: 'Course', href: '/programmes' },
	{ label: 'Faculty', href: '/faculty' },
	{ label: 'Campus', href: '/campus' },
	{ label: 'Gallery', href: '/gallery' },
	{ label: 'Events', href: '/events' },
	{ label: 'Contact', href: '/contact' },
]

/* ---------- 4. Notice board (SAMPLE: the college site has no notices yet) ---------- */
export const NOTICES = [
	{ day: '28', month: 'Sep', tag: 'Exams', title: 'Internal assessment 1 timetable published for all departments' },
	{ day: '03', month: 'Oct', tag: 'Students', title: 'Last date to submit scholarship application forms' },
	{ day: '10', month: 'Oct', tag: 'Events', title: 'Inauguration of the Tamil literary association' },
	{ day: '14', month: 'Oct', tag: 'Library', title: 'Book exchange week for all departments' },
]
	
/* ---------- 5. Quick links ----------
   external: true opens in a new tab. Use href '#' for a link that is not ready yet. */
export const QUICK_LINKS = [
	{ title: 'NIRF 2026', text: 'Ranking data (PDF)', href: 'https://www.gascnemmeli.in/uploads/nirf/nirf2026.pdf', external: true },
	{ title: 'NIRF 2024', text: 'Ranking data (PDF)', href: 'https://www.gascnemmeli.in/uploads/nirf/nirf2024.pdf', external: true },
	{ title: 'Course', text: 'UG and PG courses', href: '/programmes' },
	{ title: 'Faculty', text: 'Meet our teachers', href: '/faculty' },
	{ title: 'Gallery', text: 'Photos of the campus', href: '/gallery' },
	{ title: 'Contact', text: 'Address and phone', href: '/contact' },
]

/* ---------- 6. About: facts ---------- */
export const FACTS = [
	{ label: 'Established', value: COLLEGE.since },
	{ label: 'Affiliated to', value: COLLEGE.affiliation },
	{ label: 'Type', value: 'Government college' },
	{ label: 'Programmes', value: '5 UG and 2 PG' },
	{ label: 'Mode of study', value: 'Full time' },
	{ label: 'Location', value: `${COLLEGE.place}, ${COLLEGE.district} district` },
]

/* ---------- 7. Programmes (real courses from the college website) ---------- */
export const PROGRAMMES = [
	{
		group: 'Undergraduate',
		name: 'B.A (Tamil)',
		department: 'Tamil',
		duration: '3 years',
		fee: 'As per Government',
		mode: 'Full time',
		about: 'The BA Tamil curriculum is divided into three years and six semesters. The curriculum includes both core and elective subjects. The syllabus is designed with the goal of ensuring that students understand the concepts related to the Tamil language as well as the grammar.',
	},
	{
		group: 'Undergraduate',
		name: 'B.A (Historical Studies)',
		department: 'Historical Studies',
		duration: '3 years',
		fee: 'As per Government',
		mode: 'Full time',
		about: "The aim of the historical studies department is to promote the students both in history and knowledge in the broad view for analytical skills. It opens for student's level to gain and understand the global matters.",
	},
	{
		group: 'Undergraduate',
		name: 'B.Com (Commerce)',
		department: 'Commerce',
		duration: '3 years',
		fee: 'As per Government',
		mode: 'Full time',
		about: 'B.Com is a three-year undergraduate degree program. The course allows students to gain a wide variety of skills in the commerce and trade domain. Students learn a plethora of business skills while building competence in the same.',
	},
	{
		group: 'Undergraduate',
		name: 'B.Com (Computer Application)',
		department: '',
		duration: '3 years',
		fee: 'As per Government',
		mode: 'Full time',
		about: "B.Com Computers is a 3-year bachelor's degree course that provides students with an in-depth understanding of computer programming, applications, software development along with business management. This course is mainly for students who have an aptitude for computer programming and an interest in commerce.",
	},
	{
		group: 'Undergraduate',
		name: 'B.C.A (Bachelor of Computer Application)',
		department: 'BCA',
		duration: '3 years',
		fee: 'As per Government',
		mode: 'Full time',
		about: 'The BCA course offers students a comprehensive education in various IT skills, fostering proficiency in programming languages like C, C++, Java, Python, database management systems (DBMS), operating systems (Windows, Linux), computer networks and security, software development methodologies, and web development.',
	},
	{
		group: 'Postgraduate',
		name: 'M.A (Tamil)',
		department: 'Tamil',
		duration: '2 years',
		fee: 'As per Government',
		mode: 'Full time',
		about: "MA Tamil is a Tamil Literature and Language course that students can pursue if they want to take up post-graduation after completing their graduation. Students will have to complete their bachelor's degree in the relevant field and the duration of the course is two years.",
	},
	{
		group: 'Postgraduate',
		name: 'M.Com (Commerce)',
		department: 'Commerce',
		duration: '2 years',
		fee: 'As per Government',
		mode: 'Full time',
		about: "Master of Commerce is a postgraduate master's degree focusing on commerce, accounting, business administration, management and economics related subjects.",
	},
]

/* ---------- 8. Faculty (real names and degrees from the college website) ----------
   photo: the college site has only one real photo (the Principal). Replace
   each placeholder with the real photo. See README.md. */
export const FACULTY = [
	{ name: 'Dr. S. Kalavathi', degree: 'M.A., M.Phil., Ph.D.', role: 'Principal', department: 'Sociology', photo: faculty1 },
	{ name: 'Dr. R. Morris Joy', degree: 'M.A., Ph.D., NET', role: 'HOD', department: 'Tamil', photo: faculty2 },
	{ name: 'Prof. M. Kumarasami', degree: 'M.A., M.Phil., (Ph.D.), NET', role: 'HOD', department: 'Historical Studies', photo: faculty3 },
	{ name: 'Dr. K. Kathiravan', degree: 'M.A., M.Phil., Ph.D.', role: 'Guest Lecturer', department: 'Tamil', photo: faculty4 },
	{ name: 'Dr. M. Veni', degree: 'M.Com., MBA., M.Phil., Ph.D.', role: 'HOD and Guest Lecturer', department: 'Commerce', photo: faculty5 },
	{ name: 'Dr. E. Elumalai', degree: 'M.A., M.Phil., Ph.D., SET', role: 'Guest Lecturer', department: 'Tamil', photo: faculty6 },
	{ name: 'Dr. V. Senthil Kumar', degree: 'M.C.A., M.Sc., Ph.D., NET', role: 'Guest Lecturer', department: 'BCA', photo: faculty7 },
	{ name: 'Mrs. D.K. Priya', degree: 'M.C.A., M.Phil., (Ph.D.), SET', role: 'HOD and Guest Lecturer', department: 'BCA', photo: faculty8 },
]

/* ---------- 9. Campus facilities (listed on the college website) ---------- */
export const FACILITIES = [
	{ title: 'Library', text: 'A library for students to read, borrow and study.' },
	{ title: 'Laboratories', text: 'Labs for practical work, including the computer applications programmes.' },
	{ title: 'Auditorium', text: 'A hall for seminars, functions and college events.' },
	{ title: 'Hostel', text: 'Hostel accommodation for students.' },
	{ title: 'Canteen', text: 'A canteen on campus for students and staff.' },
	
	
]

/* ---------- 10. Events (SAMPLE: the college site lists only Sports Day 2024) ---------- */
export const EVENTS = [
	{ day: '24', month: 'Oct', title: 'Sports day', text: 'Track and field events and team games between departments.' },
	{ day: '12', month: 'Nov', title: 'Tamil literary association function', text: 'Speeches, poetry and a debate. Open to all students.' },
	{ day: '19', month: 'Dec', title: 'Annual day', text: 'Prize distribution and cultural programmes.' },
]
