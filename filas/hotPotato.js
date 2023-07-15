import { Queue } from './queue.js';

export const hotPotato = (elementList, num) => {
	const queue = new Queue();
	const eliminated = [];

	elementList.forEach((element) => {
		queue.enqueue(element);
	});

	while (queue.size() > 1) {
		for (let i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue);
		}
		eliminated.push(queue.dequeue());
	}

	return {
		eliminated,
		winner: queue.dequeue(),
	};
};
