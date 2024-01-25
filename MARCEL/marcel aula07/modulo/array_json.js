/**********************************************************************
 * Objetivo: trabalhar com conceitos de array e json
 * Data: 27/09/2023
 * Autor: Gabrielle
 * Versão> 1.0
 ***********************************************************************/

 // []  --> significa estrutura de ARRAY
 // {}  --> significa estrutura de JSON

 const conceitoArray = function(){

   //Criando um array e atribuindo conteudo para ele
   let listaDeNome = ['José', 'Maria', 'Luiz', 'Ana', true];

   //Exibe todo o array
   console.log(listaDeNome);
   console.table(listaDeNome);

   //Exibe apenas um conteúdo do array, através do idice
   console.log(listaDeNome[2]);

   //typeof --> retorna o tipo de dados do array ou do conteúdo de cada indice
   console.log(typeof(listaDeNome));
   console.log(typeof(listaDeNome[4]));

   //Alterar conteúdo de algum elemento do array
   listaDeNome[1] = 'Maria da Silva';
   console.table(listaDeNome);

   //Adicionar um novo elemento no fim do array
   listaDeNome.push('André da Silva');
   listaDeNome.push('Carlos da Silva', 'Suzane da Silva', 'Julia da Silva');
   console.table(listaDeNome);

    //Adicionar um novo elemento no inicio do array
      //Obs: ele reorganiza todos seus indices e seus conteudos
   listaDeNome.unshift('Nathália da Silva', 'Pedro da Silva')
   console.table(listaDeNome);

   //Remove elementos do fim do array
   listaDeNome.pop();
   console.table(listaDeNome);

   //slice --> Remover elementos do array com base do indice
     // OBS: splice(3,1) - O primeiro argumento é a referencia do indice
         // O segundo é qtde de elementos que será removido
   listaDeNome.slice(3,3);
   console.table(listaDeNome);

   //Remove um elemento do indice do array
   listaDeNome.shift();
   console.table(listaDeNome);

}

const percorrendoArray = function(){

   let listaDeProdutos = ['mouse',
                          'Teclado',
                           'Monitor',
                           'Computador',
                           'Caixa de som',
                           'Impressora',
                           'Fone de ouvido',
                           'Web Cam',
                           'Microfone',
                           'HD',
                           'Memória'];

   //length --> Retona a qtde de elementos e um array
  console.log(listaDeProdutos.length);

   //while
   //let cont = 0;
   //while(cont < listaDeProdutos.length){
       //console.log(`Nome Do Produto: ${listaDeProdutos[cont]}`)
       //cont+=1;
  // }

  //for(let cont = 0; cont < listaDeProdutos.length; cont++){
   //console.log(`nome do produto: ${listaDeProdutos[cont]}`)
  //}

  //FOREACH
    //listaDeProdutos.forEach(function(produto){
        //console.log(`Nome do Produto: ${produto}`)
    
    
    //Permite localizar um conteúdo Array e retorna o seu índice
    //Obs: Caso o indexOf não encontre o item sempre retornará -1
    
    //console.log(listaDeProdutos.includes('Impressoras'));

}

const filtrarProduto = function(nomeProduto){
  let listaDeProdutos = [ 'Mouse',
                          'Teclado', 
                          'Monitor', 
                          'Computador', 
                          'Caixa de Som', 
                          'Impressora', 
                          'Fone de Ouvido',
                          'Web Cam', 
                          'Microfone', 
                          'HD', 
                          'Memória'
  ];
   
  let nome = nomeProduto
  let status = false
  let cont = 0

  /*Usando o indexOF
  if (listaDeProdutos.indexOf(nome) >= 0)
  status = true

  /Usando o includes
  if (listaDeProdutos.includes(nome))
  status = listaDeProdutos.includes(nome)
  */

  //Fazendo o filtro Manual
  listaDeProdutos.forEach(function(produto){
      if(produto.toUpperCase() == nome.toUpperCase())
      cont++
  })

  return cont
}

