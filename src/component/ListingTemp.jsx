import React, { useEffect, useState } from 'react'
import DisplayImage from './DisplayImage'

function ListingTemp({data}) {
if(!data){
    return
}
const url =
data.fileUrls && data.fileUrls.map((img)=>(
    img.url
))[0]


    
  return (
    <div className='list-grid'>
        
        <div className='gridProduct '>

        <div className='list-image '>
            {
                !url ? <span>no image for file</span> : <DisplayImage url={url}/>
            }

        </div>
        

        <div className='listing-details'>
        <h3>{data.apartment}</h3>
            <h3>
                {data.daily}
            </h3>
        </div>

        </div>



        <div className='list-footer'>
        <div>{data.bedroom} bedroom</div>
        <div>{data.bathroom} bathrooms</div>
        <div>{data.toilet} toilets</div>
        </div>
    </div>
  )
}

export default ListingTemp
