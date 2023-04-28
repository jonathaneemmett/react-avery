import React, { useRef, useEffect, useState } from 'react';
import Label5160 from './labels/Label5160';
import Label5167 from './labels/Label5167';
import Label5960 from './labels/Label5960';
import ReactToPrint from 'react-to-print';
import { FaPrint } from 'react-icons/fa';

const Avery = ({ data, label }) => {
	const componentRef = useRef();
	const [pages, setPages] = useState([]);

	useEffect(() => {
		paginate();
	}, [data]);

	useEffect(() => {
		console.log(pages);
	}, [pages]);

	function displayLabel(item, label) {
		switch (label) {
			case '5160':
				return <Label5160 key={item.id} item={item} label={label} />;
			case '5167':
				return <Label5167 key={item.id} item={item} label={label} />;
			case '5960':
				return <Label5960 key={item.id} item={item} label={label} />;
			default:
				break;
		}
	}

	function setPageLimit() {
		switch (label) {
			case '5160':
				return 30;
			case '5167':
				return 80;
			case '5960':
				return 30;
			default:
				return 0;
		}
	}

	function paginate() {
		if (!data) return;
		const newPages = [];

		while (data.length) {
			newPages.push(data.splice(0, setPageLimit()));
		}

		setPages([...newPages]);
	}

	return (
		<div className='pageContainer' ref={componentRef}>
			<div className='buttonContainer'>
				<ReactToPrint
					copyStyles={true}
					trigger={() => (
						<button>
							<FaPrint />
						</button>
					)}
					content={() => componentRef.current}
				/>
			</div>
			{pages.length > 0 &&
				pages.map((page, index) => (
					<div className='page' key={index}>
						{page.map((item) => displayLabel(item, label))}
					</div>
				))}
		</div>
	);
};

export default Avery;
