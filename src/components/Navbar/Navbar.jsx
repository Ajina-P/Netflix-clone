import { Navbar, Container, Nav, Form } from "react-bootstrap";

function NavbarSection() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{paddingLeft:"2.7rem"}}>
          <img
            style={{ width: "150px" }}
            src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
            alt="netflix logo"
          />
        </Navbar.Brand>
        <Nav className="mx-5">
          <Form.Select size="sm">
            <option value="eng" lang="lg">
              English
            </option>
          </Form.Select>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
