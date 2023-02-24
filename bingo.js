const table = document.querySelector(".tabela") // selecionando elementos html
const textField = document.querySelector("textarea")
const button = document.querySelector("button")

button.addEventListener("click", ()=> { // chamdno a variavel button e passadno o evento de clique 
    bingo()
})

function bingo() {
    table.innerHTML = ""
    let lista = textField.value.split("\n") // chamando a variavel textfild onde quarda o bloco de texto, split esta separando os valores em uma lista
    console.log(lista)
    const devoCriarOsQuadrados = validarSeDeveCriarOsQuadrados(lista)
    if(devoCriarOsQuadrados == true) {
        createSquares(lista)
    }
}

function validarSeDeveCriarOsQuadrados(lista) {
    if (lista.length > 9) {
        alert("valor maximo, so conporta 9 caixinhas")
        return false
    }

    if(lista == "") { 
        alert("Escreva um valor")    
        return false
    } 

    return true
}

function funcaoDeClicar(elemento) {
    
}

function createSquares(lista) {
    const total = lista.length -1
    for(let i = 0; i <= total; i++) {
        table.innerHTML += `<div class='celula'> <p class='texto-final'>${lista[i]}</p></div>`
    }
    
    let quadrados = document.querySelectorAll(".celula")

    quadrados.forEach((quadrado)=> {
        quadrado.addEventListener("click", ()=> {
            quadrado.style.backgroundColor = quadrado.style.backgroundColor == "green" ? "rgb(45, 44, 45)" : "green"
        })
    })
    
}
