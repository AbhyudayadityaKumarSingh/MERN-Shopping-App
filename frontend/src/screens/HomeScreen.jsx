import React ,{useState,useEffect} from 'react' ;
import axios from 'axios';
import products from '../products';
import {Row,Col} from 'react-bootstrap';
import ProductScreen from './ProductScreen';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const { data } = await axios.get('http://localhost:8080/products');  // Correct URL
          setProducts(data);
          setLoading(false);
        } catch (error) {
          setError(error.response && error.response.data.message ? error.response.data.message : error.message);
          setLoading(false);
        }
      };
      fetchProducts();
    }, []);
  return (
    <>
    <Row>
        {
            products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <ProductScreen product={product}/>
                </Col>
            ))
        }
    </Row>

    </>
  )
}

export default HomeScreen