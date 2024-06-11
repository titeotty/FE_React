import { useParams } from 'react-router-dom';

function Product() {

  const { productId } = useParams();
    return (
      <div>
            <h3> {productId}번 상품입니다.</h3>
      </div>
    );
  }
  
  export default Product;