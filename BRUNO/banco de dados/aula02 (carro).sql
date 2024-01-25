create table carros
(id integer primary key,
 nome varchar(3),
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
 
 insert into carros values(
  1, 'Renault Duster' , 'Suv 2017, DYNAMIQUE, AUTOMATICO', 68.699, 'Elétrico', 5,
  2, 'Jeep Renegade' , 'STD Suv 2018, 57.345 km, AUTOMATICO', 74.699, 'Elétrico', 3
  3,

 )
 
 
 
 
 
 
 
 