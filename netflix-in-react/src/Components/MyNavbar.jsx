import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import NetflixLogo from "../assets/netflix_logo.png";
import KidsLogo from "../assets/kids_icon.png";
import { Bell, Search } from "react-bootstrap-icons";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img style={{ width: "120px", height: "50px" }} src={NetflixLogo} alt="Netflix_logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-white me-auto">
            <Nav.Link className="text-white" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#link">TV Shows</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
          <div className="text-white">
            <Search />
            <span className="mx-3">KIDS</span>
            <Bell />
            <img className="mx-3" style={{ width: "35px", height: "35px" }} src={KidsLogo} alt="KidsLogo" />
          </div>

          <NavDropdown className="text-white" id="basic-nav-dropdown"></NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
