# Government Arts and Science College, Nemmeli: website (React + Vite)

Light theme only. The content (courses, faculty, address, phone numbers) is taken from https://www.gascnemmeli.in

## Run it on your computer

1. Install Node.js (version 18 or newer) from https://nodejs.org
2. Open a terminal in this folder and run:

```
npm install
npm run dev
```

3. Open the address shown in the terminal (usually http://localhost:5173).

To make the final files for hosting: `npm run build` (the output goes to the `dist` folder).

## Where to change things

Almost everything is in ONE file: `src/data.js`

| What                                   | Where in `src/data.js` |
| -------------------------------------- | ---------------------- |
| College name, address, phones, email, map | `COLLEGE`           |
| College logo, Government logo          | `IMAGES`               |
| Home page slideshow photos             | `HERO_SLIDES`          |
| Gallery photos                         | `GALLERY`              |
| Notice board                           | `NOTICES`              |
| Quick links                            | `QUICK_LINKS`          |
| Courses                                | `PROGRAMMES`           |
| Faculty (photo, name, degree)          | `FACULTY`              |
| Campus facilities, events              | `FACILITIES`, `EVENTS` |

## Still to add (not available on the college website)

- **Government logo.** `src/assets/govt-logo.svg` is a simple placeholder, not the official emblem. Replace it with the official Tamil Nadu Government logo file (same name, or change the import in `src/data.js`).
- **Slideshow and gallery.** All the pictures are placeholder drawings. Add your own wide photos (about 1600 x 640, main building on the right half) to `HERO_SLIDES` and any photos to `GALLERY`.
- **Photos.** The images now are placeholders. Save the real ones from the college site into `src/assets`, then change the `import` lines at the top of `src/data.js`:
  - College logo: https://www.gascnemmeli.in/assets/images/logo.png (use it in `IMAGES.logo`)
  - Principal's photo: https://www.gascnemmeli.in/uploads/images/Dr.S. Kalavathi_faculty_image.png
  - A college photo for the home page: https://www.gascnemmeli.in/frontend/images/about/about-us.jpeg (or take your own; 4:3 looks best)
  - Other faculty: the college site has no photos for them yet, so take photos (4:5 portrait, for example 800 x 1000 px).
- **Email.** The college site shows only a placeholder email. When you put the real one in `COLLEGE.email`, the enquiry form appears automatically. Until then the Contact section shows the phone numbers.
- **Notices and events** are SAMPLE. The college site has no notices and only one old event (Sports Day, 2024). Replace them or delete them.
- **Established year** (`COLLEGE.since`) is 2011 as written on the college site. Please confirm.
- **Eligibility, intake and syllabus** are not on the college site, so they are not shown. Add fields to `PROGRAMMES` if you get them from the office.

## Project structure

```
src/
  App.jsx            page order
  data.js            all content
  index.css          all styling
  components/        Header, Hero, Notices, About, Programmes, Faculty, Campus, Events, Contact, Footer
  assets/            images
```

## Before submitting

- Delete the yellow "Draft preview" banner: remove `<DraftBanner />` from `src/App.jsx`.
- Replace the SAMPLE notices and events, and add the real photos.
