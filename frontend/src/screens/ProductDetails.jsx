import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import products from '../products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p._id === id);

  return (
    <div>
    <Link to={"/"} className='btn '>
    <i className="fas fa-arrow-left    "></i>
   &nbsp; Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroupItem>
              
            <ListGroupItem>
              <p>{product.description}</p>
            </ListGroupItem>
            <ListGroupItem>
              <strong>Price: ${product.price}</strong>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetails;
