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
        <h3 style={{padding:'0 2%'}}>{data.apartment}</h3>
        <div className='gridProduct row'>

        <div className='list-image col-md-6'>
            {
                !url ? <span>no image for file</span> : <DisplayImage url={url}/>
            }

        </div>

        <div className='col-md-6 listing-details'>
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
