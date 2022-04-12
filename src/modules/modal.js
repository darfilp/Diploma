const modal = () => {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal-callback');
    let callbackBtns = document.querySelectorAll('.callback-btn');
    const btnServises = document.querySelector('.button-services');
    const orderBtns = document.querySelectorAll('.services-carousel > div > div > .img-wrapper');
    const swiperSlider = document.querySelectorAll('.services-carousel > .swiper-slide');


    callbackBtns = [...callbackBtns, btnServises, ...swiperSlider];
    
    orderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log(12)
        })
    })


    document.addEventListener('click', (e) => {
            if (e.target.closest('.modal-overlay') || e.target.closest('.modal-close')) {
            modal.style.display = "none";
            modalOverlay.style.display = "none";
        }
    })

    const showModal = () => {
        modal.style.display = "block";
        modalOverlay.style.display = "block";
    };


    callbackBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // console.log(e.target)
            // console.log(btn)
            showModal();
        })
    })


};

export default modal