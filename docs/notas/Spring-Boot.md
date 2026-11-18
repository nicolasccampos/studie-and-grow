# Spring Boot


# Classe principal e inicialização


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

