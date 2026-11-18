# BackEnd


## **Entidade ShortUrl**


Uma entidade representa um elemento do domínio da aplicação que precisa ser armazenado e identificado.


No contexto de um encurtador de URLs, a entidade `ShortUrl` representa cada endereço cadastrado no sistema.


**Atributos iniciais**

- `id`: identificador único do registro.
- `originalUrl`: endereço original informado pelo usuário.
- `shortCode`: código utilizado para acessar a versão encurtada.
- `createdAt`: data e hora em que o registro foi criado.

**Observação**


O identificador de uma URL e o identificador de um usuário são coisas diferentes. Caso o sistema tenha contas de usuários, podemos criar uma entidade `User` e estabelecer um relacionamento entre ela e `ShortUrl`.


## **Relacionamentos entre entidades**


**1. O que é modelagem de dados?**


É o processo de identificar, organizar e definir as informações que um sistema precisa armazenar, incluindo suas entidades, atributos e relacionamentos.


**2. Entidades principais**


Uma entidade representa um elemento do domínio do sistema que possui informações próprias e precisa ser identificado.


Exemplo: em um sistema de encurtamento de URLs, podemos ter as entidades `User` e `ShortUrl`.


**3. Relacionamento One-to-Many**


Representa uma relação de um para muitos.


Um registro de uma entidade pode estar associado a vários registros de outra entidade.


Exemplo: um usuário pode cadastrar diversas URLs encurtadas, mas cada URL pertence a apenas um usuário.


**4. Chave estrangeira (Foreign Key)**


É um campo utilizado para estabelecer um relacionamento entre tabelas de um banco de dados relacional.


No relacionamento entre `User` e `ShortUrl`, a tabela `short_url` possui o campo `user_id`, que referencia o identificador do usuário proprietário da URL.


**5. Estrutura inicial do sistema**


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

**6. Regras importantes**

- Cada usuário possui seu próprio histórico de URLs.
- Cada URL encurtada pertence a um usuário.
- O código curto deve ser único.
- Senhas não devem ser armazenadas em texto puro.

**7. Resumo**


A modelagem de dados permite organizar as informações de um sistema antes da implementação. A definição correta das entidades e dos relacionamentos facilita a construção de aplicações organizadas e a manutenção do banco de dados.


## **Entidades e relacionamentos**


**1. Entidade User**


Representa os usuários cadastrados em um sistema.


Atributos comuns:

- `id`: identificador único.
- `name`: nome do usuário.
- `email`: endereço utilizado para identificação e login.
- `passwordHash`: representação protegida da senha por meio de hash.
- `createdAt`: data e hora do cadastro.

**Regras importantes**

- O e-mail deve ser único.
- Os campos obrigatórios não devem aceitar valores nulos.
- Senhas não devem ser armazenadas em texto puro.
- A normalização do e-mail ajuda a evitar cadastros duplicados.

**2. Entidade ShortUrl**


Representa uma URL cadastrada em um sistema de encurtamento.


Atributos comuns:

- `id`: identificador único.
- `originalUrl`: endereço original.
- `shortCode`: código utilizado no redirecionamento.
- `createdAt`: data e hora de criação.
- `user`: referência ao usuário proprietário.

**3. Relacionamento One-to-Many**


Representa uma relação de um para muitos.


Exemplo: um usuário pode possuir várias URLs cadastradas, mas cada URL pertence a um único usuário.


**4. Chave estrangeira (Foreign Key)**


É um campo utilizado para relacionar registros entre tabelas.


No relacionamento entre usuários e URLs, a tabela de URLs possui uma chave estrangeira chamada `user_id`, que referencia o identificador do usuário.


**5. Segurança de senhas**


Uma senha deve ser armazenada utilizando um algoritmo de hash apropriado, como BCrypt.


O hash permite verificar uma senha durante a autenticação sem guardar sua versão original.


**6. Resumo**


A modelagem de entidades permite representar os dados e relacionamentos de um sistema. A separação entre usuários e URLs possibilita implementar autenticação, histórico individual e controle de acesso aos registros.

