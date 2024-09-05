import React from 'react'
import image from '../assets/nightbg.jpeg'
import {UseContextData} from '../ContextFolder/Context/UseContextData'
import ListingTemp from '../component/ListingTemp';

function Listings() {
     const {data} = UseContextData();
     console.log('data:', data)
  return (
    <section>
        <div className='container-fluid'>
            
        <h1 >
            Our Apartments
        </h1>

        <div className='listRow'>
            
                {
                    data && data.map((data)=>(

                        <ListingTemp key={data.id} data={data}/>
                    ))
                }
            
            
        </div>
        </div>
    </section>
  )
}

export default Listings
