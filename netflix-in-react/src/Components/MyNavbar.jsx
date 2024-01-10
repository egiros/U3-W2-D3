import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import NetflixLogo from "../assets/netflix_logo.png";
import KidsLogo from "../assets/kids_icon.png";
import { Bell, Search } from "react-bootstrap-icons";
import { NavLink, useLocation } from "react-router-dom";

const MyNavbar = () => {
  const location = useLocation();
  console.log("LOCATION", location);

  const isValidLocation =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/tv-shows" ||
    location.pathname === "/movies" ||
    location.pathname === "/*";
  // ignorerà la visualizzazione della navbar per tutte le rotte non valide

  if (isValidLocation) {
    return (
      <Navbar expand="lg" className="bg-body" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img style={{ width: "120px", height: "50px" }} src={NetflixLogo} alt="Netflix_logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-white me-auto">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/tv-shows" className="nav-link">
                Tv Shows
              </NavLink>
              <NavLink to="/movies" className="nav-link">
                Movies
              </NavLink>
              <NavLink to="*" className="nav-link">
                Recently Added
              </NavLink>
              <NavLink to="*" className="nav-link">
                My List
              </NavLink>
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
  }
};

export default MyNavbar;
