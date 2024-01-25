create database pizzaria_tony;
use pizzaria_tony;


 create table usuarios(
id_usuario integer primary key auto_increment,
nome varchar(100) not null,
login varchar(20)  not null,
funcaoUsuario varchar(20)  not null,
cpfUsuario bigint  not null,
senha varchar(10) not null,
img varchar(20),
dataNascimento date not null
 );
 
 create table clientes(
 id_cliente integer primary key auto_increment,
 telefone varchar(12) not null,
 email varchar(70) not null,
 usuario_id integer,
 foreign key (usuario_id) references usuarios (id_usuario)
 );

create table endereco(
id_endereco integer primary key auto_increment,
numero varchar(8),
bairro varchar(60) not null,
rua varchar(20) not null,
complemento varchar(50),
cep bigint,
id_cliente integer,
foreign key (id_cliente) references clientes (id_cliente)
);

create table pagamento(
id_pagamento integer primary key auto_increment,
cupom varchar(20),
opcaoPagamento varchar(20) not null,
valorTotal numeric,
cliente_id integer,
foreign key (cliente_id) references clientes (id_cliente)
);

create table produtos(
id_produto integer primary key auto_increment,
nomeProduto varchar(20) not null,
descricao varchar(50) not null,
preco varchar(10) not null,
avaliacaoGeral numeric not null,
produto_id integer,
foreign key (produto_id) references produtos (id_produto)
);

/*Produto tem o id do produto por conta dos rodutos favoritos*/

create table pedidos(
id_pedidos integer primary key auto_increment,
dataPedido datetime not null,
valorPedido varchar(10) not null,
cliente_id integer,
produto_id integer,
foreign key (cliente_id) references clientes (id_cliente),
foreign key (produto_id) references produtos (id_produto)
);

create table comentarios(
id_comentario integer primary key auto_increment,
dataComentario date not null,
mensagem varchar (50) not null,
usuario_id integer,
produto_id integer,
foreign key (produto_id) references produtos (id_produto)
);

create table img (
id_img integer primary key auto_increment,
links varchar(100),
produto_id integer,
foreign key (produto_id) references produtos(id_produto)
);

create table categorias (
id_categoria integer primary key auto_increment,
nome_categoria varchar(20),
icone varchar(30),
produto_id integer,
foreign key (produto_id) references produtos (id_produto)
);