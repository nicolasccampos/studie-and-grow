# Spring Boot


# Classe principal e inicialização


_18/11/2026_


## 1. O que é a classe principal?


É a classe responsável por fornecer o ponto de entrada da aplicação Java e iniciar o ambiente Spring Boot.


## 2. Package


O `package` organiza as classes em grupos lógicos, facilita a manutenção do código e evita conflitos entre nomes de classes.


## 3. Imports


A palavra-chave `import` permite utilizar classes e anotações definidas em outros pacotes.


## 4. @SpringBootApplication


Anotação principal do Spring Boot. Reúne três funcionalidades:

- `@SpringBootConfiguration`: permite definir configurações da aplicação.
- `@EnableAutoConfiguration`: ativa a configuração automática de componentes conforme as dependências disponíveis.
- `@ComponentScan`: procura componentes gerenciados pelo Spring nos pacotes correspondentes.

## 5. Método main()


É o ponto de entrada de uma aplicação Java. É por meio dele que a JVM inicia a execução do programa.


## 6. SpringApplication.run()


Inicializa o ambiente Spring Boot, configura os componentes da aplicação e inicia o servidor web quando aplicável.


## 7. Exemplo


```text
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```


## 8. Resumo


A classe principal inicializa a aplicação Java e permite que o Spring Boot configure e gerencie seus componentes. A anotação `@SpringBootApplication` é fundamental nesse processo.


---


## **JPA e Hibernate**


_19/11/2026_


### **Mapeamento de entidades: @Entity e @Table**


A anotação `@Entity` indica que uma classe Java será mapeada como uma entidade do banco de dados. Já `@Table` permite definir o nome da tabela correspondente.


É útil definir o nome manualmente para seguir um padrão ou evitar conflitos com palavras reservadas do banco.


**Colunas e restrições: @Column e @JoinColumn**


A anotação `@Column` permite configurar as características de uma coluna:

- `name`: define o nome da coluna.
- `nullable = false`: não permite valores nulos.
- `unique = true`: exige valores únicos.
- `updatable = false`: impede que o Hibernate atualize o valor da coluna.

Já `@JoinColumn` é utilizada em relacionamentos para definir a coluna que representa a chave estrangeira.


### **Relacionamentos entre entidades**


**Link:** Diferenças entre `@OneToMany`, `@ManyToMany`, `@ManyToOne` e `@OneToOne`


    [https://pt.stackoverflow.com/questions/234755/diferen%C3%A7as-onetomany-manytomany-manytoone-onetoone](https://pt.stackoverflow.com/questions/234755/diferen%C3%A7as-onetomany-manytomany-manytoone-onetoone)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b8fa5d00-555a-819e-8607-0003545fd436/6afc6484-ead3-4c83-b0d8-ca50deb7892d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGGDYNB%2F20261119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261119T153604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC%2Fa8vC2MxmnjdQL8MMyXd3h080IV1K%2BgbUyIC8p5metgIhAL39jmOBnm%2FJj1f%2BsSGBciIdSj%2FTBBGJJI11AMOODRvZKv8DCBgQABoMNjM3NDIzMTgzODA1IgxMGn%2BZslqHTIue3OQq3APqVbmvIG8oykZLXiOyRv%2FkZz76%2FwAFjjrxDO80tfSds%2FD8zORduxzMtcWhlZLjv67BrSf1EaJkHtME8soDaRcioX6Yr41X7UU48gYouoRWPHsgXBa9QfnJzAK5DK1DvDgau%2BeboMNVd1Vkpwf3rLMaI66mUgqR0rAzjhvZv56J8n%2F1YEX7H1v52G5BB5rheEmAdE9taZPrX%2FxdMa4bzi4gJpYxzCq7yBfKA7SdUHF91tkJ12%2BpP7tVA2RdqdmplzEwyvuo8iDSJmRp%2F7owAbXGS6vKnCBuJZ0pcLS4JlBiZm7K3%2FaYzdZZfA5jaPiAljbc8pU7mGHjPnStXaanK2B2NtrPQhen8mN9DUOKCUzT5S%2Fmge3MIqyVuqnS1xFPu1MRDQGV%2FGuxMayX%2FcDPkB9cbrj5ozU4aAvvm2pWZhh2lbT8fctgX5QdYfLzVc459vFioEVUNSSKkdzjqW1CXe333A1GY2bwHHPR%2Bq%2FJfK51UjxB4U7%2BlEtJHjDBvekvEywLfWGT%2Bxvf%2BmpfbYd2vVltA1WrpjJNM6kk17oT9XxH0joLcJ%2B%2FVUJ4TgZjH3Jn1pg%2BKfHX%2BJJ0ZlfcnKcrEVMIa40WG%2BgHW0HjNb9lX0mRKnkyxKfpmXJdYa%2F00TC%2BlfzXBjqkAWNB%2B0MRw%2BLJO7%2FcJUIzUAO3aZH32kTw7SdbKD0R1ME4%2FdV8NCk%2FAQD%2BE1ZI5dRBks%2BEuoenRpfhE0lCTPA87Xvuu5uqFqEjaY24HTNPFBlAquGPuhv78VK3ycexok%2BWrvdV0Me7ggQWQXO93ykjaq3RulR3eW4bRj9cB28QW%2F4QRgsZAx9ucyA7ATnuTTDNhP5F3VHbubS4Gvp1VQAQ1iVsxsxm&X-Amz-Signature=741e6499f5794a98ce4ecc36046a0107a6b866655b96579ba9f7ac68c3f24d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Os principais tipos de relacionamento no JPA são:

- `@OneToOne`: uma entidade se relaciona com apenas uma outra.
- `@OneToMany`: uma entidade pode se relacionar com várias outras.
- `@ManyToOne`: várias entidades podem se relacionar com uma única.
- `@ManyToMany`: várias entidades podem se relacionar com várias outras.

Em relacionamentos bidirecionais com `@OneToMany` e `@ManyToOne`, normalmente o lado `ManyToOne` é o proprietário, pois contém a chave estrangeira.


O `mappedBy` é utilizado no lado inverso para indicar qual atributo da outra entidade controla o relacionamento. É importante lembrar que ele recebe o nome do atributo Java, não o nome da coluna no banco.


Assim, as duas entidades conseguem navegar pelo relacionamento sem precisar configurar duas chaves estrangeiras.


### **Callbacks do ciclo de persistência: @PrePersist**


O `@PrePersist` permite executar um método automaticamente antes de uma entidade ser inserida pela primeira vez no banco de dados.


É útil para preencher informações automaticamente, como datas de criação. Por exemplo, `LocalDateTime.now()` retorna a data e o horário atuais.


Combinado com `updatable = false`, posso garantir que o Hibernate não altere esse campo durante atualizações posteriores.


### **Repository**


O Repository é responsável pelo acesso aos dados da aplicação, fazendo a comunicação entre o código e o banco de dados.


Com Spring Data JPA, consigo utilizar operações como salvar, buscar e excluir registros sem precisar implementar manualmente cada consulta SQL.


### 

