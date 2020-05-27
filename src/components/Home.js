import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import AllPosts from './posts/AllPosts.js'
import '../App.css'


const Home = (props) => {
const handleClick = () => {
    axios.delete('/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }



return (
    
     
      <div className="container">
      <h1>absoluteJAMS</h1>
      <br></br>
      <div className="Homelinks">
      <Link to='/login'>Log In</Link>
      <br></br>
      <Link to='/signup'>Sign Up</Link>
      <br></br>
      </div>

      { 
        props.loggedInStatus ? 
        <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
        null
      }
      { 
        props.loggedInStatus ? 

        <AllPosts user={props.user}/> : 
        null
      }

    </div>
    
  );
};



export default Home;