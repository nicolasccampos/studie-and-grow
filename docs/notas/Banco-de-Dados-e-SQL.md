# 
Banco de Dados e SQL


## Banco de Dados — Modelagem Relacional


### Chave primária (Primary Key)


Identifica exclusivamente cada registro de uma tabela.


### Chave estrangeira (Foreign Key)


Estabelece um relacionamento entre registros de tabelas diferentes.


### Relacionamento One-to-Many


Representa uma relação de um para muitos.


Exemplo: um usuário pode possuir várias URLs encurtadas, mas cada URL pertence a apenas um usuário.


### Modelagem inicial de entidades


**User**

- id
- name
- email
- passwordHash
- createdAt

**ShortUrl**

- id
- originalUrl
- shortCode
- createdAt
- user

### Segurança de senhas


Senhas não devem ser armazenadas em texto puro.


Uma prática adequada é utilizar algoritmos de hash, como BCrypt, para armazenar uma representação protegida da senha.


---


## 5. Resumo


Java fornece a linguagem e os recursos de orientação a objetos.


Spring Boot facilita a criação e configuração das aplicações.


JPA define os padrões de persistência de dados, enquanto Hibernate implementa esses padrões.


O banco de dados relacional armazena as informações e estabelece os relacionamentos entre elas.

