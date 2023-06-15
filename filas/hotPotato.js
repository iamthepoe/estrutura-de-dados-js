import { Queue } from './queue.js';

const hotPotato = (elementList, num) => {
	const queue = new Queue();
	const eliminatedList = [];

	elementList.forEach((element) => {
		queue.enqueue(element);
	});

	while (queue.size() > 1) {
		for (let i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue);
		}
		eliminatedList.push(queue.dequeue());
	}
};
