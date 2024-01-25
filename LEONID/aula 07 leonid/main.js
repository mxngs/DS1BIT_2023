'use strict'

const cepInput = document.getElementById('cep')


async function pegarCep(cep) {
    const url =`https://viacep.com.br/ws/${cep}/json/`

    const responde = await fetch(url)
    const cepInfo = await responde.json()

    return cepInfo
}

async function preencherCampos (){
    const endereco = document.getElementById('endereco')
    const bairro = document.getElementById('bairro')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')

    const cepInfo = await pegarCep(cepInput.value)

    endereco.value = cepInfo.logradouro
    bairro.value = cepInfo.bairro
    cidade.value = cepInfo.localidade
    estado.value = cepInfo.uf
    
}

cepInput.addEventListener('focusout', preencherCampos)