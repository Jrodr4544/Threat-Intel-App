import React from 'react';
import Card from 'react-bootstrap/Card';


const PulseList = ({pulses}) => {
	
	const renderPulses = pulses.map( pulse =>
	    <Card key={ pulse.id }>
	      <Card.Body>
		<Card.Title>{ pulse.name }</Card.Title>
		<Card.Subtitle className="mb-2 text-muted">Author: { pulse.author_name }</Card.Subtitle>
		<Card.Text>
			{ pulse.description }
		</Card.Text>

		<Card.Subtitle className="mb-2 text-muted">TLP: { pulse.tlp }</Card.Subtitle>
		<Card.Subtitle className="mb-2 text-muted">Adversary: { (pulse.adversary === "") ? "None" : pulse.adversary }</Card.Subtitle>
		{/* Need to add indicators, industries, malware_families, references, and tags */}
		<Card.Link href="#">Card Link</Card.Link>
		<Card.Link href="#">Another Link</Card.Link>
	      </Card.Body>
	    </Card>
	)
	
	return (
		<div>
			{ renderPulses }
		</div>
	)
}

export default PulseList;
