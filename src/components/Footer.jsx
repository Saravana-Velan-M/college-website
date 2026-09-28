import { Link } from 'react-router-dom'
import { COLLEGE } from '../data'
import { telHref } from '../utils'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <h3>{COLLEGE.fullName}</h3>
            <p>{COLLEGE.address}</p>
            <p>
              {COLLEGE.phones.map((p, i) => (
                <span key={p}>{i > 0 ? ', ' : ''}<a href={telHref(p)}>{p}</a></span>
              ))}
            </p>
            <p className="kural-foot" lang="ta">கற்க கசடறக் கற்பவை கற்றபின்<br/>நிற்க அதற்குத் தக <span>திருக்குறள் 391</span></p>
          </div>
          <div className='explore'>
            <h3>Explore</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/programmes">Course</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
              <li><Link to="/campus">Campus</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div className='links'>
            <h3>Links</h3>
            <ul>
              <li><a href="https://www.gascnemmeli.in/nirf/8" target="_blank" rel="noopener noreferrer">NIRF 2026</a></li>
              <li><a href="https://www.gascnemmeli.in/nirf/7" target="_blank" rel="noopener noreferrer">NIRF 2024</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <p className="legal">&copy; {new Date().getFullYear()} {COLLEGE.fullName}. All rights reserved.</p>
      </div>
    </footer>
  )
}
