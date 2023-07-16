
<hr>
<div align="center">
<img src="https://img.shields.io/github/commit-activity/t/iamthepoe/estrutura-de-dados-js?style=for-the-badge"> <img src="https://img.shields.io/github/last-commit/iamthepoe/estrutura-de-dados-js?style=for-the-badge">
</div>

## 📋 Índice

- [Introdução](#introdução)
- [Implementação da classe Stack](#💻-implementação-da-classe-stack)
- [Algoritmos com pilha]( #🎲-algoritmos-com-pilha)


## ☕ Introdução

Uma pilha é uma coleção de elementos organizados de forma linear, seguindo o princípio **"LIFO"** (Last In, First Out), portanto, o último elemento inserido na pilha é o primeiro a ser removido. Essa estrutura segue o conceito de uma pilha de objetos do mundo real, onde os itens são empilhados uns sobre os outros.
<br><hr>
<div align="center">
 <img src="https://freesvg.org/img/1488216538.png" width="200px">
</div>
<br>

A pilha possui duas operações fundamentais: **push** (inserção) e **pop** (remoção). A operação push **adiciona um elemento ao topo da pilha**, deslocando os elementos existentes para baixo, enquanto a operação pop **remove o elemento mais recente**, que está no topo da pilha, e ajusta a posição dos demais elementos.

Além das operações básicas, outras operações comuns em uma pilha incluem **peek** (espiar) e **isEmpty** (verificar se a pilha está vazia). A operação peek permite **visualizar o elemento no topo da pilha sem removê-lo**, enquanto a operação isEmpty **retorna verdadeiro se a pilha estiver vazia e falso caso contrário.**

## 💻 Implementação da classe Stack

```
export class StackObject {
	#count = 0;
	#items = {};

	push(element) {
		this.#items[this.#count] = element;
		this.#count++;
	}

	pop() {
		if (this.isEmpty()) return undefined;
		const item = this.#items[this.#count - 1];
		delete this.#items[this.#count - 1];
		this.#count--;
		return item;
	}

	peek() {
		if (this.isEmpty()) return undefined;
		return this.#items[this.#count - 1];
	}

	isEmpty() {
		return this.#count === 0;
	}

	size() {
		return this.#count;
	}

	clear() {
		this.#items = {};
		this.#count = 0;
	}

	toString() {
		if (this.isEmpty()) return '';
		let stringObj = `${this.#items[0]}`;
		for (let i = 1; i < this.#count; i++) {
			stringObj = `${stringObj}, ${this.#items[i]}`;
		}
		return stringObj;
	}
}
```
obs: a pilha foi implementada com objetos, por isso o nome "StackObject", há outra implementação no repositório, mas <a href="https://github.com/iamthepoe/estrutura-de-dados-js/edit/main/pilhas/stackArray.js">feita com arrays</a>.
## 🎲 Algoritmos com pilha

- **Conversor de base**: um algoritmo que converte um número decimal para um número da base desejada (hexadecimal, binária, etc.) [Link](https://github.com/iamthepoe/estrutura-de-dados-js/blob/main/pilhas/baseConverter.js)
 - **Conversor de decimal para binário**: um algoritmo que converte um número decimal para binário. [Link](https://github.com/iamthepoe/estrutura-de-dados-js/blob/main/pilhas/decimalToBinary.js)
- **Testes**: pasta com os testes automatizados de cada algoritmo. [Link](https://github.com/iamthepoe/estrutura-de-dados-js/tree/main/pilhas/__tests__)


<hr>
<div align="center">
Feito com ☕ e ❤ por Luca Poe
</div>

