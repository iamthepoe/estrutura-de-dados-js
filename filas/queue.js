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

	size() {
		return this.#count - this.#lowestCount;
	}

	isEmpty() {
		return this.size() === 0;
	}
}
