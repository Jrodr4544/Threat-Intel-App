import React from 'react';



const PulseList = ({pulses}) => {
	
	const renderPulses = pulses.map( pulse =>
		<p>{ pulse.name }</p>
	)
	
	return (
		<div>
			{ renderPulses }
		</div>
	)
}

export default PulseList;
