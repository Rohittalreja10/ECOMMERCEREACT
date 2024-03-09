import React, { useState } from 'react'
import casual from './image/casual.jpeg';
import jacket from './image/jacket.jpeg';
import inner from './image/inner.jpeg';
export default function Man() {
  const[Man,setMan]=useState(true);
  const[Women,setWomen]=useState(true);

  const handleChange=()=>{

  }
  
  return (
    <div>
      <span style={{ top: '20%', left: '2%', position:'absolute'} }>Category</span>
      <hr style={{width:"15%",top: '25%', left: '1%', position:'absolute' }}></hr>
      <span style={{top: '30%', left: '1%', position:'absolute' }} ><input  type='checkbox' value={Man} onChange={()=>handleChange("Man")}/>Man</span>
      <span style={{top: '35%', left: '1%', position:'absolute' }} ><input type='checkbox' value={Women} onChange={()=>handleChange("Women")}/>Women</span>
      <img src={casual} ba width={200} height={200} alt="Casual" style={{top: '18%', left: '25%', position:'absolute', backgroundColor:'white', padding:'47.5px' }}  />;
      <span style={{ top: '62%', left: '25%', position:'absolute', backgroundColor: 'white', width:'21.5%', padding:'10px'} }><b>Mens Casual Premium Slim Fit T-Shirts</b></span>
      <span style={{ top: '67%', left: '25%', position:'absolute', backgroundColor: 'white', width:'21.5%', padding:'10px'} }>Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable</span>
      <button style={{ top: '85%',left: '25%', position: 'absolute', color:'white', backgroundColor:'black', fontSize:'15px'} } >Add to Cart</button>
      <span style={{ top: '84%', left: '32.1%', position:'absolute', backgroundColor: 'white', width:'3%', paddingLeft:'165px', paddingTop:'10px', paddingBottom:'3px'} }>$109</span>
      <img src={jacket} ba width={200} height={200} alt="Casual" style={{top: '18%', left: '50%', position:'absolute', backgroundColor:'white', padding:'47.5px' }}  />;
      <span style={{ top: '62%', left: '50%', position:'absolute', backgroundColor: 'white', width:'21.5%', padding:'10px'} }><b>Mens Cotton Jacket</b></span>
      <span style={{ top: '67%', left: '50%', position:'absolute', backgroundColor: 'white', width:'21.5%', padding:'10px', paddingBottom:'50px'} }>great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, </span>
      <button style={{ top: '85%',left: '50%', position: 'absolute', color:'white', backgroundColor:'black', fontSize:'15px'} } >Add to Cart</button>
      <span style={{ top: '84%', left: '57.1%', position:'absolute', backgroundColor: 'white', width:'3%', paddingLeft:'165px', paddingTop:'10px', paddingBottom:'3px'} }>$200</span>
      <img src={inner} ba width={200} height={200} alt="Casual" style={{top: '18%', left: '75%', position:'absolute', backgroundColor:'white', padding:'47.5px' }}  />;
      <span style={{ top: '62%', left: '75%', position:'absolute', backgroundColor: 'white', width:'21.5%', padding:'10px'} }><b>Mens Casual Slim Fit</b></span>
      <span style={{ top: '67%', left: '75%', position:'absolute', backgroundColor: 'white', width:'21.5%', padding:'10px', paddingBottom:'50px'} }>The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person </span>
      <button style={{ top: '85%',left: '75%', position: 'absolute', color:'white', backgroundColor:'black', fontSize:'15px'} } >Add to Cart</button>
      <span style={{ top: '84%', left: '82.1%', position:'absolute', backgroundColor: 'white', width:'3%', paddingLeft:'165px', paddingTop:'10px', paddingBottom:'3px'} }>$150</span>

    </div>
  )
}
