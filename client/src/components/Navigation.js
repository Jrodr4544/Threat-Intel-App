import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function Navigation() {
	  return (
			<Navbar bg="dark" variant="dark">
		  	    <Navbar.Brand>
		  		<Nav.Link as={Link} to='/'>
		  			Threat-Intel-App
		  		</Nav.Link>
		  	    </Navbar.Brand>
		            <Nav className="me-auto">
		              <Nav.Link as={Link} to="/pulses">Pulses</Nav.Link>
		              <Nav.Link as={Link} to="/about">About</Nav.Link>
		            </Nav>
		        </Navbar>
		    );
}

export default Navigation;
