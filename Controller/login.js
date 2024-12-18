import { login } from "../Model/firebase/firebaseAuthenticationSetup.js";

// Função para validar o formulário de Login
function validateLogin(event) {
    event.preventDefault();

    const email = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (email === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        login(email, password)
    }
}

// Adiciona o evento de validação ao formulário de Login
const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', validateLogin);

