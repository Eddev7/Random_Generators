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
    console.log(el)
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        console.log(tag);
        carregaPagina(el);
    }
})

function carregaPagina(el) {
    const href = el.
}