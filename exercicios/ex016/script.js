function contar() {
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')
    res.innerHTML = '<p></p>'

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `<p>Impossível contar!!!</p>`
        //window.alert('[ERRO] Preencha todas as caixas.')
    } else {
        res.innerHTML = '<p>Contando..</p'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando o passo como 1')
            p = 1
        }
        if (i > f) { // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else { // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}