const accordeon = () => {
    const accordeons = document.querySelectorAll('.accordeon > .element');
    const desc = document.querySelector('.element-content');


    accordeons.forEach((accordeon, index) => {
        accordeon.addEventListener('click', (e) => {

            accordeons.forEach(accordeon => {
                accordeon.classList.remove('active');
                accordeon.querySelector('.element-content').style.display = 'none';
            });

            accordeon.classList.add('active');
            accordeon.querySelector('.element-content').style.display = 'block';

        })


        
    })
    

};

export default accordeon
