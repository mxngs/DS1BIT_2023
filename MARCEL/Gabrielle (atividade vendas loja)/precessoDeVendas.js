//Função para realizar calculos matemáticos
function calculos(valor1, resposta){
    let valor10 = valor1
    let respostas = resposta
    let valorFinal
    switch (respostas) {
        case "1":
            valorFinal = valor10 - ((valor10*8)/100)
            break;
        case "2":
            valorFinal = valor10 - ((valor10*4)/100)
            break;
        case "3":
            valorFinal = console.log('Duas vezes de ' + valor10/2)
            break;
        case "4":
            valorFinal = console.log('Quatro vezes de ' + ((valor10+((valor10*8)/100))/4))
            break;
    
        default:
            console.log('E R R O R : não foi possivel calcular')
            break;
    }
    if(valorFinal!=undefined)
       return valorFinal
    else
       return false

}

//tornando a função calculadora pública
module.exports = {
    calculos
}