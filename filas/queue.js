export class Queue {
	#count = 0;
	#lowestCount = 0;
	#items = {};

	enqueue(element) {
		this.#items[this.#count] = element;
		this.#count++;
	}

	isEmpty() {
		return this.size() === 0;
	}
}
