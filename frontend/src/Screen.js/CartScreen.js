import React, { useEffect } from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";

import { Link } from "react-router-dom";

const CartScreen = () => {
  


  return (
    <Row>
      <Col>
        <h1> Shopping Cart</h1>
     
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroupItem key={item.product}>
                <Row>
                  <Col md ={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>

                  <Col md = {3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>

                  <Col md ={2}>${item.price}</Col>

                  <Col md  ={3}>
                    <Form.Control
                      className='form-select'
                      as='select'
                      value={item.qty}
                      onChange={(e) => dispatch(addToCart(item.product, Number( e.target.value)))}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>

                  <Col md = {2}>
                 <Button type = 'button' variant = 'light' onClick={() => removeFromCartHandler(item.product)}> <i className="fas fa-trash"></i> </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md ={4}>
          <Card>
              <ListGroup variant ='flush'>
                  <ListGroupItem>
                      <h2>
                          Subtotal ({cartItems.reduce((acc ,item)  => acc + item.qty , 0)}) items
                      </h2>
                      ${cartItems.reduce((acc , item) => acc + item.price * item.qty , 0 ).toFixed(2)}
                  </ListGroupItem>
                  <ListGroupItem>
                      <Button type = 'button' disabled = {cartItems.length === 0} className ='btn-block ' onClick={checkoutHandler}> Proceed to Checkout</Button>
                  </ListGroupItem>

              </ListGroup>
          </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;