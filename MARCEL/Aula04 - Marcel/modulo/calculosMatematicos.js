//Função para realizar calculos matemáticos
function calculadora(valor1, valor2, tipoCalculo){
    
//Recebe os dados dos argumentos em varaáveis locais    
    let numero1 = valor1
    let numero2 = valor2
    let operacao = tipoCalculo
    let resultado;

    switch (operação) {
        case "1":
            resultado=v1+v2
            break;
        case "2":    
            resultado=v1-v2
            break;
        case"3" :
            resultado=v1*v2    
            break;
        case "4":
            resultado=v1/v2
            default:
                break;
   }
}

//tornando a função calculadora pública
module.exports = {
    calculadora
}