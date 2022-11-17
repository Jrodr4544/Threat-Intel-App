import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

function Navigation() {
	  return (

		<Navbar bg="dark" variant="dark" expand="lg">
		  <Container>
			<Navbar.Brand>
		  		<Nav.Link as={Link} to='/'>
		  			Threat-Intel-App
		  		</Nav.Link>
		        </Navbar.Brand>
		      	<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
			  <Nav className="me-auto">
		              <Nav.Link as={Link} to="/pulses">Pulses</Nav.Link>
		              <Nav.Link as={Link} to="/about">About</Nav.Link>
			  </Nav>

			  <Nav>
			    <Nav.Link as={Link} to="/login">Login</Nav.Link>
			  </Nav>
			</Navbar.Collapse>
		  </Container>
	    	 </Navbar>
		    );
}

export default Navigation;
