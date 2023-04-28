import React from 'react';

const Label5160 = ({ item }) => {
	return (
		<div className='label5160'>
			<div className='label5160__name'>{item.name}</div>
			<div className='label5160__address'>{item.address}</div>
			<div className='label5160__city'>
				{item.city}, {item.state} {item.zip}
			</div>
		</div>
	);
};

export default Label5160;
