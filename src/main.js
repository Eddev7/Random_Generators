import './assets/css/variaveis.css'
import './assets/css/style.css';
import './assets/css/styleGeraCpf.css'
import './assets/css/styleGeraSenha.css'
import GeraCpf from './modules/GeraCPF/GeraCPF';
import GeraSenha from './modules/GeraSenha/GeraSenhaAleatoria'

const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.erro(xhr.statusText)
        }
    });
};

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        if (el.classList.contains('Gera-cpf')) {
            clicado(el);
            carregaPagina(el);
        }
        if (el.classList.contains('Gera-Senha')) {
            clicado(el);
            carregaPagina(el);
        }
    }
    if (el.classList.contains('gerador')) {
        const novoGeradorCPF = new GeraCpf();
    }
    if (el.classList.contains('gen-senha')) {
        const novoGeradorSenha = new GeraSenha();
        const senha = document.querySelector('.senha');
    }
})

function carregaPagina(el) {
    const href = el.getAttribute('href');
    request({
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText)
        }
    });
}


function carregaResultado(response) {
    const resultado = document.querySelector('.coitaner-function');
    resultado.innerHTML = response;
}

function clicado(el) {
    const remover = document.querySelector('.clicado');
    try {
        remover.classList.remove('clicado');
        el.classList.add('clicado');
    } catch {
        el.classList.add('clicado');
    }
}