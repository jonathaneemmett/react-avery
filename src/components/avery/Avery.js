import React, { useRef } from 'react';
import Label5160 from './labels/Label5160';
import Label5167 from './labels/Label5167';
import ReactToPrint from 'react-to-print';
import { FaPrint } from 'react-icons/fa';

const Avery = ({ data, label }) => {
	const componentRef = useRef();
	function displayLabel(item, label) {
		switch (label) {
			case '5160':
				return <Label5160 key={item.id} item={item} label={label} />;
			case '5167':
				return <Label5167 key={item.id} item={item} label={label} />;
			default:
				break;
		}
	}

	return (
		<div className='page' ref={componentRef}>
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
			{data && data.map((item) => displayLabel(item, label))}
		</div>
	);
};

export default Avery;
