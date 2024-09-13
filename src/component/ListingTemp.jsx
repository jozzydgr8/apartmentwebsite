import DisplayImage from './DisplayImage'


function ListingTemp({data,length}) {
if(!data){
    return
}


const url =
data.fileUrls && data.fileUrls.map((img)=>(
    img.url
))




    // !data.available ? <span> booked </span> : <span>Available</span>
    

    
    
  return (
    <>
    
    <div className={data.available === true ? 'list-grid': 'unavailable'}>
        
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
            
            <button className={data.available != true ? 'unavailablebutton':''}>
                {data.available === true ? 'available':'currently unavailable'}
            </button>
        </div>

        </div>



        <div className={data.available === true ? 'list-footer': 'unavailablefooter'}>
            {
                data.bedroom && data.bathroom && data.toilet &&
                <>
                    <div>{data.bedroom} bedroom</div>
                    <div>{data.bathroom} bathrooms</div>
                    <div>{data.toilet} toilets</div>
                </>
            }

        </div>
    </div>

    </>
  )
}

export default ListingTemp
