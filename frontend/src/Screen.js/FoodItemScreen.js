import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

import { Row, Col, ListGroup,Button,Card } from "react-bootstrap";
import axios from "axios";
import FoodItem from "../components/FoodItems";

const FoodItemScreen = () => {
  const [foodItems, setFoodItems] = useState([]);
  
 
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchfoodItems = async () => {
      const { data } = await axios.get(`/api/restaurants/${id}`);
      setFoodItems(data);
    };
    fetchfoodItems();
  }, [id]);


const placeOrderHandler = () => {
   navigate('/cart');
}

  return (
    <div>
      <h1 className='my-3 '>Here is the list of the Food items</h1>

      <Row>
        {foodItems.map((foodItem, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <FoodItem foodItem={foodItem} />
          </Col>
        ))}
      </Row>

      <Card>
        <ListGroup>
          <ListGroup.Item>
            <Button
              type='button'
              className='btn-block'
              onClick={placeOrderHandler}
            >
              Place Order
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default FoodItemScreen;
