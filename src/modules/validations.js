const validations = () => {
  const modal = document.querySelector('.modal-callback');
  const input = modal.querySelectorAll(".form-control");
  const modalName = input[0];
  const modalTel = input[1];

  modalTel.addEventListener('input', (e) => {
    modalTel.value = modalTel.value.replace(/[^0-9\+]/gi, '')
  });

  modalName.addEventListener('input', (e) => {
    modalName.value = modalName.value.replace(/[^а-я\s]/gi, '')
  })
}


export default validations