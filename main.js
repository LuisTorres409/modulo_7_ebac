const form = document.getElementById('form-numeros')

let formEValido = false;

function validaForm(numeroA,numeroB) {
    return parseInt(numeroB) > parseInt(numeroA);
}

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const message = document.querySelector('.message');
    const numeroA = document.getElementById('numeroA').value;
    const numeroB = document.getElementById('numeroB').value;
    const mensagemSucesso = `É válido pois ${numeroB} é maior que ${numeroA}`
    const mensagemErro = `Não é válido pois ${numeroB} é menor que ${numeroA}`

    if(validaForm(numeroA,numeroB)){
        console.log(mensagemSucesso);
        message.innerHTML = mensagemSucesso;
        message.classList.remove('erro');
        message.classList.add('success')
    } else {
        console.log(mensagemErro);
        message.innerHTML = mensagemErro;
        message.classList.remove('success');
        message.classList.add('erro');

    }

})