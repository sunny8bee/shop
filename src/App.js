import logo from "./logo.svg";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
// import bg from "./img/walnut.png";
// import almond from "./img/almond.jpg";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Nut's time</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">nuts상품</Nav.Link>
            <Nav.Link href="#pricing">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        // style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="almond">
            <div className="productDescription">
              <h4>Almond</h4>
              <p></p>
            </div>
          </div>

          <div className="cashew">
            <div className="productDescription">
              <h4>Cashew</h4>
              <p></p>
            </div>
          </div>

          <div className="hodu">
            <div className="productDescription">
              <h4>walnut</h4>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
