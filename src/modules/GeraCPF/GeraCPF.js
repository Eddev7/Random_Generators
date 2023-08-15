import criaCPF from './CriaCPF';

export default class GeraCPF {
    constructor() {
        this.button = document.querySelector('.gerador');
        this.display = document.querySelector('.CPF');
        this.cpf = criaCPF();
        this.eventos();
    }

    eventos() {
        this.button.addEventListener('click', (e) => {
            this.hanbleSubmit(e);
        })
    }

    hanbleSubmit(e) {
        e.preventDefault();
        this.cpf = criaCPF();
        this.display.innerHTML = this.formataCpf(this.cpf);
    }

    formataCpf(cpf) {
        const cpfformat = Array.from(cpf);
        cpfformat.splice(3, 0, '.');
        cpfformat.splice(7, 0, '.');
        cpfformat.splice(11, 0, '-');
        return cpfformat.join('');
    }
}

