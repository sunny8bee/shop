import nuts1 from "/Users/sungyumi/Desktop/리액트배우는중/shop/src/img/nuts1.jpg";
function Detail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* <img src={require("./img/nuts1")} alt="nuts1" width="100%" /> */}
          {/* <link rel="img" href={img1} /> */}
          <img src={nuts1} />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>12000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
