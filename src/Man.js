import React from 'react'
import ItemCard from './IntemCard'
import data from './data'
export default function Man() {
    
  return (
    <div>
        <h1 className='text-center mt-3'>All Items</h1>
        <section className='py-4 container'>
            <div className='row justify-content-space-evenly'>
                
                {data.productData.map((item, index)=>{
                    if(item.id<500){    
                        return(
                            <ItemCard 
                            img={item.img} 
                            title={item.title} 
                            desc={item.desc} 
                            price={item.price} 
                            item={item} 
                            key={index} />
                        )}
                    })}
                    
            </div>
        </section>
    </div>
  )
}
