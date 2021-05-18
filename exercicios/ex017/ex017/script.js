function tabuada() {
    let num = document.getElementById('txtnum')
    let res = document.getElementById('res')

    if (num.value.length == 0) {
        res.innerHTML = '[ERRO] Por favor, digite um número.'
    } else if (Number(num.value == 0)) {
        res.innerHTML = '[ERRO] Digite um valor diferente de 0.'
    } else {
        num = Number(num.value)
        res.innerHTML = `<p>Tabuada do ${num}</p>`
        for (let c = 0; c <= 10; c++) {
            res.innerHTML += `${num} x ${c} = ${num * c} <br>`
        }
    }
}