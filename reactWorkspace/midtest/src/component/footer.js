function Footer(){
    var num1=2;
    // var num2=false;
    if(num1%2===0){
        return (
            <div>
                <h1 style={{backgroundColor:'#000000', color:'red'}}>푸터 영역</h1>
                <h1>num1 : 짝수</h1>
            </div>
        );
    } 

    else {
        <div>
            <h1>푸터 영역</h1>
            <h1>num1 : 홀수</h1>
        </div>
    }
  }


//   function Footer1(){
//     return(
//       <div>
//         <h1>footer 영역2  </h1>
//       </div>
//     );
//   }


  export default Footer;