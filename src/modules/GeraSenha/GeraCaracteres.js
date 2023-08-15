export const rand = (min = 0, max = 9) => Math.floor(Math.random() * (max - min + 1) + min);

let min = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
let man = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
let simbol = ['!','@','#','$','%','&','*','(',')','_','-','+','=','?'];

// gera letras minusculas aleatorias
export const radmin = () => min[rand(0,25)];
// gera letras maiusculas aleatorias
export const radman = () => man[rand(0,25)];
// gera simbolos aleatorios
export const radsimbol = () => simbol[rand(0,13)];

