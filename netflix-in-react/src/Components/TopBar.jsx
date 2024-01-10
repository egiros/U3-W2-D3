import { Button, ButtonGroup, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";

const TopBar = () => {
  return (
    <div className="container-fluid d-flex justify-content-between bg-body" bg="dark" data-bs-theme="dark">
      <div className="d-flex align-items-center text-white my-2">
        <h1>Movies</h1>
        <div className=" mx-3">
          <ButtonGroup>
            <DropdownButton variant="outline-light" as={ButtonGroup} title="Genres" id="bg-nested-dropdown">
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Commedy</Dropdown.Item>
              <Dropdown.Item eventKey="3">Drama</Dropdown.Item>
              <Dropdown.Item eventKey="4">Science Fiction</Dropdown.Item>
              <Dropdown.Item eventKey="5">Horror</Dropdown.Item>
              <Dropdown.Item eventKey="6">Adventure</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
      </div>
      <div className="d-flex text-white my-3">
        <div className="mx-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-text-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
            ></path>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-grid-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"></path>
          </svg>
        </div>
      </div>
    </div>

    // <div className="bg-body-tertiary text-white text-start" bg="dark" data-bs-theme="dark">
    //   <Row className="">
    //     <Col xs="2">
    //       <h2>Movies</h2>
    //     </Col>
    //     <Col xs="4">
    //       <ButtonGroup>
    //         <DropdownButton as={ButtonGroup} title="Genres" id="bg-nested-dropdown">
    //           <Dropdown.Item eventKey="1">Action</Dropdown.Item>
    //           <Dropdown.Item eventKey="2">Commedy</Dropdown.Item>
    //           <Dropdown.Item eventKey="3">Drama</Dropdown.Item>
    //           <Dropdown.Item eventKey="4">Science Fiction</Dropdown.Item>
    //           <Dropdown.Item eventKey="5">Horror</Dropdown.Item>
    //           <Dropdown.Item eventKey="6">Adventure</Dropdown.Item>
    //         </DropdownButton>
    //       </ButtonGroup>
    //     </Col>
    //     <Col xs="6"></Col>
    //   </Row>
    // </div>
  );
};

export default TopBar;
