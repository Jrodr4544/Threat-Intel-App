import React from 'react';
import Card from 'react-bootstrap/Card';


const PulseList = ({pulses}) => {
	
	const renderPulses = pulses.map( pulse =>
		<>
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

			<div class="flex-container">Indicators:
			{
				(pulse.indicators.length > 0) ?
					pulse.indicators.map( indicator => {
						return (
							<div>
								<Card.Text className="indicators" href="#" key={indicator.id}>{indicator.category}: {indicator.value}</Card.Text>
							</div>
						)
					})
				:
					null
			}	
			</div>

			{/* Pulse References */}


			<ul>{(pulse.references.length > 0) ? "References:" : null}
			{
				(pulse.references.length > 0) ?
					pulse.references.map( reference => {
						return (
								<li><Card.Link href="#" key={reference.id}>{reference.resource}</Card.Link></li>
						)
					})
				:
					null
			}	
			</ul>

			<Card.Link href="#">Another Link</Card.Link>
			<Card.Link href="#">Card Link</Card.Link>
		      </Card.Body>
		    </Card>
			<br/>
		</>
	)
	
	return (
		<div>
			{ renderPulses }
		</div>
	)
}

export default PulseList;
