import React, { useRef, useEffect, useState } from 'react';
import './App.css';

import { getData } from './data/data.js';

import Avery from './components/avery/Avery';

function App() {
	// 5167 and 5960. 5167 is 1/2 page, 5960 is full page
	//https://boulderinformationservices.com/blog/print-avery-labels-using-css-and-html/

	const [data, setData] = useState();

	useEffect(() => {
		getData(80).then((data) => setData(data));
	}, []);

	return (
		<div className='labelContainer'>
			<Avery data={data} label='5167' />
		</div>
	);
}

export default App;
