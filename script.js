// Seleciona todos os elementos da classe .input
const inputs = document.querySelectorAll('.input');

const botao = document.querySelector('.botao-login');

/**
 * ({ target }) => Desestruturação, recebe somente a propriedade target do event
 * Recebe o elemento irmão anterior
 * Adiciona a classe .span-ativo
 */ 
const focar = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-ativo');
}

const desfocar = ({ target }) => {

    // Verifica se o input está vazio antes de remover a classe
    if (target.value == '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-ativo');
    }
}

const checarTamanho = () => {
    const [usuario, senha] = inputs;

    if (usuario.value && senha.value.length >= 8) {
        botao.removeAttribute('disabled');
    } else {
        botao.setAttribute('disabled', '');
    }
}

// Adiciona um Listener quando o input é focado e chama função focar
inputs.forEach(input => input.addEventListener('focus', focar));

// Adiciona um Listener quando o input é desfocado e chama função focar
inputs.forEach(input => input.addEventListener('focusout', desfocar));

// Adiciona um Listener quando é muda valor input
inputs.forEach(input => input.addEventListener('input', checarTamanho));


// Get the modal
const modal = document.querySelector(".modal");

// Get the <span> element that closes the modal
const span = document.querySelector(".botao-fechar");

// When the user clicks on the button, open the modal
botao.onclick = function() {
  modal.style.display = "flex";

  const msg = document.querySelector("h2.title");
  msg.innerHTML = "Bem-vindo, " + inputs[0].value + "!"; 
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}