import {animate} from "./helper"

const menu = () => {
    let links = document.querySelectorAll('.top-menu > ul> li > a');
    const menuBtn = document.querySelector('.mob-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('ul > li > a');
    const menuClose = document.querySelector('.mobile-menu-close');

    links = [...links, ...mobileLinks]

    const myanimateClose = () => {
        animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    mobileMenu.style.right = -400 + 'px';
                }
            });
    };

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mob-menu-btn')) {
            myanimateClose();
        }
    })

    menuBtn.addEventListener('click', () => {
        animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    mobileMenu.style.right = progress * 0 + 'px';
                }
            });
    })

    menuClose.addEventListener('click', () => {
        myanimateClose();
    })

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (e.target.matches('a')) {
               myanimateClose()
            }
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        })
    })
};

export default menu