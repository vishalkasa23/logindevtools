import React from 'react';
import fire from '../firebase'
import {Link} from 'react-router-dom'
const handleLogout =()=>{
    fire.auth().signOut();
    localStorage.removeItem("User_Exist")
  };
const Home = ()=> (
    <div>
        <img src="../grocery.jpg" alt="" className="img-fluid" />
        {/* <button onClick={handleLogout}>logout</button> */}
        <Link onClick ={handleLogout} className="p-3 h4" to="/">Logout</Link>
    </div>
)

export default Home;