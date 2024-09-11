import React from 'react'
import {UseContextData} from '../ContextFolder/Context/UseContextData'
import ListingTemp from '../component/ListingTemp';
import { Link } from 'react-router-dom';

function Listings() {
     const {data} = UseContextData();
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
                    data && data.map((items)=>(
                        <Link key={items.id} to={items.id}>
                            <ListingTemp  data={items} length={data.length}/>
                        </Link>
                        
                    ))
                }
            
            
        </div>
        </div>
    </section>
  )
}

export default Listings
