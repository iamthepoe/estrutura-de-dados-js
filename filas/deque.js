export class Deque {
	#count = 0;
	#lowestCount = 0;
	#items = {};

	size() {
		return this.#count - this.#lowestCount;
	}

	isEmpty() {
		return this.size() === 0;
	}
}
