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
    // pi.innerHTML = ``
    // p.appendChild(pi)
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
    let c = 0
    for (let top = 350; top <= 600; top+= 250){
        for (let left = 200; left <= 950; left = left + 375 ) {
            div.innerHTML += `
            <div style="position: absolute; width: 200px; height: 175px; left: ${left}px; top: ${top}px; background: #C4C4C4;">
                <a href="website/gato.html"><img src="images/R${prod[c]}.png" alt=""></a>
                <p style="text-align: center;">${prod[c]}</p>
            </div>`
            section.appendChild(div)
            c+=1
        }
        
    }
}
