# 02 - Aplicações avançadas em Javascript e GIT

## Javascript

### Variaveis

Existem três tipos de declarações em JavaScript.

- **var**: Declara uma variável, opcionalmente, inicializando-a com um valor.
- **let**: Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
- **const**: Declara uma constante de escopo de bloco, apenas de leitura.

#### Classificação
Uma variável declarada usando a declaração `var` ou `let` sem especificar o valor inicial tem o valor `undefined`.

#### Escopo
Quando você declara uma váriavel fora de qualquer função, ela é chamada de variável global, porque está disponível para qualquer outro código no documento atual. Quando você declara uma variável dentro de uma função, é chamada de variável local,  pois ela está disponível somente dentro dessa função.

#### Constantes
Você pode criar uma constante apenas de leitura por meio da palavra-chave const. A sintaxe de um identificador de uma constante é semelhante ao identificador de uma variável: deve começar com uma letra, sublinhado ou cifrão e pode conter caractere alfabético, numérico ou sublinhado.

``` javascript
const PI = 3.14;
```

Veja mais detalhes: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals

### Operadores

O JavaScript possui os tipos de operadores a seguir. Veja mais sobre cada um abaixo, nosso conselho é que apenas CONHEÇA e tente pelo menos utiliza-los de alguma forma para que se lembre no futuro.

- [Operadores de atribuição](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_atribuicao)
- [Operadores de comparação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_comparacao)
- [Operadores aritméticos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritmeticos)
- [Operadores relacionais](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_virgula)
- [Operadores bit a bit](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_bit_a_bit)
- [Operadores lógicos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_logicos)
- [Operadores de string](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_string)
- [Operador condicional (ternário)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_condicional_ternario)
- [Operador vírgula](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operador_virgula)
- [Operadores unário](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_unario)
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
- https://tableless.github.io/iniciantes/manual/js/controles-de-fluxo-e-controles-de-repeticao.html

### Loops e Iterações

Rapidamente, o que é um loop? É um código que vai ser repetindo até que uma determinada condição seja alcançada, ou até mesmo que não haja condição de parada, estes são conhecidos como loops infinitos.

- http://blog.portalrmfactory.com.br/estrutura-de-loops-em-javascript/
- https://tableless.github.io/iniciantes/manual/js/controles-de-fluxo-e-controles-de-repeticao.html

### Eventos do Navegador

Eventos são ações ou ocorrências que acontecem no sistema que estamos desenvolvendo, no qual este te alerta sobre essas ações para que você possa responder de alguma forma. Por exemplo, se o usuário clica em um botão numa pagina web, você pode querer responder a esta ação mostrando na tela uma caixa de informações. 

- https://desenvolvimentoparaweb.com/javascript/eventos-javascript/
- https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Elementos_construtivos/Events

### Funções/Métodos

Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

``` javascript
function square(numero) { 
  return numero * numero; 
}
```

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es
- https://medium.com/reactbrasil/como-o-javascript-funciona-entendendo-as-fun%C3%A7%C3%B5es-e-suas-formas-de-uso-eb387c7fa138

### Bonus: Callbacks e Promises

São comandos da linguagem que permitem desviar o fluxo do programa, dependendo de um teste.

- https://medium.com/@ericholiveira/controle-de-fluxo-em-javascript-callback-promises-e-generators-9f9e31e7d2ee

## GIT

### Merge Request

Um Pull Request (nomeação do GitHub ou Bitbucket) e Merge Request (nomeação do GitLab) é uma forma **colaborativa** de compartilhar criação ou mudanças de código no repositório, de forma que facilite ser revisado e/ou discutido entre todos os membros do time. Veja mais sobre esse recurso da ferramenta:

- https://medium.com/luizalabs/pull-merge-requests-seguindo-boas-pr%C3%A1ticas-8a7bbbad0ea7

### Conflitos

Conflitos no Git são bastante comuns e **acontecem sempre quando o mesmo arquivo foi modificado por duas versões diferentes** e essas versões não podem ser automaticamente mescladas. Veja a seguir como um conflito pode acontecer na prática:

- https://metring.com.br/guia-resolvendo-conflitos-no-git

## Desafio

Neste desafio vocês deverão criar uma calculadora e ela deve pelo menos fazer uma **soma e subtração**.

Obrigatório:

- Organize em funções diferentes para cada ação diferente, por exemplo uma função para o click nos botões numéricos e outra função para os botões de operação.
- Crie a estrutura HTML padrão, **não faça os elementos dinâmicos**. (como no desafio anterior)
- Personalize a calculadora com CSS, deixe com a cara da calculadora de seu Sistema Operacional.

Para se destacar na execução:

- Faça também as operações de multiplicação e divisão
- Faça com que possa ser feito varios calculos na mesma digitação, ex. Digitado: 1 + 2 * 2, Resultado: 5
- Crie uma branch seu-nome/basico-dos-componentes no seu repositório.
- Se preocupe com a visualização no celular. [Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
