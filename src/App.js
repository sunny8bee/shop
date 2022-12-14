import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.js";
import Cart from "./pages/Cart.js";
import axios from "axios";

function App() {
  let [nuts, setNuts] = useState(data);
  // ๐๋ฒํผ ์นด์ดํธ ๋ฃ์ด์ฃผ๊ธฐ์ํด
  let [count, setCount] = useState(0);
  // ํ์ด์ง ์ด๋์ ๋์์ฃผ๋ ํจ์ ํ
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
                // navigate(-1);  ์ด์ ํ์ด์ง
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              nuts์ํ
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              ์ฅ๋ฐ๊ตฌ๋
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">home</Link>
      <Link to="/detail">์์ธํ์ด์ง</Link> */}

      <Routes>
        {/* ๐ํ์ด์ง = Route */}

        <Route
          // โ๋ฉ์ธํ์ด์ง
          path="/"
          element={
            <>
              <div
                className="main-bg"
                // style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>
              <div className="container">
                <div className="row">
                  {/* map ๋ฐ๋ณต๋ฌธ์ฐ๊ธฐ */}
                  {nuts.map((a, i) => {
                    return <Card nuts={nuts[i]} i={i}></Card>;
                  })}
                </div>
              </div>

              {/* ๋ฒํผ๋ง๋ค์ด์ axios์ฐ๊ฒฐ */}
              <button
                onClick={() => {
                  // ๐more๋ฒํผ if-else๋ฌธ๊ณผ ์นด์ดํธ๋ฅผ ํตํด
                  // ๋ฒํผ์ ๋๋ฅผ ๋ ๋ง๋ค ์ํ ๋ ๋ณด์ฌ์ฃผ๊ธฐ
                  // ๋ ์ด์ ์์ ์ ์ํ์ด ์๋ค๊ณ  ์๋ ค์ฃผ๊ธฐ
                  setCount(count + 1);
                  // ๐ ๋ฒํผ 1๋ฒ ํด๋ฆญ ์
                  if (count == 0) {
                    /*๐ฆaxios.get(URL)์ ํ์ฌ GET์์ฒญํ๊ธฐ*/
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then(result => {
                        // ๋ณต์ฌ๋ณธ๋ง๋ค๊ธฐ...
                        setNuts([...nuts, ...result.data]);
                        /*๐ฆ๊ฐ์ ธ์จ ๊ฒฐ๊ณผ๋ result.data์์ ์์.*/
                      })
                      //๐ฆ์คํจํ์ ๋ ์คํํ  ์ฝ๋ .catch() ์์ ์ ์ด์ค.(์์ธ์ฒ๋ฆฌ)
                      .catch(() => {
                        console.log("request failed");
                      });
                    // ๐ ๋ฒํผ 2๋ฒ ํด๋ฆญ ์
                  } else if (count == 1) {
                    /*๐ฆaxios.get(URL)์ ํ์ฌ GET์์ฒญํ๊ธฐ*/
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then(result => {
                        // ๋ณต์ฌ๋ณธ๋ง๋ค๊ธฐ...
                        setNuts([...nuts, ...result.data]);
                        /*๐ฆ๊ฐ์ ธ์จ ๊ฒฐ๊ณผ๋ result.data์์ ์์.*/
                      })
                      //๐ฆ์คํจํ์ ๋ ์คํํ  ์ฝ๋ .catch() ์์ ์ ์ด์ค.(์์ธ์ฒ๋ฆฌ)
                      .catch(() => {
                        console.log("request failed");
                      });
                    // ๐ ๋ฒํผ 3๋ฒ ํด๋ฆญ ์ : ์์์ ์๋ฆฌ๊ธฐ
                  } else if (count >= 2) {
                    alert("์ํ์ด ์กด์ฌํ์ง ์์ต๋๋ค.");
                  }

                  // ๐ฃ์๋ฒ๋ก ๋ฐ์ดํฐ ์ ์กํ๋ POST์์ฒญ
                  // axios.post('/')
                  // ๐ฃ๋์์ ajax์์ฒญ ์ฌ๋ฌ๊ฐ ํ๋ ค๋ฉด All
                  // Promise.all([ axios.get('/url1'), axios.get('/url2') ] )
                  // .then(()=>{})
                }}
              >
                more
              </button>
            </>
          }
        />

        <Route
          //โ์์ธํ์ด์ง = ์ํํ์ด์ง
          //ํ๋ผ๋ฏธํฐ
          path="/detail/:id"
          element={<Detail nuts={nuts} />} //data ๋ถ๋ฌ์ค๊ธฐ์ํด์ nuts={nuts}
          //Detail.js ๋ก ์ด๋ํด์ props ์ ์ฉ
        />

        <Route
          //โ์ฅ๋ฐ๊ตฌ๋
          path="/cart"
          element={<Cart />}
        />

        {/* ๐404 ํ์ด์ง ๋ง๋ค๊ธฐ  */}
        <Route path="*" element={<div>์๋ ํ์ด์ง์๋๋ค.</div>} />

        {/* <Route path="/about/member" element={<About/>} />
        <Route path="/about/location" element={<About/>} /> */}

        {/* ๐Nested Routes ์์ ๋์ผํ๊ฒ ๋ง๋ค๊ธฐ */}
        {/* ์ฌ๋ฌ๊ฐ์ง ํ์ด์ง๊ฐ ํ์ํ ๋ ์ฐ๋ฉด ์ ์ฉํจ */}
        {/* ํ์ด์ง ๊ฐ์ ์ฐจ์ด์ ์ด ํฌ๊ฒ ์์ ๋  */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>๋ฉค๋ฒ</div>} />
          <Route path="location" element={<div>์์น์ ๋ณด</div>} />
        </Route>

        {/* /event/one , /event/two๋ฅผ nested router๋ฅผ ์ด์ฉํด์ ๋ง๋ค์ด๋ณด๊ธฐ */}
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>๋ฐ์ผ๋ฆฌ๊ฒฌ๊ณผ 7day ์๋น์ค</p>} />
          <Route path="two" element={<p>์์ผ๊ธฐ๋ ์ฟ ํฐ ๋ฐ๊ธฐ</p>} />
        </Route>
      </Routes>
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>ํ์ฌ์ ๋ณด</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>์ค๋์ ์ด๋ฒคํธ</h4>
      <Outlet></Outlet>
    </div>
  );
}

//์ปดํฌ๋ํธ Card ์์ฑ๊ณผ ํ๋กญ์ค ์ ์ก
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

function Loading() {
  return (
    <div>
      <p>Loading. . .</p>
      <p>์ ์๋ง ๊ธฐ๋ค๋ ค์ฃผ์ธ์.</p>
    </div>
  );
}
export default App;
