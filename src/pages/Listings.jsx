import React from 'react'
import {UseContextData} from '../ContextFolder/Context/UseContextData'
import ListingTemp from '../component/ListingTemp';
import { Link } from 'react-router-dom';

function Listings() {
     const {data} = UseContextData();
     console.log('data:', data)
  return (
    <section>
        <div className='container-fluid'>
            
        <h1 >
            Featured Listings
        </h1>
        <h3>Enjoy the perfect gateway at a 5 star luxury
            home away from home without the 5 star price
        </h3>

        <div className='listRow'>
            
                {
                    data && data.map((data)=>(
                        <Link key={data.id} to={data.id}>
                            <ListingTemp  data={data}/>
                        </Link>
                        
                    ))
                }
            
            
        </div>
        </div>
    </section>
  )
}

export default Listings
