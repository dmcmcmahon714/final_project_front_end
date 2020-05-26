import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import AllPosts from './posts/AllPosts.js'


const Home = (props) => {
const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }


return (
   
    <div>
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
      <br></br>
      
      
      { 
        props.loggedInStatus ? 
        <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
        null
      }
      { 
        props.loggedInStatus ? 
        <AllPosts /> : 
        null
      }

    </div>
  );
};


export default Home;