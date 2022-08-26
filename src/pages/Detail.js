// import nutsImg from "/Users/sungyumi/Desktop/리액트배우는중/shop/src/img/nuts";
import React from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let findProduct = props.nuts.find(function (x) {
    return x.id == id;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* <img src={require("./img/nuts1")} alt="nuts1" width="100%" /> */}
          {/* <link rel="img" href={img1} /> */}
          {/* <img src={nuts1} /> */}
          {/* <img src={nutsImg + nuts(id + 1) + ".jpg"} width="100%" /> */}
          <img
            className="img"
            src={require("/Users/sungyumi/Desktop/리액트배우는중/shop/src/img/nuts" +
              (Number(findProduct.id) + 1) +
              ".jpg")}
          />
        </div>
        <div className="col-md-6 mt-4">
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
