import { faker } from '@faker-js/faker';

export const messages = Array.from({ length: 75 }).map((_, i) => {
	return {
		id: i,
		code: faker.number.int({ min: 100, max: 530 }),
		message: faker.word.noun(3),
		url: faker.internet.url()
	};
});
