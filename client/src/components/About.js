import Card from 'react-bootstrap/Card';

const About = () => {

	return (

		    <Card>
		      <Card.Body>
			<h1> About </h1>
			Threat-Intel-App is a web application that interacts with AlienVault's Open Threat Exchange(OTX). It queries the OTX DirectConnect API for threat intelligence data that is returned in the form of "pulses". Each pulse has its own Indicators of Compromise (IOCs), and includes IP addresses, domains, hostnames, file hashes (MD5, SHA1, SHA256, PEHASH, etc), CVE numbers, URLs, email addresses, file paths, mutex names, and more. 
		      </Card.Body>
		    </Card>

	)
}

export default About;
