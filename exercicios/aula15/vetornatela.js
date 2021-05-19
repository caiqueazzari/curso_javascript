let valores = [8, 1, 2, 5, 7, 6, 4, 2, 1, 3]

/*

for (let c = 0; c < valores.length; c++) {
    console.log(`A posição ${c} tem o valor ${valores[c]}`)
}

*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // Só funciona em arrays e objetos.


let pos = valores.indexOf(7)

if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor 7 está na posição ${pos}`)
}