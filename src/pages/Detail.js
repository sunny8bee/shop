// import nutsImg from "/Users/sungyumi/Desktop/리액트배우는중/shop/src/img/nuts";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// //📍구버전 컴포넌트 만들기  : Lifecycle
// class Detail2 extends React.Component {
//   componentDidMount() {}  //Mount 장착/생성된다
//   componentDidUpdate() {}  //Update 엡뎃
//   componentWillUnmount() {}  //삭제     }

//요즘버전 컴포넌트 만들기 : Hook (useEffect함수)
function Detail(props) {
  let { id } = useParams();
  let findProduct = props.nuts.find(x => x.id == id);

  //📍UI가 보이게 또는 안보이게 상태 저장 state
  // const [alert, setAlert] = useState(true);
  // useEffect(() => {
  //   //📍타이머 만들기 : 2초 후 alert창이 안보이게하기
  //   setTimeout(() => {
  //     setAlert(false);
  //   }, 2000);
  // }, []);

  //mount, update시 코드 실행해주는 useEffect
  let [count, setCount] = useState(0); //리턴으로 가서 count - button

  // // 유저가 숫자말고 다른걸 입력하면 alert창 띄우기 선언
  let [num, setNum] = useState("");
  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자만 입력가능합니다.");
    }
  }, [num]);

  //❗️ []→dependency(의존성)추가하면, [count]→count라는 state가 변할때마다 (변할때만.)
  //  안에 있는 setTimeout(()=>{ setAlert(false) }, 2000) →이 코드가 실행된다.
  //useEffect 실행 조건 넣을 수 있는 곳은 ✨'[...]'✨
  //❗️ 만약 dependency가 없다. →mount(생성) 될때 안에 코드는 실행되지 않는다.
  //즉, 컴포넌트 mount시 1회만 실행되고 싶다면 [] 빈칸으로 작성한다.✨

  //🟣 '[]'→를 써주지 않을 시 잦은 재랜더링으로 오류가 나오기도 함.
  //이렇때 useEffect안에 setTimeout(()=>{ setAlert(false) }, 2000)→이것을 선언해주고
  //✨let a = setTimeout(()=>{ setAlert(false) }, 2000)✨
  //❗️기존타이머 제거 →clean up function를 retrun 안에 사용하면 좋다.
  //타이머 제거해주는 함수 ✨return()=>{ clearnTimeout(a) }✨🟣

  return (
    <div className="container">
      {/* 📍alert창 만들기 */}
      {alert == true ? (
        <div className="alert alert-warning">2초 이내 구매 시 할인</div>
      ) : null}

      {/* 📍카운트 버튼 만들기 */}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            className="img"
            src={require("/Users/sungyumi/Desktop/리액트배우는중/shop/src/img/nuts" +
              (Number(findProduct.id) + 1) +
              ".jpg")}
          />
        </div>
        <div className="col-md-6 mt-4">
          {/* 유저가 숫자말고 다른걸 입력하면 alert창 띄우기에 input만듬. */}
          <input
            onChange={e => {
              setNum(e.target.value);
            }}
          />
          {/* props 준 다음 data.js를 쓸 수 있게 
          {props.nuts[0].title,content,price} 넣어주기  */}
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
