import React from 'react'
import { Card, ListGroup , Button} from 'react-bootstrap'


const FoodItem = ({foodItem}) => {

  const addToCartHandler = (id) => {
    const cart = [];
    cart.push(id);
     localStorage.setItem('CART', cart);

  }

  return (
    <Card className = 'my-3 p-3 rounded '>
      
      <Card.Img src = {foodItem.image }   variant = 'top' /> 

      <Card.Body>
           <Card.Title  as = 'div'> 
            <strong>{foodItem.name} </strong>
            </Card.Title> 
          <Card.Text>
            $ {foodItem.price} 
          </Card.Text>
          <Card.Text>
             {foodItem.description} 
          </Card.Text>
          
          </Card.Body>

          <ListGroup>
                <ListGroup.Item>
                  <Button
                    onClick  = {addToCartHandler(foodItem._id)}
                    className='btn-block'
                    type='button'
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
       
    </Card>
  )
}

export default FoodItem