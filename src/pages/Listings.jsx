import React from 'react'
import image from '../assets/nightbg.jpeg'

function Listings() {
     
  return (
    <section>
        <div className='container-fluid'>
        listings
        <div className='row'>
            <div className='col-md-5 list-grid'>
            
                    <h3>3 apartmen duplex</h3>
                    <div className='gridProduct row'>

                        <div className='list-image col-md-6'>
                            <img src={image} alt='apartment'/>
                        </div>

                        <div className='col-md-6 listing-details'>
                        <p className=''>
                            Lorem ipsum
                             dolor sit amet consectetur, adipisicing elit.
                            A, fugiat?
                        </p>
                        </div>

                    </div>


                
                <div className='list-footer'>
                    <div>bedroom</div>
                    <div>bathrooms</div>
                    <div>toilets</div>
                </div>
            </div>






            <div className='col-md-5 gap list-grid'>
            
                    <h3>3 apartmen duplex</h3>
                    <div className='gridProduct row'>

                        <div className='list-image col-md-6'>
                            <img src={image} alt='apartment'/>
                        </div>
                        
                        <div className='col-md-6 listing-details'>
                        <p className=''>
                            Lorem ipsum
                             dolor sit amet consectetur, adipisicing elit.
                            A, fugiat?
                        </p>
                        </div>

                    </div>


                
                <div className='list-footer'>
                    <div>bedroom</div>
                    <div>bathrooms</div>
                    <div>toilets</div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Listings
