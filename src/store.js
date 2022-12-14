//๐ก store์๋ค๊ฐ state ๋ง๋๋ ๋ฒ
//1. import ์๋ค๊ฐ createSlice ์ถ๊ฐํด์ค๋ค
//2. createSlice ํจ์ ์์ฑ  ( useState์ ๋น์ทํ ์ฉ๋ )
//3. ํจ์ ์์ name: 'state์ด๋ฆ' , initialState: '๊ฐ' ->stateํ๋๋ฅผ slice๋ผ๊ณ  ๋ถ๋ฅธ๋ค.
//4. ๋ง๋  state๋ฅผ ๋ฑ๋กํ๊ธฐ์ํด ์๋ reducer: ์ ๋ฑ๋กํ๋ค.
//      ๋ฑ๋กํ๊ธฐ์ํด์  : ์์ ํจ์ createSlice๋ฅผ ๋ณ์๋ก ์ ์ฅํ๋ค.
//      ์๋ reducer ์์ ๋ฑ๋กํด์ฃผ๊ธฐ์ํด user(์๋ช) : user.reducer ์ด๋ผ๊ณ  ์จ์ค๋ค. ๋ณดํต ๊ฐ์์๋ช์
//5. ์คํ ์ด์์๋ state ๊บผ๋ด์ฐ๊ธฐ ์ํด์ Car.js ๋ค์ด๊ฐ์ useSelector() ๋ผ๊ณ  ํ์ ์จ์ค๋ค.
//      ์๋จ์ import { useSelector } form "react-redux" ํด์ค๋ค.
//      useSelector((state)=>{ return state })๋ฅผ ์จ์ค๋ค (๊ธฐ๋ถ๋ฌธ๋ฒ ๊ฐ์ ๊ฐ๋)
//      let a = ๋ผ๊ณ  ๋ณ์์ ์ ์ฅํด์ ์ฐ๋ฉด๋๋ค.
//  let a = useSelector((state)=>{ return state })
import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
});

//์ฌ๊ณ 
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
