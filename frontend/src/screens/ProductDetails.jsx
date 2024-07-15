import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import { Row, Col, ListGroup, Button, Image, ListGroupItem } from "react-bootstrap";
import axios from 'axios';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams(); // useParams hook to get the product id

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.response && error.response.data.message ? error.response.data.message : error.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      <Link to="/" className='btn'>
        <i className="fas fa-arrow-left"></i>
        &nbsp; Go Back
      </Link>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
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
      )}
    </div>
  );
};

export default ProductDetails;
