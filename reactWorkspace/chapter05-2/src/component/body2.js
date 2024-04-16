import "./body.css";

function Body(pro){
  const {na, location, favoList} = pro; //구조분해 할당

    return(
      <div className="body">
        <h1>바디 영역  </h1>
        <h1> {na}는 {location}에 삽니다. <br/> {favoList[2]} </h1>
      </div>
    );
  }
Body.defaultProps={
    na:"이름없음",
    location:"주소지없음"
}
  export default Body;