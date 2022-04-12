const sendForm = () => {
  const form = document.querySelector('form')
  const statusBlock = document.createElement('div')
  const loadText = 'Идёт отправка...'
  const successText = 'Спасибо!Наш менеджер с вами свяжется.'
  const errorText = 'Ошибка'

  const formElements = form.querySelectorAll('input')

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json)
  }

    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            if(input.name === "fio" && (/[^а-яА-Я ]/g.test(input.value) || input.value.length < 2)){
              statusBlock.textContent = "Введите имя"
            success = false;
            }
      
            if (input.name === "tel" && (!(/^[\+]{0,1}([0-9]{7,16})$/g.test(input.value)) || input.value === "")){
              statusBlock.textContent = "Введите телефон"
            success = false;
            }
        })

        return success
    };


  const submitForm = () => {
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.textContent = loadText
    form.append(statusBlock)

    formData.forEach((value, key) => {
      formBody[key] = value
    })
    if (validate(formElements)) {
          sendData(formBody)
    .then(() => {
      statusBlock.textContent = successText
      formElements.forEach((input) => {
      if (input.name === 'tel' || input.name === 'fio') {
        input.value = ''
      }
    })
    })
    .catch(() => {
      statusBlock.textContent = errorText
    })
  }
    }

  try {
    if (!form) {
      throw new Error('Верните форму на место!!!!')
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      submitForm()
    })
  } catch (error) {
    console.log(error.message)
  }
}
export default sendForm