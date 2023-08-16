import { radmin, radman, radsimbol, rand } from './GeraCaracteres';

export default class CriaSenha {
    constructor() {
        this.display = document.querySelector('.senha');
        this.button = document.querySelector('.gen-senha');
        this.num = document.querySelector('#num');
        this.man = document.querySelector('#man');
        this.min = document.querySelector('#min');
        this.simbol = document.querySelector('#simbol');
        this.input = document.querySelector('#numC');
        this.numC;
        this.evento();
    }

    evento() {
        this.button.addEventListener('click', (e) => {
            this.hanbleEvent(e);
        })
    }

    hanbleEvent(e) {
        e.preventDefault();
        this.numC = Number(this.input.value);
        this.geraSenha();
    }

    geraSenha() {
        let senha = '';
        if (this.min.checked || this.man.checked || this.num.checked || this.simbol.checked) {
            for (let i = 0; i < this.numC; i++) {
                if (this.min.checked) {
                    if (senha.length == this.numC) break;
                    senha += String(radmin());
                }
                if (this.man.checked) {
                    if (senha.length == this.numC) break;
                    senha += String(radman());
                }
                if (this.num.checked) {
                    if (senha.length == this.numC) break;
                    senha += String(rand());
                }
                if (this.simbol.checked) {
                    if (senha.length == this.numC) break;
                    senha += String(radsimbol());
                }
                this.display.classList.add('senha-font');
                this.display.innerHTML = senha;
            }
        } else {
            this.display.classList.remove('senha-font');
            this.display.innerHTML = 'Selecione alguma checkbox';
        }
    }
}