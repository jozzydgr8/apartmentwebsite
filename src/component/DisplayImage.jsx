import React from 'react'

function DisplayImage({url, length}) {
  if (length != 1){
    return (
      <>
        <img src={url} alt='apartmentimg'/>
      </>
    )
  }else{
    return(
      <>lol</>
    )
  }

  const image = url.length === 1 ? url : 'lol'
  console.log(image)

}

export default DisplayImage
