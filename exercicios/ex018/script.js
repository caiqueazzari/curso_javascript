let valores = []
let num = document.getElementById('txtnum')
let res = document.getElementById('res')
let lista = document.querySelector('select#flista')

function adicionar() {
    let n = Number(num.value)
    if (valores.includes(n)) {
        window.alert(`[ERRO] Número ${n} já foi digitado.`)
    } else if (n < 0 || n >= 100){ 
        window.alert(`[ERRO] Número não está entre 1 e 100`)
    } else {
        valores.push(n)
        let item = document.createElement(`option`)
        item.text = `Valor ${n} adicionado.`
        lista.appendChild(item)
    }
    num.value = ''
    num.focus
}

function finalizar() {
    res.innerHTML += `<p>Ao todo, foram cadastrados ${valores.length} números.</p>`    
    res.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(Math, valores)}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(Math, valores)}</p>`
    let soma = 0
    for (let pos in valores) {
        soma += valores[pos]
    }
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    let media = soma / valores.length
    res.innerHTML += `A média dos valores digitado é ${media}`
}
