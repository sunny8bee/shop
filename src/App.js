import logo from "./logo.svg";
import { useState } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.js";

function App() {
  let [nuts] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Nut's time</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to href="/">
              Home
            </Nav.Link>
            <Nav.Link href="detail">nuts상품</Nav.Link>
            <Nav.Link href="basket">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">home</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        {/* 📌페이지 = Route */}

        <Route
          // ✅메인페이지
          path="/"
          element={
            <>
              <div
                className="main-bg"
                // style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>
              <div className="container">
                <div className="row">
                  {/* Card 컴포넌트 활용법 */}
                  {/* 
              <Card nuts={nuts[0]} i={1} />
              <Card nuts={nuts[1]} i={2} />
              <Card nuts={nuts[2]} i={3} />
               */}

                  {/* map 반복문쓰기 */}
                  {nuts.map((a, i) => {
                    return <Card nuts={nuts[i]} i={i}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />

        <Route
          //✅상세페이지 = 상품페이지
          path="/detail"
          element={<Detail />}
        />

        <Route
          //✅장바구니
          path="/basket"
          element={
            <>
              <div>장바구니</div>
            </>
          }
        />
      </Routes>
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
