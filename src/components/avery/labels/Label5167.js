import React from 'react';

const Label5167 = ({ item }) => {
	return (
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
