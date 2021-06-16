/* === VARIAVEIS GLOBAIS === */
let numeroSenha = 1;
let senhaComum = [];
let senhaRapido = [];
let senhaPrioritario = [];
let divSenha = document.querySelector('.senha');
let divCaixa = document.querySelector('.caixa');
let senhaChamada = 'Nenhuma senha';
let senhaGerada = document.querySelector('.senha-gerada');

/* === BOTÕES === */

const buttonComum = document.querySelector('#comum');
buttonComum.addEventListener('click', function() {
    montaSenha('C', numeroSenha, 1)
    
});

const buttonRapido = document.querySelector('#rapido');
buttonRapido.addEventListener('click', function() {
    montaSenha('R', numeroSenha, 2);
});

const buttonPrioritario = document.querySelector('#prioritario');
buttonPrioritario.addEventListener('click', function() {
    montaSenha('P', numeroSenha, 3);
});

function montaSenha(prefix, numero, tipo) {
    numeroSenha++;
    let senhaMontada = `${prefix}-${numero}`;
    switch (tipo) {
        case 1:
            senhaComum.push(senhaMontada);
            break;
        case 2:
            senhaRapido.push(senhaMontada);
            break;
        case 3:
            senhaPrioritario.push(senhaMontada);
            break;
        default:
            alert('Erro ao criar a senha. Tente novamente!');
            break;
    }
    senhaGerada.textContent = senhaMontada;
    imprimeSenhas();
    return senhaMontada;
}

function imprimeSenhas() {
    console.log(senhaComum);
    console.log(senhaRapido);
    console.log(senhaPrioritario);
}

/* === CAIXAS ===*/

function preencheERemove(array) {
    senhaGerada.textContent = '-';
    senhaChamada = array[0];
    array.shift();
    return senhaChamada;
}

function imprimeNaTela(caixa, senhaChamada) {
    divCaixa.textContent = caixa;
    divSenha.textContent = senhaChamada;
}

const caixa1 = document.querySelector('#caixa1');
caixa1.addEventListener('click', function() {
    if(senhaPrioritario.length > 0) {
        senhaChamada = preencheERemove(senhaPrioritario);
    } else if(senhaRapido.length > 0) {
        senhaChamada = preencheERemove(senhaRapido);
    } else if(senhaComum.length > 0) {
        senhaChamada = preencheERemove(senhaComum);
    } else {
        senhaChamada = 'Nenhuma senha';
    }
    imprimeNaTela('Caixa 01', senhaChamada);
});

const caixa2 = document.querySelector('#caixa2');
caixa2.addEventListener('click', function() {
    caixa2E3('Caixa 02');
});

const caixa3 = document.querySelector('#caixa3');
caixa3.addEventListener('click', function() {
    caixa2E3('Caixa 03');
});


const caixa4 = document.querySelector('#caixa4');
caixa4.addEventListener('click', function() {
    if(senhaComum.length > 0) {
        senhaChamada = preencheERemove(senhaComum);
    } else if(senhaPrioritario.length > 0) {
        senhaChamada = preencheERemove(senhaPrioritario);
    } else if(senhaRapido.length > 0) {
        senhaChamada = preencheERemove(senhaRapido);
    } else {
        senhaChamada = 'Nenhuma senha';
    }
    imprimeNaTela('Caixa 04', senhaChamada);
});

function caixa2E3(caixa) {
    if(senhaRapido.length > 0) {
        senhaChamada = preencheERemove(senhaRapido);
    } else if(senhaPrioritario.length > 0) {
        senhaChamada = preencheERemove(senhaPrioritario);
    } else if(senhaComum.length > 0) {
        senhaChamada = preencheERemove(senhaComum);
    } else {
        senhaChamada = 'Nenhuma senha';
    }
    imprimeNaTela(caixa, senhaChamada);
}