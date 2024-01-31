import React, { useState } from 'react'
import './App.css'
import { GiHamburgerMenu  } from 'react-icons/gi';
import Footers from './Components/Footers';
import Div from './Components/Div';

const App = () => {

  const [nav, setNav] = useState(false);
  return (
    <div>
    <nav>
      <h1>Tourist Interest</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Read More</a></li>
      </ul>
      <h3 onClick={()=>(setNav(!nav))}><GiHamburgerMenu/></h3>   
    </nav>
    <div className={nav?"mobnav mobhid":"mobnav"}>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Read More</a></li>
      </ul>
    </div>
    <Div/>
    <Footers/>
    </div>
  )
}

export default App