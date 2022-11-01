import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

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


		   	<Accordion flush>
		      		<Accordion.Item eventKey="0">
		        		<Accordion.Header>Targeted Countries:</Accordion.Header>
		        		<Accordion.Body>
						<div class="flex-container">
			{
				(pulse.targeted_countries.length > 0) ?
					pulse.targeted_countries.map( country => {
						return (
							<div>
								<Card.Text href="#" key={ country.id }>{ country.name }</Card.Text>
							</div>
						)
					})
				:
							<div>None</div>
			}	
						</div>
		        		</Accordion.Body>
		      		</Accordion.Item>
		    	</Accordion>


			{/* Industries */}


		   	<Accordion flush>
		      		<Accordion.Item eventKey="0">
		        		<Accordion.Header>Industries:</Accordion.Header>
		        		<Accordion.Body>
						<div class="flex-container">
			{
				(pulse.industries.length > 0) ?
					pulse.industries.map( industry => {
						return (
							<div>
								<Card.Text href="#" key={ industry.id }>{ industry.title }</Card.Text>
							</div>
						)
					})
				:
							<div>None</div>
			}	
						</div>
		        		</Accordion.Body>
		      		</Accordion.Item>
		    	</Accordion>

			{/* Malware Families */}
					
			
		   	<Accordion flush>
		      		<Accordion.Item eventKey="0">
		        		<Accordion.Header>Malware Families:</Accordion.Header>
		        		<Accordion.Body>
						<div class="flex-container">
			{
				(pulse.malware_families.length > 0) ?
					pulse.malware_families.map( malware_family => {
						return (
							<div>
								<Card.Text href="#" key={ malware_family.id }>{ malware_family.name }</Card.Text>
							</div>
						)
					})
				:
							<div>None</div>
			}	
						</div>
		        		</Accordion.Body>
		      		</Accordion.Item>
		    	</Accordion>


			{/* Indicators */}

		   	<Accordion flush>
		      		<Accordion.Item eventKey="0">
		        		<Accordion.Header>Indicators:</Accordion.Header>
		        		<Accordion.Body>
						<div class="flex-container">
			{
				(pulse.indicators.length > 0) ?
					pulse.indicators.map( indicator => {
						return (
							<div>
								<Card.Text href="#" key={ indicator.id }>{ indicator.category }: { indicator.value }</Card.Text>
							</div>
						)
					})
				:
							<div>None</div>
			}	
						</div>
		        		</Accordion.Body>
		      		</Accordion.Item>
		    	</Accordion>

			{/* Pulse References */}


			<ul>{ (pulse.references.length > 0) ? "References:" : null }
			{
				(pulse.references.length > 0) ?
					pulse.references.map( reference => {
						return (
								<li><Card.Link href="#" key={ reference.id }>{ reference.resource }</Card.Link></li>
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
