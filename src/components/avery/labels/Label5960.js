import React from 'react';

const Label5960 = ({ item }) => {
	return (
		<div className='label5960'>
			<span>{item.name}</span>
			<span>{item.address}</span>
			<span>
				{item.city}, {item.state} {item.zip}
			</span>
		</div>
	);
};

export default Label5960;
