import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

function Navigation() {
	  return (
		  {/* find template example in react-bootstrap with collapsable navbar and implement here */}
			<Navbar expand="lg" bg="dark" variant="dark">
		  		<Container>
		  	    <Navbar.Brand>
		  		<Nav.Link as={Link} to='/'>
		  			Threat-Intel-App
		  		</Nav.Link>
		  	    </Navbar.Brand>
		            <Nav className="me-auto">
		              <Nav.Link as={Link} to="/pulses">Pulses</Nav.Link>
		              <Nav.Link as={Link} to="/about">About</Nav.Link>
		            </Nav>

			    <Nav>
		              <Nav.Link href="#deets">More deets</Nav.Link>
		              <Nav.Link href="#memes">
		                Dank memes
		              </Nav.Link>
		            </Nav>
		  		</Container>
		        </Navbar>
		    );
}

export default Navigation;
