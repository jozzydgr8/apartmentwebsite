import React from 'react'
import {UseContextData} from '../ContextFolder/Context/UseContextData'
import ListingTemp from '../component/ListingTemp';
import { Link } from 'react-router-dom';

function Listings() {
     const {data} = UseContextData();
     const features =  data && data.filter(item => item.category && item.category.toLowerCase() === 'apartment');
    //  if(!features){
    //     return(
    //         <div>...ooops nothing to see here we will be back soon</div>
    //     )
    //  }
  return (
    <section>
        <div className='container-fluid'>
            
        <h1 >
            Featured Listings
        </h1>
        <p className='subhead'>Enjoy the perfect gateway at a 5 star luxury
            home away from home without the 5 star price
        </p>
        {
            features.length === 0 && <div>...ooops nothing to see here we will be back soon</div>
        }

        <div className='listRow'>
            
                {
                    features && features.map((items)=>(
                        <Link key={items.id} to={items.id}>
                            <ListingTemp  data={items} length={features.length}/>
                        </Link>
                        
                    ))
                }
            
            
        </div>
        </div>
    </section>
  )
}

export default Listings
