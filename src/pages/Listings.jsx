import React from 'react'
import image from '../assets/nightbg.jpeg'

function Listings() {
     
  return (
    <section>
        <div className='container-fluid'>
            
        <h1 >
            Our Apartments
        </h1>
        <div className='listRow'>
            <div className='list-grid'>
            
                    <h3 style={{padding:'0 2%'}}>3 bedroom duplex</h3>
                    <div className='gridProduct row'>

                        <div className='list-image col-md-6'>
                            <img src={image} alt='apartment'/>
                        </div>

                        <div className='col-md-6 listing-details'>
                            <h3>
                                #3,500,000
                            </h3>
                        </div>

                    </div>


                
                <div className='list-footer'>
                    <div>bedroom</div>
                    <div>bathrooms</div>
                    <div>toilets</div>
                </div>
            </div>






            <div className='list-grid'>
            
                    <h3 style={{padding:'0 2%'}}>2 bedroom duplex apartment</h3>
                    <div className='gridProduct row'>

                        <div className='list-image col-md-6'>
                            <img src={image} alt='apartment'/>
                        </div>
                        
                        <div className='col-md-6 listing-details'>
                            <h3>
                                #2,500,000
                            </h3>
                        </div>

                    </div>


                
                <div className='list-footer'>
                    <div>bedroom</div>
                    <div>bathrooms</div>
                    <div>toilets</div>
                </div>
            </div>






            <div className='list-grid'>
            
            <h3 style={{padding:'0 2%'}}>2 bedroom duplex apartment</h3>
            <div className='gridProduct row'>

                <div className='list-image col-md-6'>
                    <img src={image} alt='apartment'/>
                </div>
                
                <div className='col-md-6 listing-details'>
                    <h3>
                        #2,500,000
                    </h3>
                </div>

            </div>


        
        <div className='list-footer'>
            <div>bedroom</div>
            <div>bathrooms</div>
            <div>toilets</div>
        </div>
    </div>







    <div className='list-grid'>
            
            <h3 style={{padding:'0 2%'}}>2 bedroom duplex apartment</h3>
            <div className='gridProduct row'>

                <div className='list-image col-md-6'>
                    <img src={image} alt='apartment'/>
                </div>
                
                <div className='col-md-6 listing-details'>
                    <h3>
                        #2,500,000
                    </h3>
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
