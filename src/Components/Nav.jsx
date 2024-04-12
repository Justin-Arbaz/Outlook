import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Pages/images/logo.png';
import '../Components/Nav.css';
import { LiaSearchSolid } from "react-icons/lia";
import { PiUserCirclePlusLight } from "react-icons/pi";




function NavScrollExample() {
  return (
<>



<Navbar expand="lg" className="bg-body-tertiary m-auto w-100 position-sticky">
      <Container>
        <Navbar.Brand href="#" className='logo'><img src={logo} alt='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='fw-bold '>|</Nav.Link>
            <Nav.Link href="#action2" className='fw-normal fs-5 text-dark'>Microsoft 365</Nav.Link>

            <Nav.Link href="#action3">Outlook</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action6">For business</Nav.Link>
            <Nav.Link href="#action7" className='action7'>Plans and pricing</Nav.Link>
            <Nav.Link href="#action8" className='action8'>Support</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown" className='navbarScrollingDropdown d-none '>
              <NavDropdown.Item href="#action9">Plans and pricing</NavDropdown.Item>
              <NavDropdown.Item href="#action1">
              Support
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className='border border-dark rounded ms-2 py-1 px-2 text-center fw-bold'>Buy Now</Nav.Link>

           

          </Nav>

          <NavDropdown title="All Microsoft" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action2" className='search ms-3 d-flex gap-1'>Search <LiaSearchSolid className='fs-5' />
          </Nav.Link>
          <Nav.Link href="#action2" className='search-icon ms-3 d-none'><LiaSearchSolid className='fs-5' /></Nav.Link>
          <Nav.Link href="#action2" className='ms-3'>Sign in</Nav.Link>

          <Nav.Link href="#action2" className='ms-3'><PiUserCirclePlusLight className='fs-2' /></Nav.Link>



        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default NavScrollExample;