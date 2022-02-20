import React,{useEffect, useState} from 'react'
import {Row , Col} from 'react-bootstrap';
import Restaurant from '../components/Restaurant';
import axios from 'axios'

const HomeScreen = () => {

  const [restaurants , setRestaurants] = useState([]);

   useEffect( () => {
     const fetchRestaurant = async () => {
       const {data} = await axios.get('/api/restaurants')
       setRestaurants(data);
      
     }
     fetchRestaurant();
 
   }, [])
  return (
    <>
    
     <h1 className='my-3 ' >
       Here is the list of the Restaurant
     </h1>
          
     <Row>
          {restaurants.map( (restaurant) => (
            <Col key={restaurant._id} sm={12} md={6} lg={4} xl={3}>
            <Restaurant restaurant ={restaurant} />
          </Col>
           
          ))}
     </Row>
      
    </>
  )
}

export default HomeScreen