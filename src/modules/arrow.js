const arrow = () => {
    const arrow = document.querySelector('.up');
    const header = document.querySelector('.header-push');


    document.addEventListener('scroll', () => {
        arrow.style.position = 'relative';

        if (document.documentElement.scrollTop >= 576) {
            arrow.style.position = 'fixed';
        }

        arrow.addEventListener('click', () => {
            header.scrollIntoView({block: "start", behavior: "smooth"});
        })

    })

};

export default arrow;
