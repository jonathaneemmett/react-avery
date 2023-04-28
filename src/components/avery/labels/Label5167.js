import React from 'react';

const Label5167 = ({ item }) => {
	return (
		// <div className='label5167'>
		// 	<div className='label5160__name'>{item.name}</div>
		// 	<div className='label5160__address'>{item.address}</div>
		// 	<div className='label5160__city'>
		// 		{item.city}, {item.state} {item.zip}
		// 	</div>
		// </div>
		<div className='label5167'>
			<span>{item.name}</span>
			<span>{item.address}</span>
			<span>
				{item.city}, {item.state} {item.zip}
			</span>
		</div>
	);
};

export default Label5167;
