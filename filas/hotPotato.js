import { Queue } from './queue.js';

const hotPotato = (elementList, num) => {
	const queue = new Queue();
	const eliminatedList = [];

	elementList.forEach((element) => {
		queue.enqueue(element);
	});
};
