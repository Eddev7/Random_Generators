export default class ValidaCpf {
    constructor(cpf) {
        Object.defineProperty(this, 'cpf', {
            get: function() {
                return cpf.replace(/\D+/g, '');
            }
        })
    }

    get cpfformat() {
        const cpfformat = Array.from(this.cpf);
        return cpfformat;
    }

    get valida() {
        const cpfformatado = this.cpfformat;
        if (!this.cpf) return false;
        if (cpfformatado.length !== 11) return false;
        if (this.isSequencia()) return false;
        const Digito1 = cpfformatado.slice(0,-2).reduce((cout, n, i)=> (Number(n) * (10-i)) + cout ,0);
        const Digito2 = cpfformatado.slice(0,-1).reduce((cout, n, i)=> (Number(n) * (11-i)) + cout ,0);
        cpfformatado.splice(-2,2,ValidaCpf.testeDigito(Digito1),ValidaCpf.testeDigito(Digito2));
        return cpfformatado.join('') === this.cpf;
    }

    isSequencia() {
        return this.cpfformat[0].repeat(11) === this.cpfformat.join('');
    }

    static testeDigito = (n) => n%11 >= 2 ? String(11-n%11) : String(0);
}