create table produtos (
  id_produto integer primary key,
  nome varchar(100),
  preco numeric);
  
  create table pedidos (
    id_pedido integer primary key,
    id_produto integer,
    quantidade integer,
	foreign key (id_produto) references produtos(id_produto)
    );
    
    insert into produtos (id_produto, nome, preco) values
    
    (1, "Iphone X", 3000),
    (2, "Iphone 11", 5000),
    (3, "Iphone 12", 7000),
    (4, "Iphone 14", 9000),
    (5, "Galaxy A7", 1300),
    (6, "Galaxy S20", 3000),
    (7, "Galaxy A30", 1900),
    (8, "Galaxy S23", 5000),
    (9, "LC k52", 953),
    (10, "Xiaomi 12", 3000);
    
    select * from produtos;
    
    insert into pedidos (id_pedido, id_produto, quantidade) values
    
    (2, 4, 70),
    (3, 5, 600),
    (4, 6,                                                                                                                                                                                                                                                                                                                 xl),
    (5, 3, 200),
    (6, 2, 150),
    (7, 1, 10),
    (8, 8, 205),
    (9, 9, 710);
    
    /*join serve para chamar o pedido
    on serve para relcionar a chave primaria e a chave estrangera
    as é como se fosse apelido*/
    
    select produto.nome, pedidos.quantidade  from produtos join pedidos on produtos.id_produto = pedidos.id_produto
    where id 
    
   
    