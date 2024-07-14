import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbars = () => {
    const cartProducts = useSelector(state => state.cart)
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">React Toolkit</Navbar.Brand>
              <Nav>
                <Nav.Link to="/" as={ Link }>Products</Nav.Link>
              </Nav>
              <Navbar.Toggle />
              <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text>
                    <Nav.Link to="/cart" as={ Link }>My bag { cartProducts.length }</Nav.Link>
                </Navbar.Text>
              </Navbar.Collapse>
              
          </Container>
      </Navbar>
    );
}

export default Navbars