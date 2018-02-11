import React from 'react'
import {
    Link
} from 'react-router-dom';

 const Home = (props) => (
    <div>
        <h5>Home</h5>
        <hr/>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/user/13">User</Link></li>
        </ul>
    </div>
)

 export default Home