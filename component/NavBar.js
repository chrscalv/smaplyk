import Link from "next/link";
import { Navbar, Nav, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#">PPDB</Nav.Link>
            <Link href="/artikel">Artikel</Link>
            <Nav.Link href="/tentang">Tentang</Nav.Link>
            <Nav.Link href="#">E-Learning</Nav.Link>
          </Nav>
          
          <Navbar.Text>
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://youtube.com">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;