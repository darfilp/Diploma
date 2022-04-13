const slider = () => {
    const slider = document.querySelector('.top-slider');
    const sliders = document.querySelectorAll('.top-slider > .item');
    const text = document.querySelectorAll('.table');
    let currentSlide = 0;
    let idInterval;


    let num = sliders.length;

    const dotWrapper = document.createElement('ul');
    dotWrapper.classList.add('slick-dots');

    sliders.forEach(slid => {
        const dot = document.createElement('li');
        dotWrapper.append(dot)
    });

    slider.append(dotWrapper)

    const prevSlide = () => {
        sliders[currentSlide].style.display = 'none';
    };

    const nextSlide = () => {
        sliders[currentSlide].style.display = '';
    };

    const stopSlide = () => {
        clearInterval(idInterval);
    }

    const dots = document.querySelectorAll('.slick-dots > li');

    text[0].style.opacity = 1;
    text[0].style.visibility = 'visible';
    dots[0].classList.add('slick-active')

    const autoSlide = () => {

        if (dots[currentSlide].classList.contains('slick-active')) {
            dots[currentSlide].classList.remove('slick-active')
        }

        text[currentSlide].style.opacity = 0;
        text[currentSlide].style.visibility = 'hidden';

        prevSlide();
        
        
        currentSlide++;

        if (currentSlide >= sliders.length) {
            currentSlide = 0;
        }

        nextSlide();
        dots[currentSlide].classList.add('slick-active')
        text[currentSlide].style.opacity = 1;
        text[currentSlide].style.visibility = 'visible';
    };

    const startSlide = () => {
        idInterval = setInterval(autoSlide, 3000)
    };

    slider.addEventListener('click', (e) => {

        if (!e.target.matches('li')) {
            return
        }

        if (dots[currentSlide].classList.contains('slick-active')) {
            dots[currentSlide].classList.remove('slick-active')
        }

        text[currentSlide].style.opacity = 0;
        text[currentSlide].style.visibility = 'hidden';

        prevSlide();

        if (e.target.matches('li')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= sliders.length) {
            currentSlide = 0;
        }

        nextSlide();
        dots[currentSlide].classList.add('slick-active')
        text[currentSlide].style.opacity = 1;
        text[currentSlide].style.visibility = 'visible';
        
    })

    slider.addEventListener('mouseenter', (e) => {
        if (e.target.matches('li')) {
            stopSlide()
        }
    }, true);

    slider.addEventListener('mouseleave', (e) => {
        if (e.target.matches('li')) {
            startSlide();
        }
    }, true);

    startSlide()
};


export default slider