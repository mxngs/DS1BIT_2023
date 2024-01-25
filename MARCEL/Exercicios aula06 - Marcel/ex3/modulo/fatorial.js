/*************************************************************************
* Objetivo: sistema para gerenciar o cálculo de uma tabuada
* Data: 15/09/2023
* Autor: Gabrielle Bueno
* Versão: 1.0
**************************************************************************/
function calcularTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal) {
    
    for (let tabuada = tabuadaInicial; tabuada <= tabuadaFinal; tabuada++) {
        console.log(`Tabuada do [${tabuada}]`);

        for (let n = contadorInicial; n <= contadorFinal; n++) {
            console.log(`${tabuada} x ${n} = ${tabuada * n}`);
        }

        console.log(); 
    }
}

module.exports = {
    calcularTabuada
};
