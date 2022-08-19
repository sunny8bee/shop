import logo from "./logo.svg";
import { useState } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
// import Styled from "./components/Styled";
// import bg from "./img/walnut.png";
// import almond from "./img/almond.jpg";
import data from "./data.js";

function App() {
  let [nuts] = useState(data);

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
          {/* Card 컴포넌트 활용법 */}
          {/* <Col>
              <Card nuts={nuts[0]} i={1} />
            </Col>
            <Col>
              <Card nuts={nuts[1]} i={2} />
            </Col>
            <Col>
              <Card nuts={nuts[2]} i={3} />
            </Col> */}
          {nuts.map((a, i) => {
            return <Card nuts={nuts[i]} i={i}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}

//컴포넌트 Card 생성과 프롭스 전송
function Card(props) {
  return (
    <div className="col-md-4">
      <img src={require("./img/nuts" + (props.i + 1) + ".jpg")} />
      <div className="productDescription">
        <h5>{props.nuts.title}</h5>
        <div className="price">
          <p>{props.nuts.price}</p>
        </div>
      </div>
    </div>
  );
}
export default App;