const conceitoJSON = function(){

  //Criando uma vaiavel JSON e colocando atributos manuais
  let aluno = { nome: 'José da Silva', telefone: '1147895254', celular: '11978784555' };
  let aluno2 = { nome: 'Maria da Silva', telefone: '115698989', celular: '1199585558' };
  let aluno3 = { nome: 'André da Silva', telefone: '115676489', celular: '1199593768' };
  let arrayAlunos = [];

  //Criando um objeto tipo array guardando dois elementos JSON dentro deles
  arrayAlunos.push(aluno,aluno2,aluno3)


  //Criando novos atributos no JSON
  aluno.email = 'Jos@gmail.com'
  aluno.ra= '123456'


  //Exibindo todos os atributos da variavel
  console.log(aluno);

  console.log('O nome do aluno é ' + aluno.nome);

  console.log(arrayAlunos);

  //onsole.log('Nome do aluno: ' + arrayAlunos[1].nome);
  //console.log('Celular do aluno: ' + arrayAlunos[1].celular);

  console.log('---------- Lista de alunos -----------' )
    console.log();

  arrayAlunos.forEach(function(arrayAlunos){
  
    console.log(`Nome do aluno: ${arrayAlunos.nome}`)
    console.log(`Telefone do aluno: ${arrayAlunos.telefone}`)
    console.log(`Celular do aluno: ${arrayAlunos.celular}`)
    if(arrayAlunos.email != underfinde)
    console.log(`Celular do email: ${arrayAlunos.email}`)
    if(arrayAlunos.ra != underfinde)
    console.log(`Celular do ra: ${arrayAlunos.ra}`)
    console.log();

  }) ;

}

const cadastroProdutos = function(){

  //Variavel para guardar varios produtos
  let arrayProdutos= [];

  //Variavel para guardar p array que será representado por um atributo do tipo JSON
  let JSONProdutos = {};
   
  let categoria = [
                      {id:1, nome_categoria: 'Harware', descricao_categoria: 'Equipamento de haware para PC'},
                      {id:2, nome_categoria: 'Periféricos', descricao_categoria: 'Periféricos para PC'},
                      {id:3, nome_categoria: 'Games', descricao_categoria: 'Jogos e acessorios para PC'},
                      {id:4, nome_categoria: 'Escritorios', descricao_categoria: 'Itens de informatica para escritorios'},
                  ];
                  
 let cores =       [
                      {id: 1, nome_cores: 'Preto'},
                      {id: 2, nome_cores: 'Branco'},
                      {id: 3, nome_cores: 'Cinza'},
                      {id: 4, nome_cores: 'Azul'},
                      {id: 5, nome_cores: 'Vermelho'},
                  ];

 let marcas =     [
                    {id: 1, nome_marca: 'Dell', telefone: '1145566566', email: 'dell@gmail.com'},
                    {id: 2, nome_marca: 'Intel', telefone: '1155588866', email: 'intel@gmail.com'},
                    {id: 3, nome_marca: 'AMD', telefone: '21477744566', email: 'amd@gmail.com'},
                    {id: 4, nome_marca: 'Multilaser', telefone: '116555552', email: 'multilaser@gmail'},
                    {id: 5, nome_marca: 'Logitech', telefone: '114788888', email: 'logitech@gmail'},
                    {id: 6, nome_marca: 'Positivo', telefone: '11555566666', email: 'positivo@gmail'},
                  ];

 let produto1 = {
                  id: 1,
                  nome: 'mouse',
                  descricao: 'Mouse optico com fio',
                  valor: 80,
                  quantidade: 200,
                  categoria: categoria[1],
                  cor: [
                         cores[0],
                         cores[1]
                       ],
                  marca: marcas[0]
                }; 

 let produto2 = {
                  id: 2,
                  nome: 'teclado',
                  descricao: 'Teclado gamer com led',
                  valor: 250,
                  quantidade: 50,
                  categoria: categoria[1],
                  cor: cores,
                  marca: marcas[3]
                }; 

 let produto3 = {
                  id: 3,
                  nome: 'caixa de som',
                  descricao: 'Caixa de som com fio',
                  valor: 100,
                  quantidade: 80,
                  categoria: categoria[4],
                  cor: [
                    cores[0],
                    cores[1],
                    cores[2]
                  ],
                  marca: marcas[3]
                }; 

  //Criando elementos dentro do array produtos              
  arrayProdutos.push(produto1, produto2, produto3 );

  //Adicionando o array com tosos os produtos em um atributo do tipo Json
  JSONProdutos.produtos = arrayProdutos;

  //console.log(JSONProdutos);
  return JSONProdutos
}

 



console.log(cadastroProdutos());
//cadastroProdutos();
//conceitoJSON();

//conceitoArray();
//percorrendoArray();
//console.loh(filtrarProdutos('mOuSe))