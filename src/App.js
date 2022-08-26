import logo from "./logo.svg";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.js";

function App() {
  let [nuts] = useState(data);

  // 페이지 이동을 도와주는 함수 훅
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Nut's time</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
                // navigate(-1);  이전페이지
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              nuts상품
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              장바구니
            </Nav.Link>
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
          //파라미터
          path="/detail/:id"
          element={<Detail nuts={nuts} />} //data 불러오기위해서 nuts={nuts}
          //Detail.js 로 이동해서 props 적용
        />

        <Route
          //✅장바구니
          path="/cart"
          element={
            <>
              <div>장바구니</div>
            </>
          }
        />

        {/* 📌404 페이지 만들기  */}
        <Route path="*" element={<div>없는 페이지입니다.</div>} />

        {/* <Route path="/about/member" element={<About/>} />
        <Route path="/about/location" element={<About/>} /> */}

        {/* 📌Nested Routes 위와 동일하게 만들기 */}
        {/* 여러가지 페이지가 필요할때 쓰면 유용함 */}
        {/* 페이지 간에 차이점이 크게 없을 때  */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>

        {/* /event/one , /event/two를 nested router를 이용해서 만들어보기 */}
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>데일리견과 7day 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰 받기</p>} />
        </Route>
      </Routes>
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
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
