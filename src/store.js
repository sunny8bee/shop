//🟡 store에다가 state 만드는 법
//1. import 에다가 createSlice 추가해준다
//2. createSlice 함수 생성  ( useState와 비슷한 용도 )
//3. 함수 안에 name: 'state이름' , initialState: '값' ->state하나를 slice라고 부른다.
//4. 만든 state를 등록하기위해 아래 reducer: 에 등록한다.
//      등록하기위해선 : 앞서 함수 createSlice를 변수로 저장한다.
//      아래 reducer 안에 등록해주기위해 user(작명) : user.reducer 이라고 써준다. 보통 같은작명씀
//5. 스토어에있는 state 꺼내쓰기 위해서 Car.js 들어가서 useSelector() 라고 훅을 써준다.
//      상단에 import { useSelector } form "react-redux" 해준다.
//      useSelector((state)=>{ return state })를 써준다 (기분문법 같은 개념)
//      let a = 라고 변수에 저장해서 쓰면된다.
//  let a = useSelector((state)=>{ return state })
import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
});

//재고
let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});
