# Java


# Resumo


Aqui irei anotar e revisar os conteudos estudados por mim referente a linguagem avançada de programação Java.


É natural que nem todo o conteudo da linguagem estará aqui, pois não me darei todo o trabalho de colocar aqui uma espécie de documentação da linguagem, mas me esforçarei em documentar conceitos que vou estudando de pouco em pouco.


## POO - Curso em Vídeo


Créditos ao professor Gustavo Guanabara — professor e autor das vídeo aulas da plataforma Curso em Vídeo.


link para curso: 


[bookmark](https://www.cursoemvideo.com/curso/java-poo)


### Objetos em Java


_Coisa material ou abstrata que pode ser percebida pelos sentidos e descrita por meio das suas características, comportamentos e estado atual._


### Classe


_Define os atributos e métodos comuns que serão compartilhados com objetos._


### Abstração


_Processo de_ _**isolar as características essenciais de um objeto**__, focando no que ele faz em vez de como ele realiza essa tarefa, ocultando detalhes complexos de implementação._ 


________________________________________________________________________________________


### Estrutura de um mini projeto:


```java
|— aula02
			|—Aula02.java
			|—Caneta.java
```

- Exemplo do pacote chamado Aula02

```java
package aula02;

public class Aula02 {
    public static void main(String[] args) {
        Caneta c1 = new Caneta();
        c1.cor = "Azul";
        c1.ponta = 0.5f;
        
        c1.tampar();
        c1.status();
        c1.rasbiscar();
        // a instancia c1, estando tampada, recebe false para Rabiscar.
        
        Caneta c2 = new Caneta();
        c2.modelo ="Bic";
        c2.cor = "Preta";
        
        c2.destampar();
        c2.rabiscar();
        //agora c2, estando destampada, recebe true para Rabiscar.
    }
}
```

- Exemplo da Classe chamada Caneta:

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

	void rabiscar(){
		if(this.tampada = true){
			System.out.println("ERRO! Não posso rabiscar");
	}else{
		System.out.println("Estou rabiscando");
	}
	void tampar(){
		this.tampada = true;
	}
	void destampar(){
		this.tampada = false;
	}
}
```


todos os objetos com a mesma classe (classe Caneta) tem os mesmos métodos e os mesmos atributos, porém o que eles n tem em igual é o estado.


Isso permite que eu crie N canetas, obtendo resultados diferentes para o método “rabiscar”, com base no estado Booleano inserido em cada caneta.


Atributos iguais, porém valores dos atributos e estados diferentes.


______________________________________________________________________________________


## UML - Linguagem de Modelagem Unificada


### Diagrama de Classes


Um dos diagramas mais conhecidos de UML, onde a UML leva a simplicidade ao estremo.


Pro diagrama de Classes, toda classe é representada por um retângulo.


### Modificadores de visibilidade


Indicam o nível de acesso aos componentes internos de uma classe.


Símbolo + para público


    Ex.: telefone público (orelhão)

- Trata-se de um método que qualquer pessoa pode usar.

Símbolo - para privado


    Ex.: telefone privado (celular)

- Método que apenas eu posso usar.

Símbolo # para protegido


    Ex.: telefone protegido (telefone residencial)

- Método que apenas minha mãe e os filhos dela podem usar (logo, haverá o conceito de herança em POO).
