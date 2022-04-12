const menu = () => {
    const links = document.querySelectorAll('.top-menu > ul> li > a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        })
    })
};

export default menu