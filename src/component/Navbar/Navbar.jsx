import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { useContext } from 'react';
import { CountryContext } from '../../screens/home/home';
import { useNavigate } from 'react-router';

function CustomNavbar() {
  const fliter = useContext(CountryContext);
  console.log(fliter);
  const List=["All","Asia","Europe"]
  const navigate = useNavigate();
  return (
    <Navbar expand="xl" className="bg-body-tertiary custom-navbar">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {List.map((item)=><Nav.Link key={item} active={fliter.filterType===item}  onClick={() => {
              // navigate("/signin");
              fliter.setfilterType(item)}}>{item}</Nav.Link>)}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;