const produB = document.querySelector('input#searchbut')
const section = document.querySelector('section#bodyProds')
const div = document.createElement('div')
let produ = document.querySelector('input#search')
// Click
produ.addEventListener('keyup', (e) => {
    let key = e.which || e.keyCode
    if (key == 13) {
        procurarBot()
    }
})
// Function Button
function procurarBot() {
    produ = document.querySelector('input#search')
    div.innerHTML = ``
    section.appendChild(div)
    procurar(produ.value)
    produ.value = ""
    
}
// Function search
function procurar(prod) {
    
    switch (prod.toLowerCase()) {
        case 'remedios':
            callProd(['Carrabicho', 'Ocidental'])
            break
        case 'racao':
            callProd(['peixe', 'porco', 'boi', 'gato', 'cachorro', 'passaro'])
            break
        default:
            alert('Não foi possivel encontrar')
    }
}
// Function inner content
function callProd(prod) {
    let left = 200
    let top = 350
    let c = 1
    let prods = 0
    while (c <= prod.length) { 
        div.innerHTML += `
            <div style="position: absolute; width: 200px; height: 175px; left: ${left}px; top: ${top}px; background: #C4C4C4;">
                <a href="website/gato.html"><img src="images/R${prod[prods]}.png" alt=""></a>
                <p style="text-align: center;">${prod[prods]}</p>
            </div>`
        section.appendChild(div)
        left += 375
        if (left > 950) {
            left = 200
            top += 250
        }
        c++
        prods++
    }
    console.log('Saiu')
}
