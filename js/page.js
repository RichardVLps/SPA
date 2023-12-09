const classMap = {
    '/': 'bg-home',
    '/universe': 'bg-universe',
    '/exploration': 'bg-exploration'
}

const links = document.querySelectorAll('.nav-link')
const body = document.querySelector('body')

function setInitialState() {

    const {pathname} = window.location

    links.forEach(link => {
        const href = link.getAttribute('href');
        const isSelected = href === pathname

        if (isSelected) {
            link.classList.add('selected')
            body.className = classMap[href]
        } else {
            link.classList.remove('selected')
        }
    })
}

window.addEventListener('load', setInitialState)

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault()

        links.forEach(l => l.classList.remove('selected'))
        link.classList.add('selected')

        const href = link.getAttribute('href')

        body.className = classMap[href]
    })
})

window.addEventListener('popstate', setInitialState)
