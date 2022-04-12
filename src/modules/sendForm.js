const sendForm = () => {
    const form = document.querySelector('form');
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо!Наш менеджер с вами свяжется.'
    
    const validate = (list) => {
        let success = true;

        // list.forEach(input => {
        //     if(input.name === "fio" && (/[^а-яА-Я ]/g.test(input.value) || input.value.length < 2)){
        //         alert("Правильно введите имя");
        //     success = false;
        //     }
      
        //     if (input.name === "tel" && (!(/^[\+]{1}([0-9]{11})+$/g.test(input.value)) || input.value === "")){
        //         alert("Правильно введите телефон");
        //     success = false;
        //     }
        // })

        return success
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/pdffd', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
        }).then(res => res.json())
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        statusBlock.textContent = loadText;
        form.append(statusBlock)

        const formElems = form.querySelectorAll('.form-control');

        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        if (validate(formElems)) {
            sendData(formBody).then(data => {
                formElems.forEach(input => {
                    input.value = ''
                })
            }).catch(error => {
                statusBlock.textContent = errorText
                setTimeout(() => {
                    form.removeChild(statusBlock);
                }, 5000);
            })
        } else {
            alert('1')
        } 

    }) 


};

export default sendForm
