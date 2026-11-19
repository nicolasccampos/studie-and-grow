# Spring Boot


#  Classe principal e inicialização


A classe principal é responsável por fornecer o ponto de entrada da aplicação Java e inicializar o ambiente Spring Boot.


O `package` organiza as classes em grupos lógicos, enquanto `import` permite utilizar classes e anotações de outros pacotes.


### @SpringBootApplication


É a anotação principal do Spring Boot. Reúne três funcionalidades:

- `@SpringBootConfiguration`: permite definir configurações da aplicação.
- `@EnableAutoConfiguration`: ativa configurações automáticas conforme as dependências disponíveis.
- `@ComponentScan`: procura componentes gerenciados pelo Spring nos pacotes correspondentes.

Por padrão, a busca começa no pacote da classe principal e inclui seus subpacotes.


### main() e SpringApplication.run()


O `main()` é o ponto de entrada de uma aplicação Java, por meio do qual a JVM inicia a execução.


O `SpringApplication.run()` inicializa o ambiente Spring Boot, configura os componentes e inicia o servidor web quando aplicável.


Exemplo:


```text
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```


##  JPA e Hibernate


O JPA é uma especificação utilizada para mapear objetos Java para tabelas do banco de dados. O Hibernate é uma das implementações dessa especificação.


### Mapeamento de entidades

- `@Entity`: identifica uma classe como entidade persistente.
- `@Table`: permite definir o nome da tabela.
- `@Id`: identifica a chave primária.
- `@GeneratedValue`: configura a geração automática do identificador.
- `@Column`: configura características de uma coluna.

Algumas propriedades importantes de `@Column`:

- `name`: define o nome da coluna.
- `nullable = false`: não permite valores nulos.
- `unique = true`: exige valores únicos.
- `updatable = false`: impede que o Hibernate altere a coluna durante atualizações.

### Relacionamentos entre entidades


Os principais tipos de relacionamento no JPA são:

- `@OneToOne`: um para um.
- `@OneToMany`: um para muitos.
- `@ManyToOne`: muitos para um.
- `@ManyToMany`: muitos para muitos.

    **Link:** [Diferenças entre OneToMany, ManyToMany, ManyToOne e OneToOne](https://pt.stackoverflow.com/questions/234755/diferen%C3%A7as-onetomany-manytomany-manytoone-onetoone?utm_source=chatgpt.com)


Em um relacionamento entre OneToMany e ManyToOne, várias entidades podem estar associadas a uma única entidade.


Normalmente, o lado ManyToOne possui a chave estrangeira e é o lado proprietário do relacionamento.


O `@JoinColumn` permite definir a coluna utilizada como chave estrangeira.


Já o `mappedBy` é utilizado no lado inverso para indicar qual atributo da outra entidade controla o relacionamento. Seu valor deve ser o nome do atributo Java, não o nome da coluna no banco.


### Callbacks de persistência: @PrePersist


O `@PrePersist` permite executar um método automaticamente antes de uma entidade ser inserida pela primeira vez no banco.


É útil para preencher informações automaticamente, como datas de criação.


Com `LocalDateTime.now()`, obtenho a data e o horário atuais.


Combinado com `updatable = false`, o Hibernate não altera essa coluna durante atualizações posteriores.


##  Repository e Spring Data JPA


O Repository é responsável pelo acesso aos dados da aplicação, fazendo a comunicação entre o código e o banco de dados.


Com Spring Data JPA, consigo utilizar operações comuns sem implementar manualmente cada consulta.


### JpaRepository


O `JpaRepository` disponibiliza métodos prontos, como:

- `save()`: salva ou atualiza um registro.
- `findById()`: busca pelo identificador.
- `findAll()`: retorna os registros.
- `deleteById()`: exclui pelo identificador.
- `existsById()`: verifica se um registro existe.

Ao estender `JpaRepository`, preciso informar dois tipos utilizando Generics:

1. A entidade que será gerenciada.
2. O tipo do identificador dessa entidade.

O Spring Data JPA identifica a interface e fornece automaticamente uma implementação em tempo de execução. Não preciso implementar manualmente os métodos básicos nem adicionar `@Repository` à interface nesses casos.


##  Consultas derivadas (Derived Queries)


O Spring Data JPA consegue criar consultas automaticamente a partir do nome dos métodos declarados no Repository.


Utilizo o padrão `findBy` seguido do nome do atributo que desejo pesquisar.


Por exemplo, `findByEmail` realiza uma busca pela propriedade `email` da entidade.


O parâmetro do método informa o valor utilizado na pesquisa.


Também posso pesquisar por associações entre entidades, utilizando o atributo que representa o relacionamento.


O tipo de retorno depende da quantidade de resultados esperados:

- `Optional<T>`: utilizado quando espero um possível resultado.
- `List<T>`: utilizado quando posso receber vários resultados.

## 5. Service e injeção de dependência


O Service é responsável por organizar as regras de negócio e coordenar as operações da aplicação.


### @Service


Identifica uma classe como componente da camada de serviços, permitindo que o Spring gerencie sua instância.


### Injeção de dependência


A injeção de dependência permite que o Spring forneça automaticamente os objetos necessários para uma classe.


Uma forma comum de fazer isso é pela injeção por construtor.


O construtor recebe a dependência como parâmetro e a atribui a um atributo da classe. Utilizar `private final` ajuda a garantir que essa dependência não seja substituída posteriormente.


Quando existe apenas um construtor, não é necessário utilizar `@Autowired`.


Assim, não preciso criar manualmente um Repository com `new`; o Spring fornece a implementação que ele gerencia.


##  Arquitetura em camadas


Uma forma comum de organizar aplicações Spring Boot é separar as responsabilidades:

- **Controller:** recebe requisições HTTP e organiza as respostas.
- **Service:** executa as regras de negócio.
- **Repository:** realiza o acesso aos dados.
- **Banco de dados:** armazena as informações.

Essa divisão facilita a organização, manutenção e evolução da aplicação, evitando concentrar todas as responsabilidades em uma única classe.


---

