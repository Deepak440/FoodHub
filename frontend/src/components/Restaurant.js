import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'


const Restaurant = ({restaurant}) => {
  return (
    <Card classname = 'my-3 p-3 rounded '>
      <a href = {`/restaurant/${restaurant._id}` }>
      <Card.Img src = {restaurant.image}  variant = 'top' />  

      </a>

      <Card.Body>
          <a href= {`/restaurant/${restaurant._id}` }>
           <Card.Title  as = 'div'> 
            <strong>{restaurant.name} </strong>
            </Card.Title> 
          </a> 

          <Card.Text>
             <Rating value = {restaurant.numReviews} />

          </Card.Text>
          </Card.Body>
       
    </Card>
  )
}

export default Restaurant