use loja_caros;

create table carros
(id integer primary key,
 nome varchar(50),
 descricao varchar(50),
 preco numeric,
 categoria text,
 estoque numeric);
 
 create table clientes
(id integer primary key,
 nome varchar(25),
 cpf varchar(20),
 endereco text,
 telefone varchar(13),
 email text);
 
 create table compras
(id integer primary key,
 cliente_id integer,
 foreign key (cliente_id) references cliente(id),
 dataDeCompra varchar(10),
 totalDeCompra numeric);
 
 create table carros_compra
 (id integer primary key,
 compra_id integer,
 foreign key (compra_id) references compra(id),
 carro_id integer,
 foreign key (carro_id) references carro(id),
 quantidade numeric,
 subtotal numeric);
 
 create table estoque
(id integer primary key,
 carro_id integer,
 foreign key (carro_id) references carro(id),
 quantidadeDeEstoque numeric);
 
 insert into carros (id_carro, nome, descricao, preco, categoria, estoque) values
 (1, 'Renault Duster' , 'Suv 2017, DYNAMIQUE, AUTOMATICO', 68.699, 'Elétrico', 5),
 ( 2, 'Jeep Renegade' , 'STD Suv 2018, 57.345 km, AUTOMATICO', 74.699, 'Elétrico', 3),
 ( 3, 'Honda Civic LXR ' , 'Sedan 2015, 77.577 km, AUTOMATICO, 74.599', 'Elétrico', 2);
 
 select * from carros;
 
 insert into clientes (id_cliente, nome, cpf, endereco, telefone, email) values
 (1, 'Otavio', 56798215892 , 'Rua antonio joao' , 11994560952 , 'Otavio.alves@gmail.com'),
 (2, 'Paola', 53270965172, 'Rua ribeirao', 15984253692 , 'Paolasilva44@yahoo.com.br'),
 (3, 'João', 56709835623, 'Rua fatima', 11976387342, 'JoaoPedro88@hotmail.com');
 
 select * from clientes;
 
 insert into compras(id_compra, dataDeCompra, totalDeCompra) values
 (1, '25/04/2020', 359000),
 (2, '06/01/2022', 2530000),
 (3, '05/12/2021', 3500000);
 
 select * from compras;
 
 insert into carros_compra(id_carros_compra, compra_id, quantidade, subtotal) values
 (1,2,3,)
 (2,3,1, 74.699)
 (3,1,2, )
 
 insert into estoque (id_estoque, carro_id, quantidadeDeEstoque) values
 (1, 2, 3),
 (2, 1, 5),
 (3, 3, 2);
 
 select 
 
 
 
 

 
 
 
 
 
 
 
 

 
