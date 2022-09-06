// import Table from "react-bootstrap/Table";

import { Table } from "react-bootstrap";
import { useSelecort, useSelector } from "react-redux";
//🟣장바구니 데이터를 state에 보관해두고 데이터바인딩하기
//장바구니state가 App, Detail, Cart에 필요하면 최상단인 App.js에 만듬
//그런데 (자식으로밖에 전송이 안됨.) 이렇게 전송하면 props전송하는게 귀찮아짐
//이럴 때 쓸수있는 라이브러리 : ✨Redux✨
//✨Redux✨ 장점 : 컴포넌트간에 props없이도 state공유가능
//redux store.js 에 state1, state2, ...  직접 뽑아서 쓸 수 있는 기능제공
//(리액트 구인시 대부분 Redux사용 요구)

//🔘Redux 설치하기
//1. package.json  들어가기 : 사이트 구동에 필요한 라이브러리들 버전을 모아둔 파일
//현재 리액트, 리액트돔 :18버전 이상인지 확인하기 (작성일시 : 22년 09월)
//2. 터미널 열어서 🔸➡️ npm install @reduxjs/toolkit react-redux ⬅️🔸 설치
//3. 다운로드가 끝나면 npm start 한다.
//4. 파일하나 만들어주기 sre - store.js : state를 보관하는 공간
//store.js가서
// import { configureStore } from '@reduxjs/toolkit';
// export default configureStore({
//     reducer: {}})  작성해주고
//5. index.js가서 <Provider store={store}>쓰기
//import { Provider } from "react-redux";
// <React.StrictMode>
//   <Provider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>;
// </React.StrictMode>
//6. import store from "./store.js"; 스토어를 임포트해주고
//<Provider store={store}>  store 쓰기
// app이라는 컴포넌트와 그 모든 자식들은 스토어에 있는 state를 맘껏 꺼내 쓸 수 있게 됨.

function Cart() {
  //🟡 Redux store에 있던 state가 남음  (자유롭게 쓸 수 있다)
  let state = useSelector(state => {
    return state;
  }); //return state.user 이런식으로 콕집어 가능
  console.log(state.user);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {/* 
            테이블의 헤드 : thead (제목같은거)
            가로칸 : tr
            세로줄 : td
            실제 내용영역 : tbody
            */}
            <th> </th>
            <th>상품명</th>
            <th>{state.stock}</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>하이</td>
            <td>하이</td>
            <td>하이</td>
          </tr>
          <tr>
            <td>2</td>
            <td>룰루</td>
            <td>랄라</td>
            <td>릴리</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
