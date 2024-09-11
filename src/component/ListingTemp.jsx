import React, { useEffect, useState } from 'react'
import DisplayImage from './DisplayImage'
import { UseContextAuth } from '../ContextFolder/Context/UseContextAuth'
import { colRef, storage } from '../App';
import { deleteObject, ref } from 'firebase/storage';
import { deleteDoc, doc } from 'firebase/firestore';

function ListingTemp({data,length}) {
if(!data){
    return
}


const url =
data.fileUrls && data.fileUrls.map((img)=>(
    img.url
))
const urlPath = data.fileUrls && data.fileUrls.map((img)=>(
    img.imagePath
))
console.log(urlPath)


    // !data.available ? <span> booked </span> : <span>Available</span>
    

    
    
  return (
    <>
    
    <div className='list-grid'>
        
        <div className='gridProduct '>

        <div className='list-image '>
            {
                !url ? <span>no image for file</span> : <DisplayImage url={url} length={length}/>
            }

        </div>
        

        <div className='listing-details'>
        <h3>{data.apartment.slice(0,13)}...</h3>
        <div>Apartment type: {data.apartment}</div>
            <h3>
            ₦{data.daily}
            </h3>
            
            <button>available</button>
        </div>

        </div>



        <div className='list-footer'>
        <div>{data.bedroom} bedroom</div>
        <div>{data.bathroom} bathrooms</div>
        <div>{data.toilet} toilets</div>
        </div>
    </div>

    </>
  )
}

export default ListingTemp
