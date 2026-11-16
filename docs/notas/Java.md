# Java


# POO - Curso em Vídeo


Estudos práticos sobre classes, objetos, estado e visibilidade em Java, baseados nas aulas de POO do professor Gustavo Guanabara, do Curso em Vídeo.


Créditos ao professor Gustavo Guanabara, professor e autor das videoaulas da plataforma Curso em Vídeo.


Link para o curso:


[bookmark](https://www.cursoemvideo.com/curso/java-poo)


## Conceitos fundamentais


### Objetos em Java


Coisa material ou abstrata que pode ser percebida pelos sentidos e descrita por meio de suas características, comportamentos e estado atual.


### Classe


Define os atributos e métodos comuns que serão compartilhados pelos objetos.


### Abstração


Processo de isolar as características essenciais de um objeto, focando no que ele faz em vez de como realiza essa tarefa e ocultando detalhes complexos de implementação.


## Estrutura de um mini projeto


```text
aula02/
├── Aula02.java
└── Caneta.java
```


### Exemplo do pacote Aula02


```java
package aula02;

public class Aula02 {
    public static void main(String[] args) {
        Caneta c1 = new Caneta();
        c1.cor = "Azul";
        c1.ponta = 0.5f;

        c1.tampar();
        c1.status();
        c1.rabiscar();
        // A instância c1, estando tampada, não pode rabiscar.

        Caneta c2 = new Caneta();
        c2.modelo = "Bic";
        c2.cor = "Preta";

        c2.destampar();
        c2.rabiscar();
        // Como c2 está destampada, pode rabiscar.
    }
}
```


### Classe Caneta


```java
package aula02;

public class Caneta {
    String modelo;
    String cor;
    float ponta;
    int carga;
    boolean tampada;

    void status() {
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Uma caneta " + this.cor);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Carga: " + this.carga);
        System.out.println("Está tampada? " + this.tampada);
    }

    void rabiscar() {
        if (this.tampada == true) {
            System.out.println("ERRO! Não posso rabiscar");
        } else {
            System.out.println("Estou rabiscando");
        }
    }

    void tampar() {
        this.tampada = true;
    }

    void destampar() {
        this.tampada = false;
    }
}
```


### Estado dos objetos


Todos os objetos da mesma classe, como a classe Caneta, têm os mesmos métodos e atributos. O que pode ser diferente entre eles é o estado.


Isso permite criar várias canetas e obter resultados diferentes para o método `rabiscar`, com base no estado booleano de cada caneta.


Os atributos são os mesmos, mas seus valores e estados podem ser diferentes.


## UML: Linguagem de Modelagem Unificada


### Diagrama de classes


Um dos diagramas mais conhecidos da UML. A UML busca representar as classes de forma simples. No diagrama de classes, cada classe é representada por um retângulo.


### Modificadores de visibilidade


Indicam o nível de acesso aos componentes internos de uma classe.


    Símbolo +: público


    Exemplo: telefone público, como um orelhão. É um método que qualquer pessoa pode usar.


    Símbolo -: privado


    Exemplo: telefone privado, como um celular. É um método que apenas a própria classe pode usar.


    Símbolo #: protegido


    Exemplo: telefone residencial. É um método que pode ser usado pela classe e por suas subclasses. Esse conceito se relaciona à herança em POO.


## TIL encontrada


### O problema


Encontrei uma armadilha do operador de atribuição em um if com boolean em Java.


Ao testar o estado booleano dentro do método `rabiscar`, escrever `if (this.tampada = true)` com apenas um sinal de igual não gera erro de compilação em Java. Porém, isso faz com que a caneta nunca rabisque, mesmo depois de chamar `destampar`.


### Por que isso acontece


Em Java, uma atribuição retorna o próprio valor atribuído. Como `this.tampada` é do tipo `boolean`, a expressão `this.tampada = true` altera o estado do objeto para `true` e retorna `true` para o `if`.


### Como evitar


Para variáveis booleanas, não é necessário comparar com `== true`. Basta avaliar a variável diretamente:


```java
// Perigoso: um único sinal de igual atribui true por engano.
if (this.tampada = true) { ... }

// Forma direta de verificar se o valor é true.
if (this.tampada) { ... }

// O operador ! verifica se o valor é false.
if (!this.tampada) { ... }
```

