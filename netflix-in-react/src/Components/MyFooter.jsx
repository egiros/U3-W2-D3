import { Button, Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <Container fluid className="bg-body text-white" bg="dark" data-bs-theme="dark">
      <Row>
        <Col xs={2}></Col>
        <Col xs={8}>
          <Container fluid className=" text-sm-start">
            <Row>
              <Col className="mb-2">
                <Button variant="trasparent">
                  <Facebook />
                </Button>
                <Button variant="trasparent">
                  <Instagram />
                </Button>
                <Button variant="trasparent">
                  <Twitter />
                </Button>
                <Button variant="trasparent">
                  <Youtube />
                </Button>
              </Col>
            </Row>

            <Row className="g-1">
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3">Audio and Subtitles</Col>
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3">Audio Description</Col>
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3">Help Center</Col>
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3">Gift Cards</Col>
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3">Media Center</Col>
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3">Investor Relations</Col>
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3">Jobs</Col>
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3">Terms of Use</Col>
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3">Privacy</Col>
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3">Legal Notices</Col>
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3">Cookie Preferences</Col>
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3">Corporate Information</Col>
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">Contact Us</Col>
            </Row>

            <Row>
              <Col>
                <Button className="bg-dark border-white">Service Code</Button>
              </Col>
            </Row>
            <Row>
              <Col className="fs-6 mt-3 mb-4 ">
                <span>&copy; 1997-2019 Netflix, inc.</span>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
