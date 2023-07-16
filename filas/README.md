

<hr>
<div align="center">
<img src="https://img.shields.io/github/commit-activity/t/iamthepoe/estrutura-de-dados-js?style=for-the-badge"> <img src="https://img.shields.io/github/last-commit/iamthepoe/estrutura-de-dados-js?style=for-the-badge">
</div>

## 📋 Índice

- [Introdução](#introdução)
- [Implementação da classe Queue](#💻-implementação-da-classe-queue)
- [Algoritmos com pilha]( #🎲-algoritmos-com-fila)


## ☕ Introdução

Uma fila é uma estrutura de dados que organiza os elementos de forma linear. A fila segue o princípio **"FIFO"** (First In, First Out), onde o primeiro elemento inserido na fila é o primeiro a ser removido, como em uma fila de pessoas esperando em um caixa, onde o primeiro que chegou é o primeiro a ser atendido.
<br><hr>
<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Queue.svg" width="200px">
</div>
<br>

A fila possui duas operações principais: **enqueue** (enfileirar) e **dequeue** (desenfileirar). A operação enqueue **adiciona um elemento ao final da fila**, enquanto a operação dequeue **remove o elemento do início da fila** e ajusta a posição dos demais elementos.

## 💻 Implementação da classe Queue

```
export class Queue {
  #count = 0;
  #lowestCount = 0;
  #items = {};

  enqueue(element) {
    this.#items[this.#count] = element;
    this.#count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const element = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return element;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.#items[this.#lowestCount];
  }

  size() {
    return this.#count - this.#lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.#count = 0;
    this.#lowestCount = 0;
    this.#items = {};
  }

  toString() {
    if (this.isEmpty()) return '';
    let objString = `${this.#items[this.#lowestCount]}`;
    for (let i = this.#lowestCount + 1; i < this.#count; i++) {
      objString = `${objString},${this.#items[i]}`;
    }
    return objString;
  }
}
```

## 🎲 Algoritmos com fila

- **Hot Potato**: um algoritmo que simula o jogo de batata quente utilizando uma fila circular. [Link](https://github.com/iamthepoe/estrutura-de-dados-js/blob/main/filas/hotPotato.js)
- **Testes**: pasta com os testes automatizados de cada algoritmo. [Link](https://github.com/iamthepoe/estrutura-de-dados-js/tree/main/filas/__tests__)


<hr>
<div align="center">
Feito com ☕ e ❤ por Luca Poe
</div>
