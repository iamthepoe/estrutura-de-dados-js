


<hr>
<div align="center">
<img src="https://img.shields.io/github/commit-activity/t/iamthepoe/estrutura-de-dados-js?style=for-the-badge"> <img src="https://img.shields.io/github/last-commit/iamthepoe/estrutura-de-dados-js?style=for-the-badge">
</div>

## 📋 Índice

- [Introdução](#introdução)
- [Implementação da classe Deque](#💻-implementação-da-classe-deque)
- [Algoritmos com deque]( #🎲-algoritmos-com-deque)


## ☕ Introdução

Um deque (double-ended queue), é uma estrutura de dados linear que permite a inserção e remoção de elementos tanto no início quanto no final da fila. Isso significa que os elementos podem ser adicionados e removidos das duas extremidades da estrutura, proporcionando maior flexibilidade em comparação com as filas convencionais.
<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Queue.svg"> 
</div>
Um deque pode ser visualizado como uma combinação de uma pilha (LIFO - Last In, First Out) e uma fila (FIFO - First In, First Out). Essa combinação permite uma variedade de operações e aplicações interessantes, como processamento de elementos em ordem inversa.

## 💻 Implementação da classe Deque

```
export class Deque {
  #count = 0;
  #lowestCount = 0;
  #items = {};

  addFront(element) {
    if (this.isEmpty()) return this.addBack(element);

    if (this.#lowestCount > 0) {
      this.#lowestCount--;
      this.#items[this.#lowestCount] = element;
    } else {
      for (let i = this.#count; i > 0; i--) {
        this.#items[i] = this.#items[i - 1];
      }
      this.#count++;
      this.#lowestCount = 0;
      this.#items[0] = element;
    }
  }

  addBack(element) {
    this.#items[this.#count] = element;
    this.#count++;
  }

  removeFront() {
    if (this.isEmpty()) return undefined;

    const element = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return element;
  }

  removeBack() {
    if (this.isEmpty()) return undefined;
    const item = this.#items[this.#count - 1];
    delete this.#items[this.#count - 1];
    this.#count--;
    return item;
  }

  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.#items[this.#lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.#items[this.#count - 1];
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

## 🎲 Algoritmos com deque

- **Palindrome.js**: Um algoritmo que verifica se a palavra passada no parâmetro é um <a href="https://pt.wikipedia.org/wiki/Pal%C3%ADndromo" target="_blank">palíndromo.</a> [Link](https://github.com/iamthepoe/estrutura-de-dados-js/blob/main/deque/palindrome.js)
- **Testes**: pasta com os testes automatizados de cada algoritmo. [Link](https://github.com/iamthepoe/estrutura-de-dados-js/tree/main/deque/__tests__)


<hr>
<div align="center">
Feito com ☕ e ❤ por Luca Poe
</div>
