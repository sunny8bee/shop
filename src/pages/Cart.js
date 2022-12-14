// import Table from "react-bootstrap/Table";

import { Table } from "react-bootstrap";
import { useSelecort, useSelector } from "react-redux";
//๐ฃ์ฅ๋ฐ๊ตฌ๋ ๋ฐ์ดํฐ๋ฅผ state์ ๋ณด๊ดํด๋๊ณ  ๋ฐ์ดํฐ๋ฐ์ธ๋ฉํ๊ธฐ
//์ฅ๋ฐ๊ตฌ๋state๊ฐ App, Detail, Cart์ ํ์ํ๋ฉด ์ต์๋จ์ธ App.js์ ๋ง๋ฌ
//๊ทธ๋ฐ๋ฐ (์์์ผ๋ก๋ฐ์ ์ ์ก์ด ์๋จ.) ์ด๋ ๊ฒ ์ ์กํ๋ฉด props์ ์กํ๋๊ฒ ๊ท์ฐฎ์์ง
//์ด๋ด ๋ ์ธ์์๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ : โจReduxโจ
//โจReduxโจ ์ฅ์  : ์ปดํฌ๋ํธ๊ฐ์ props์์ด๋ state๊ณต์ ๊ฐ๋ฅ
//redux store.js ์ state1, state2, ...  ์ง์  ๋ฝ์์ ์ธ ์ ์๋ ๊ธฐ๋ฅ์ ๊ณต
//(๋ฆฌ์กํธ ๊ตฌ์ธ์ ๋๋ถ๋ถ Redux์ฌ์ฉ ์๊ตฌ)

//๐Redux ์ค์นํ๊ธฐ
//1. package.json  ๋ค์ด๊ฐ๊ธฐ : ์ฌ์ดํธ ๊ตฌ๋์ ํ์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ค ๋ฒ์ ์ ๋ชจ์๋ ํ์ผ
//ํ์ฌ ๋ฆฌ์กํธ, ๋ฆฌ์กํธ๋ :18๋ฒ์  ์ด์์ธ์ง ํ์ธํ๊ธฐ (์์ฑ์ผ์ : 22๋ 09์)
//2. ํฐ๋ฏธ๋ ์ด์ด์ ๐ธโก๏ธ npm install @reduxjs/toolkit react-redux โฌ๏ธ๐ธ ์ค์น
//3. ๋ค์ด๋ก๋๊ฐ ๋๋๋ฉด npm start ํ๋ค.
//4. ํ์ผํ๋ ๋ง๋ค์ด์ฃผ๊ธฐ sre - store.js : state๋ฅผ ๋ณด๊ดํ๋ ๊ณต๊ฐ
//store.js๊ฐ์
// import { configureStore } from '@reduxjs/toolkit';
// export default configureStore({
//     reducer: {}})  ์์ฑํด์ฃผ๊ณ 
//5. index.js๊ฐ์ <Provider store={store}>์ฐ๊ธฐ
//import { Provider } from "react-redux";
// <React.StrictMode>
//   <Provider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>;
// </React.StrictMode>
//6. import store from "./store.js"; ์คํ ์ด๋ฅผ ์ํฌํธํด์ฃผ๊ณ 
//<Provider store={store}>  store ์ฐ๊ธฐ
// app์ด๋ผ๋ ์ปดํฌ๋ํธ์ ๊ทธ ๋ชจ๋  ์์๋ค์ ์คํ ์ด์ ์๋ state๋ฅผ ๋ง๊ป ๊บผ๋ด ์ธ ์ ์๊ฒ ๋จ.

function Cart() {
  //๐ก Redux store์ ์๋ state๊ฐ ๋จ์  (์์ ๋กญ๊ฒ ์ธ ์ ์๋ค)
  let state = useSelector(state => {
    return state;
  }); //return state.user ์ด๋ฐ์์ผ๋ก ์ฝ์ง์ด ๊ฐ๋ฅ
  console.log(state.user);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {/* 
            ํ์ด๋ธ์ ํค๋ : thead (์ ๋ชฉ๊ฐ์๊ฑฐ)
            ๊ฐ๋ก์นธ : tr
            ์ธ๋ก์ค : td
            ์ค์  ๋ด์ฉ์์ญ : tbody
            */}
            <th> </th>
            <th>์ํ๋ช</th>
            <th>{state.stock}</th>
            <th>๋ณ๊ฒฝํ๊ธฐ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ํ์ด</td>
            <td>ํ์ด</td>
            <td>ํ์ด</td>
          </tr>
          <tr>
            <td>2</td>
            <td>๋ฃฐ๋ฃจ</td>
            <td>๋๋ผ</td>
            <td>๋ฆด๋ฆฌ</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
