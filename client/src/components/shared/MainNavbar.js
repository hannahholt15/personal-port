import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>
  <Navbar bg="dark" variant="dark">
    <Container>
          <nav>
            <ul>
              <Link to='/'>
                <li>Home</li>
              </Link>
              <Link to='/about'>
                <li>About</li>
              </Link>
              <Link to='/projects'>
                <li>Projects</li>
              </Link>
              <Link to='/contacts'>
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
    </Container>
  </Navbar>
  </>
)

export default MainNavbar;