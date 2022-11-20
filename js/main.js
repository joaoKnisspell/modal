const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');

const botoes = [openModal, closeModal, fade];

botoes.forEach(elemento => {
    elemento.addEventListener('click',() => {
        fade.classList.toggle('hide');
        modal.classList.toggle('hide');
    })
})
