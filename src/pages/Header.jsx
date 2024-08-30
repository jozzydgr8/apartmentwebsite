import React from 'react'

function Header() {
  return (
    <section className=' background'>

      <div className='container-fluid header'>
            <div id='carouselExample' className='carousel slide' data-bs-ride="carousel">
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <h1>Slogan lorem Lorem ipsum
                        dolor sit amet consectetur,
                          esciunt pariatur dolore.
                    </h1>
                  </div>
                  <div className='carousel-item'>
                      <h1>
                        Lorem ipsum
                         dolor, sit amet consectetur adipisicing.
                      </h1>
                  </div>
                </div>

            </div>




            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
      </button>

      </div>
      

    </section>
  )
}

export default Header



