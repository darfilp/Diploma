const slider = () => {
    const slider = document.querySelector('.top-slider');
    const sliders = document.querySelectorAll('.top-slider > .item');
    const text = document.querySelectorAll('.table');
    let currentSlide = 0;

    const prevSlide = () => {
        sliders[currentSlide].style.display = 'none';
    };

    const nextSlide = () => {
        sliders[currentSlide].style.display = '';
    };

    text[0].style.opacity = 1;
    text[0].style.visibility = 'visible';

    const autoSlide = () => {
        text[currentSlide].style.opacity = 0;
        text[currentSlide].style.visibility = 'hidden';

        prevSlide();
        
        currentSlide++;

        if (currentSlide >= sliders.length) {
            currentSlide = 0;
        }

        nextSlide();

        text[currentSlide].style.opacity = 1;
        text[currentSlide].style.visibility = 'visible';
    };

    const startSlide = () => {
        setInterval(autoSlide, 3000)
    };

    startSlide()

    // text[0].style.opacity = 1;
    // text[0].style.visibility = 'visible';


    // const showSlider = () => {
    //     text[currentSlide + 1].style.opacity = 1;
    //     text[currentSlide + 1].style.visibility = 'visible';

    //     sliders[currentSlide].style.display = "none";
        

    //     currentSlide++
    //     console.log(currentSlide)

    //     if (currentSlide >= sliders.length) {
    //         currentSlide = 0;
    //         sliders.forEach(slider => {
    //             slider.style.display = '';
    //         })
    //     }
    // };

    // const autoSlider = () => {
    //     //setInterval(showSlider, 3000)
    // };

    // autoSlider();

};

export default slider