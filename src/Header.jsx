import React from 'react'
import Explore from './Explore'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { CartProvider } from 'react-use-cart';
import Cart from './Cart';
import h1 from './image/h1.jpeg'
import h2 from './image/h2.jpeg'
import h3 from './image/h3.jpeg'
export default function Header() {
  return (
      <div>
      <img style={{height:'180px', width:'130px', marginLeft:'45em', marginTop:'4em'}} src={h1}></img>
      <img style={{height:'180px', width:'150px', marginLeft:'45em', marginTop:'2em'}} src={h2}></img>
      <img style={{height:'500px', width:'300px',position:'absolute', top:'10%', left:'73%'}} src={h3}></img>
      <span style={{ top:'30%', position:'absolute', fontSize:'35px', width: '45%', left: '5%', height:'30%', lineHeight:'1em'  } }><b>EXPERIENCE THE HEIGHT OF FASHION WITH OUR EXQUISITE DESIGNER PIECES.</b></span>
      <span style={{ top:'54%', position:'absolute', fontSize:'18px', width: '45%', left: '5%', height:'20%'  } }><b>Where style, sophistication, exclusivity is the forefront of our collection. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quaerat nostrum quia nam earum, libero, expedita impedit delectus provident quo eveniet.
      model photograph</b></span>
      <button style={{ top: '80%', position: 'absolute', color:'white', backgroundColor:'black', fontSize:'22px', left:'6%'} } ><Link to='/Explore'>Discover Our Products</Link></button>
      </div>
  )
}
