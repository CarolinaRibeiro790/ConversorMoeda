// function avisar(){
//     alert('Opa, disparei!')
// }

// let botao = document.querySelector('#botao')

// document.addEventListener('click', avisar) ou 
// botao.addEventListener('click', () => {
//     avisar()
// })

let dolar = 5.1

let usdInput = document.querySelector('#usd')
let brlInput = document.querySelector('#brl')

//evento de apertar e soltar a tecla keyup
usdInput.addEventListener('keyup', () => {
    convert('usd-to-brl')
}) 

brlInput.addEventListener('keyup', () => {
    convert('brl-to-usd')
}) 

usdInput.addEventListener('blur', () =>{
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener('blur', () =>{
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = '1000,00'
convert('usd-to-brl')

//função para formatar a moeda
function formatCurrency(value){
    //ajustar o valor
    let fixedValue = fixValue(value)

    //utilizar função de formatar
    let options = {
        useGrouping: false, // não agrupar/juntar os números
        minimumFractionDigits: 2 //casas decimais
    }
    let formatter = new Intl.NumberFormat('pt-br', options)

    //retorna o valor formatado
    return formatter.format(fixedValue)
    
}

//corrigir o valor; replace sigf trocar(virgula pelo ponto)
function fixValue(value){
    let fixValue = value.replace(',','.')
    let floatValue = parseFloat(fixValue) //transforma a string em número

    //NaN significa não é um número(para caso o usuario digite algo sem ser nº retorna 0)
    if(floatValue == NaN){
        floatValue = 0
    }
    return floatValue
}

//função de converter
function convert(type){
    if(type == 'usd-to-brl'){
        //ajustar o valor
        let fixedValue = fixValue(usdInput.value)

        //converter o valor
        let result = fixedValue * dolar
        result = result.toFixed(2)

        //mostra no campo de real
        brlInput.value = formatCurrency(result)
    }

    if(type == 'brl-to-usd'){
         //ajustar o valor
         let fixedValue = fixValue(brlInput.value)

         //converter o valor
         let result = fixedValue / dolar
         result = result.toFixed(2)
 
         //mostra no campo de real
         usdInput.value = formatCurrency(result)

    }
}