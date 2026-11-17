# JavaScript


## **Variáveis:** **`const`** **e** **`let`**


Variáveis armazenam informações que o programa utiliza.


Em JavaScript, temos duas formas principais de declarar variáveis:


```text
JavaScript
const nome = "Nicolas";
let idade= 20;
```

- **`const`**: use quando não pretende atribuir outro valor à variável.

```text
JavaScript
let idade= 20;

idade= 21;

console.log(idade);
```

- **`let`**: use quando precisa alterar o valor posteriormente.

---


## **Tipos de dados**


Os principais tipos que você precisa reconhecer são:


| **Tipo**  | **Exemplo**           | **Significado**               |
| --------- | --------------------- | ----------------------------- |
| Number    | **`25`**              | Número                        |
| String    | **`"Olá"`**           | Texto                         |
| Boolean   | **`true`**            | Verdadeiro ou falso           |
| Undefined | **`undefined`**       | Valor não atribuído           |
| Null      | **`null`**            | Ausência intencional de valor |
| Object    | **`{ nome: "Ana" }`** | Objeto                        |


```text
JavaScript
console.log(typeof 10);
console.log(typeof "10");
console.log(typeof true);
console.log(typeof null);
```


Resultado:


```text
text
"number"
"string"
"boolean"
"object"
```


Aparentemente, **`typeof null`** retorna **`"object"`**, isso é um comportamento histórico da linguagem, não significa que **`null`** seja realmente um objeto


---


## **Comparações:** **`==`** **e** **`===`**


Esse assunto é especialmente importante para interpretar condições e encontrar erros.


**Igualdade simples (****`==`****)**


Compara os valores, podendo converter os tipos antes.


**Igualdade estrita (****`===`****)**


Compara o valor e também o tipo.


**Regra:**


Prefira **`===`** e **`!==`** nas comparações. Eles evitam conversões inesperadas de tipos.


---


## **Valores Truthy e Falsy**


Em JavaScript, condições conseguem avaliar valores que não são necessariamente **`true`** ou **`false`**.


Os seis valores _falsy_ são:


```text
text
false
0
""
null
undefined
NaN
```


Os demais valores são considerados _truthy_, incluindo:


```text
text
"0"
[]
{}
```


### **Operador ternário**


É uma maneira compacta de escrever um **`if/else`**, principalmente quando queremos escolher entre dois valores.


```text
JavaScript
const nota = 5;

const resultado = nota>= 4 ? "bom" : "ruim";
```


A estrutura é:


```text
text
condicao ? valorSeVerdadeiro : valorSeFalso
```


### **Estrutura** **`switch`**


É útil quando precisamos comparar uma variável com várias possibilidades.


```text
JavaScript
const categoria = "cafeteria";

switch (categoria) {
  case "cafeteria":
    console.log("Café");
    break;

  case "restaurante":
    console.log("Comida");
    break;

  default:
    console.log("Categoria desconhecida");
}
```


O **`break`** impede que a execução continue para os próximos casos. Sem ele, pode ocorrer o chamado _fall-through_.


---


## **`for`** **clássico**


```text
JavaScript
for (let i= 0; i< 5; i++) {
  console.log(i);
}
```


Estrutura dele: **`for (inicialização; condição; incremento)`**


### **`for...of`****: percorrendo arrays**


É utilizado para percorrer os valores de um array.


```text
JavaScript
const categorias = ["cafeteria","restaurante","parque"];

for (const categoria of categorias) {
  console.log(categoria);
}
```


### **`for...in`****: percorrendo objetos**


É utilizado para percorrer as chaves de um objeto.


```text
JavaScript
const lugar = {
  nome:"Café Aroma",
  categoria:"cafeteria"
};

for (const chave in lugar) {
  console.log(chave, lugar[chave]);
}
```


A diferença:

- **`for...of`**: percorre os valores de um array.
- **`for...in`**: percorre as chaves de um objeto.

O **`for...in`** não é recomendado para percorrer arrays, pois percorre índices como strings e pode incluir propriedades herdadas inesperadas.


---


## **`while`** **e** **`do...while`**


Ambos repetem um bloco enquanto uma condição permitir.


**While:**


```text
JavaScript
let tentativas= 0;

while (tentativas< 3) {
  console.log("Tentativa", tentativas);
  tentativas++;
}
```


O **`while`** verifica a condição antes de executar o bloco.


**Do...while:**


```text
JavaScript
do {
  console.log("Executando");
}while (false);
```


