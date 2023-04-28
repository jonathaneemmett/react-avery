// Fake data generator for testing
export async function getData(count = 10) {
	const newItems = [];

	for (let i = 0; i < count; i++) {
		let id = i + 1;
		newItems.push({
			id: id,
			name: `Name ${id}`,
			address: `${id} Main St`,
			city: 'Anytown',
			state: 'FL',
			zip: '12345',
		});
	}

	return newItems;
}
