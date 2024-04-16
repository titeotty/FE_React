import "./body.css";

function Body({children}){
    return(
      <div className="body">
        <h1>바디 영역  </h1>
        {children}
      </div>
    );
  }
Body.defaultProps={
    na:"이름없음",
    location:"주소지없음"
}
  export default Body;