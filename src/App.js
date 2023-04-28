import React, { useEffect, useState } from 'react';
import './App.css';

import { getData } from './data/data.js';

import Avery from './components/avery/Avery';

function App() {
	// 5167 and 5960. 5167 is 1/2 page, 5960 is full page
	//https://boulderinformationservices.com/blog/print-avery-labels-using-css-and-html/

	const [data, setData] = useState();
	const [label, setLabel] = useState('');

	useEffect(() => {
		getData(30).then((data) => setData(data));
	}, []);

	function renderAvory() {
		return <Avery data={data} label={label} />;
	}

	return (
		<div className='container'>
			<div className='buttonRow'>
				<button onClick={() => setLabel('5167')}>5167</button>
				<button onClick={() => setLabel('5960')}>5960</button>
			</div>
			{label && data && renderAvory()}
		</div>
	);
}

export default App;
