// export const data = [
// 	{
// 		id: 1,
// 		name: 'Joe Doe',
// 		address: '123 Main St',
// 		city: 'Anytown',
// 		state: 'FL',
// 		zip: '12345',
// 	},
// 	{
// 		id: 2,
// 		name: 'Jane Doe',
// 		address: '456 Main St',
// 		city: 'Anytown',
// 		state: 'FL',
// 		zip: '12345',
// 	},
// 	{
// 		id: 3,
// 		name: 'John Doe',
// 		address: '789 Main St',
// 		city: 'Anytown',
// 		state: 'FL',
// 		zip: '12345',
// 	},
// 	{
// 		id: 4,
// 		name: 'Jane Smith',
// 		address: '123 Main St',
// 		city: 'Anytown',
// 		state: 'FL',
// 		zip: '12345',
// 	},
// 	{
// 		id: 5,
// 		name: 'John Smith',
// 		address: '456 Main St',
// 		city: 'Anytown',
// 		state: 'FL',
// 		zip: '12345',
// 	},
// 	{
// 		id: 6,
// 		name: 'Joe Smith',
// 		address: '789 Main St',
// 		city: 'Anytown',
// 		state: 'FL',
// 		zip: '12345',
// 	},
// 	{
// 		id: 7,
// 		name: 'Joe Smith',
// 		address: '789 Main St',
// 		city: 'Anytown',
// 		state: 'FL',
// 		zip: '12345',
// 	},
// 	{
// 		id: 8,
// 		name: 'Joe Smith',
// 		address: '789 Main St',
// 		city: 'Anytown',
// 		state: 'FL',
// 		zip: '12345',
// 	},
// ];

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
