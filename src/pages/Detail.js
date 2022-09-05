// import nutsImg from "/Users/sungyumi/Desktop/리액트배우는중/shop/src/img/nuts";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

// //📍구버전 컴포넌트 만들기  : Lifecycle
// class Detail2 extends React.Component {
//   componentDidMount() {}  //Mount 장착/생성된다
//   componentDidUpdate() {}  //Update 엡뎃
//   componentWillUnmount() {}  //삭제     }

//요즘버전 컴포넌트 만들기 : Hook (useEffect함수)
function Detail(props) {
  let { id } = useParams();
  let findProduct = props.nuts.find(x => x.id == id);

  //  📍UI가 보이게 또는 안보이게 상태 저장 state
  const [alert, setAlert] = useState(true);
  //⚪️ Tab UI만들기 (삼항연산자에 사용)
  let [tab, setTab] = useState(0); //3가지 종류를 표현할 수 있도록 초기값 숫자로(0)설정함.

  //🔶디테일페이지에 애니메이션주기
  let [fade2, setfade2] = useState("");
  useEffect(() => {
    setfade2("end");
    return () => {
      setfade2("");
    };
  }, []);

  useEffect(() => {
    //📍타이머 만들기 : 2초 후 alert창이 안보이게하기
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  //mount, update시 코드 실행해주는 useEffect
  //let [count, setCount] = useState(0); //리턴으로 가서 count - button

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
    <div className={"container start " + fade2}>
      {/* 📍alert창 만들기 */}
      {alert == true ? (
        <div className="alert alert-warning">2초 이내 구매 시 할인</div>
      ) : null}
      {/* 📍카운트 버튼 만들기
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button> */}
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
      {/* ⚪️ Tab UI만들기 (nav이용) */}
      {/* defaultActiveKey : 처음 들어갔을 때 나오는 버튼 창 설정가능 */}
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* 🔘조건문 삼항연산자 사용하기 (0클릭시 내용0, 1클릭시 내용1 ...)
      {tab == 0 ? <div>내용0</div> : null}
      {tab == 1 ? <div>내용1</div> : null}
      {tab == 2 ? <div>내용2</div> : null} */}
      {/* //삼항연산자도 사용 가능함. 다른방법으로 if문 사용가능 
      //🔘if문으로 조건문 만들기 */}
      <TabContent tab={tab} />
    </div>
  );
}

//⚪️컴포넌트 만들어서 tab의 if문 넣어주기 (3가지의 방법 : props, ({tab}), array)
//🔘props전송해서 만들어주기
// function TabContent(props) {
//   if (props.tab == 0) {
//     return <div>내용0</div>;
//   } else if (props.tab == 1) {
//     return <div>내용1</div>;
//   } else if (props.tab == 2) {
//     return <div>내용2</div>;
//   }
// }
//🔘props 쓰기 귀찮을 때 state ({tab})으로 설정해주고 props. 안써줘도된다
//🔘또는 array 자료형으로 내용 다 밀어넣고 만들어주기
// function TabContent({ tab }) {
//   return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab];
// }
//🔶트랜지션으로 애니매이션 tab에 주기
function TabContent({ tab }) {
  let [fade, setFade] = useState(" ");

  //fade라는 state를 end로 바꿔줌.
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);

    // 클린업펑션쓰기
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [tab]);
  //🔸리액트18버전 이상에서는 automatic batching기능 이 생겼음
  //이것은 따로따로 재렌더링 하는게 아니라 한번에 재렌더링하기때문에
  //위와 같이 타이머를 써야 애니메이션이 가능해진다.
  //즉, state 변경하는 함수들이 근처에 있다면 모아 한번에 재렌더링함.

  return (
    // 🔶문자 중간에 변수 넣는 법 {'start띄어쓰기중요 ' + fade} 또는 백틱사용 {`start ${fade}`}
    // 클래스명은 띄어쓰기가 있어야 여러개 중복해서 넣을 수 가 있다.
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}
export default Detail;
