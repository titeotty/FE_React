import {Link} from 'react-router-dom';

function Header() {
    return (
      <div>
        <h1>헤더입니다.</h1>
        <Link to="/">메인</Link> |
        <Link to="/board">게시판</Link> |
        {/* <Link to="/product/">상품</Link> | */}
        <Link to="/product/1"> 1번 상품 </Link>
        <Link to="/product/2"> 2번 상품 </Link>
        <Link to="/product/3"> 3번 상품 </Link>

      </div>
    );
  }
  
  export default Header;