O **`do...while`** executa primeiro e verifica a condição depois.


**Diferença fundamental**

- **`while`**: pode executar zero vezes.
- **`do...while`**: executa pelo menos uma vez.

### **`break`** **e** **`continue`**


Esses comandos controlam a execução dos loops.


**Break:** interrompe completamente o loop.


```text
JavaScript
for (let i= 0; i< 5; i++) {
  if (i=== 3)break;
  console.log(i);
}
```


**Continue:** pula a repetição atual e passa para a próxima.


```text
JavaScript
for (let i= 0; i< 5; i++) {
  if (i=== 2)continue;
  console.log(i);
}
```


A diferença é importante: **`break`** encerra o loop; **`continue`** apenas pula uma repetição.


---


## **Funções**


Funções são **blocos de código reutilizáveis**. Em vez de escrever o mesmo código várias vezes, você cria uma função e a chama sempre que precisar.


### **Function expression**


Guardando uma função dentro de uma variável:


```text
JavaScript
const dobrar = function(numero) {
  return numero* 2;
};

console.log(dobrar(5));
```


### **Arrow functions**


É uma maneira mais curta de escrever funções, muito utilizada no JavaScript moderno:


```text
JavaScript
const dobrar = (numero)=> {
  return numero* 2;
};
```


Simplificando ainda mais:


```text
JavaScript
const dobrar = numero => numero* 2;
```


Quando existe apenas um parâmetro, os parênteses podem ser omitidos. Quando o corpo tem apenas uma expressão, podemos omitir as chaves e o **`return`**: o retorno será implícito.


### **Parâmetros com valor padrão**


Um valor que será utilizado quando nenhum argumento for enviado:


```text
JavaScript
function cumprimentar(nome = "Visitante") {
  return "Olá, " + nome;
}

console.log(cumprimentar());
```


---


## **Escopo (Scope)**


Escopo é a região do código em que uma variável existe e pode ser acessada.


**Escopo local:**


```text
JavaScript
function mostrarMensagem() {
  const mensagem = "Olá!";
  console.log(mensagem);
}

mostrarMensagem();
```


---


## **Hoisting**


Hoisting é o comportamento pelo qual determinadas declarações são processadas antes da execução normal do código.


**Declaração tradicional de função:**


```text
JavaScript
cumprimentar();

function cumprimentar() {
  console.log("Oi!");
}
```


Funciona


**Arrow function armazenada em const:**


```text
JavaScript
saudar();

const saudar = ()=> {
  console.log("Oi!");
};
```


Erro


**Regra:**

- **`function nome() {}`**: pode ser chamada antes da declaração.
- **`const nome = () => {}`**: não pode ser chamada antes da inicialização.

---


## **Closures**


Uma _closure_ acontece quando uma função consegue lembrar e continuar utilizando variáveis do escopo em que foi criada, mesmo depois que esse escopo terminou.


```text
JavaScript
function criarContador() {
  let contagem= 0;

  return function() {
    contagem= contagem+ 1;
    return contagem;
  };
}

const contador = criarContador();

console.log(contador());
console.log(contador());
console.log(contador());
```

1. **`criarContador()`** cria a variável **`contagem`**, começando em zero.
2. A função retorna outra função.
3. Essa função retornada continua tendo acesso à variável **`contagem`**.
4. Cada chamada aumenta o valor em um.
5. O valor anterior é preservado entre as chamadas.

---


## **Rest e Spread**


**Rest reúne argumentos em um array:**


```text
JavaScript
function somarTudo(...numeros) {
  return numeros.reduce((total,n)=> total+ n,0);
}

console.log(somarTudo(1,2,3,4));
```


**Spread espalha os elementos de um array:**


```text
JavaScript
const numeros = [1,2,3];

console.log(Math.max(...numeros));
```


---


# **TIL**


Problemas propostos e que resolvi até agora:


Comparações:


```text
JavaScript
const idade = 20;
let numero= "20";

console.log(idade== numero);
console.log(idade=== numero);
console.log(typeof numero);
```

- **Resultado:** **`true`**, **`false`**, **`"string"`**

Condicional:


```text
JavaScript
const quantidade = 0;

if (quantidade|| 5) {
  console.log("A");
}else {
  console.log("B");
}

console.log(quantidade?? 5);
```


Loop com continue:


```text
JavaScript
for (let i= 1; i<= 5; i++) {
  if (i=== 3) {
    continue;
  }

  console.log(i);
}
```

