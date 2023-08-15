const geraDigito = (min=0, max=9) => Math.floor(Math.random() * (max - min + 1) + min);
import ValidaCpf from './ValidaCPF';

export default function criaCPF() {
    let cpf = new Array();
    for(let i=0;i<9;i++) {
        cpf.push(String(geraDigito()))
    }
    const Digito1 = cpf.reduce((cout, n, i) => (Number(n) * (10-i)) + cout ,0);
    cpf.push(ValidaCpf.testeDigito(Digito1));
    const Digito2 = cpf.reduce((cout, n, i) => (Number(n) * (11-i)) + cout ,0);
    cpf.push(ValidaCpf.testeDigito(Digito2));
    const cpfvalida = new ValidaCpf(cpf.join(''));
    if (cpfvalida.valida) {
        return cpf.join('')
    } else {
        criaCPF();
    }
}