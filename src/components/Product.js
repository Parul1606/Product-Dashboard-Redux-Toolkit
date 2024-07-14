import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this line is added to include Bootstrap CSS
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { getProducts } from '../store/productSlice';
import StatusCode from '../utils/StatusCode';

const Product = () => {
    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products)

    useEffect(() => {
        //dispatch an action for fetchProducts
        dispatch(getProducts())

        // Fetch API data
        //fetch('https://fakestoreapi.com/products')
            //.then(data => data.json())
            //.then(result => getProducts(result))
    }, []);

    if(status === StatusCode.LOADING){
        return <p>Loading...</p>
    }

    if(status === StatusCode.ERROR){
        return <Alert key='danger' variant="danger">Something went wrong! Try again later</Alert>
    }

    const addToCart = (product) => {
        //dispatch an add function
        dispatch(add(product))
    }

    const cards = products.map(product => (
        <div className='col-md-3' style={{ marginBottom: '10px'}}>
            <Card key={product.id} className='h-100'>
                <div className='text-center>'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '200px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR: {product.price}
                    </Card.Text>
                    
                </Card.Body>

                <Card.Footer style={{ background: "white"}}>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <div className="container">
            <h1>Product Dashboard</h1>
            <div className='row'>
                {cards}
            </div>
        </div>
    );
}

export default Product;
