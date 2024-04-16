import "./body.css";

function Body({na, location}){
  // const {na, location} = pro; //구조분해 할당

    return(
      <div className="body">
        <h1>바디 영역  </h1>
        <h1> {na} {location}</h1>
      </div>
    );
  }
Body.defaultProps={
    na:"이름없음",
    location:"주소지없음"
}
  export default Body;