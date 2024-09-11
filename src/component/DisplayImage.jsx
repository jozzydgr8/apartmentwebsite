import React from 'react'

function DisplayImage({url, length}) {
  console.log(url)
  console.log(length)
  if (length != 1 && length != undefined){
    return (
      <>
        <img src={url} alt='apartmentimg'/>
      </>
    )
    
  }else{
    return(
      <>
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    {
      url && url.map((item,index)=>(
        <div key={index} className="carousel-item active">
        <img src={item} className="carImage" alt="..."/>
      </div>
      ))
    }

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
      </>
    )
  }

  const image = url.length === 1 ? url : 'lol'
  console.log(image)

}

export default DisplayImage
