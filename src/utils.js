// Stops "#" placeholder links from jumping to the top of the page.
export const placeholderClick = (e) => {
    e.preventDefault()
    alert("backend")
}

// 044-27444040 -> tel:+914427444040
export const telHref = (phone) => 'tel:+91' + phone.replace(/\D/g, '').replace(/^0/, '')
