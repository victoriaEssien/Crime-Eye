import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ product }) {
  return (
    <div>
      <Card className='product-card' style={{ width: '18rem' }}>
        <Card.Img variant="top" className='product-card-image' src={product.product_image} />
        <Card.Body>
          <Card.Title>{product.product_name}</Card.Title>
          <Card.Text className='product-card-price'>{product.product_price} points</Card.Text>
          <Link to={`/order?product_name=${encodeURIComponent(product.product_name)}&product_price=${encodeURIComponent(product.product_price)}`}>
            <Button type="button" className='dash-btn'>Purchase</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
