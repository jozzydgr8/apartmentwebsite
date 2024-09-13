import { Link } from "react-router-dom"
import { UseContextData } from "../ContextFolder/Context/UseContextData"

export const Amenities = ()=>{
    const {data} = UseContextData();
    const lounge =  data && data.filter(item => item.apartment.toLowerCase() === 'lounge')
    const swimming =  data && data.filter(item => item.apartment.toLowerCase() === 'swimming pool')
    const bridal =  data && data.filter(item => item.apartment.toLowerCase() === 'bridal shower')
    return(
        <section id='services'>
            <div className="container-fluid">
            <main className="categoryMain" >   
                                <h1 className="montserrat">services</h1>
                                <p className="subhead">Our Comprehensive services tailored to meet your needs</p>                          
                                <div className='categoryFlex'>
                                    <div className="category">{lounge&& lounge
                                        .slice(0,1).map(data=>(
                                        <div key={data.id}>
                                            <Link to={`${data.id}`} className="headerFlex categoryProduct ">
                                                <div className="categoryProductImage">
                                                    {
                                                        data.fileUrls && data.fileUrls.map((img, index)=>(
                                                            <img src={img.url} alt="pro" key={index} />
                                                        ))[0]
                                                    }
                                                
                                                </div>
                                                <div className="container">lounge</div>
                                                
                                                
                                            </Link>
                                        </div>
                                    ))}</div>
    {/* 
                                    //second div */}
                                <div className="category">{bridal && bridal
                                        .slice(0,1).map(data=>(
                                        <div key={data.id}>
                                            <Link to={`${data.id}`} className="headerFlex categoryProduct ">
                                                <div className="categoryProductImage">
                                                {
                                                        data.fileUrls && data.fileUrls.map((img, index)=>(
                                                            <img src={img.url} alt="pro" key={index} />
                                                        ))[0]
                                                }
                                                </div>
    
    
                                                <div className="container">Bridal shower</div>
                                                
                                                
                                            </Link>
                                        </div>
                                    ))}</div>
                                </div>
    
    
    
    {/* 
    second category */}
                                <div className='categoryFlex'>
                                    <div className="category">{swimming && swimming
                                        .slice(0,1).map(data=>(
                                        <div key={data.id}>
                                            <Link to={`${data.id}`} className="headerFlex categoryProduct ">
                                                <div className="categoryProductImage">
                                                {
                                                        data.fileUrls && data.fileUrls.map((img, index)=>(
                                                            <img src={img.url} alt="pro" key={index} />
                                                        ))[0]
                                                }
                                                </div>
                                                <div className="container">swimming</div>
                                                
                                                
                                            </Link>
                                        </div>
                                    ))}</div>
    {/* 
                                    //second div */}
                                <div className="category">{data && data
                                        .slice(0,1).map(data=>(
                                        <div key={data.id}>
                                            <Link to={`flawless`} className="headerFlex categoryProduct ">
                                                <div className="categoryProductImage">
                                                {/* <img src={data.productImage} alt="pro" /> */}
                                                </div>
    
    
                                                <div className="container">curlinary</div>
                                                
                                                
                                            </Link>
                                        </div>
                                    ))}</div>
                                </div>
    
                                
    
                                </main>
            </div>
        </section>
    )
}


// import { useState } from "react"

// export const Amenities = ()=>{
//     const[more, setMore] = useState(false)
//     return(
//         <section>
//             <div className="container-fluid">
//                 <h4 style={{textAlign:'center'}} className="subHead"> Welcome to Mag’s Resident, No.1 for short let apartment and home rentals in Lagos,
//                 our luxurious apartments are suitable for you and your Family</h4>
//                 <h1>Amenities</h1>
//                 <p>when you stay with us you are entitled
//                    to valuable facilities and amenities
//                     such as
//                 </p>
//                 <ul>
//                     <li>
//                         Unlimited internet FTU applies
//                     </li>
//                     <li>
//                        Free DSTV, Netflix, Amazon subscription
//                     </li>
//                     <li>
//                         Free iptv subscription worldwide channels including UK and USA
//                     </li>
//                     <li>
//                         12,000 watts peak inverter system power supply for each duplex
//                     </li>
//                     {
//                         more && <>
//                     <li>
//                         Purified drinking water system
//                     </li>
//                     <li>
//                         Brand new TV in each rooms and new inverter AC in each rooms and living rooms
//                     </li>
//                     <li>
//                         Brand new inbuilt microwave, oven, fridge, freezer with water dispenser and glass gas cooker
//                     </li>

//                     <li>
//                         Fully installed cctv system with electric fence
//                     </li>
//                     <li>
//                         video intercom system
//                     </li>
//                     <li>
//                         electric and automated gate system
//                     </li>
//                     <li>
//                         Fully staff security and full time onsite on demand maintenance staff
//                     </li>
//                     <li>
//                         Fully staff domestic staff for cleaning
//                     </li>
//                     <li>
//                         General in-use washing machine
//                     </li>
//                     <li>
//                         Imported turkish curtains with inners
//                     </li>
//                     <li>
//                         Brand new bed sheets with pillow cases and duvet
//                     </li>
//                     <li>
//                         In-use lounge and cinema for movies, PS computer games and football matches
//                     </li>
//                     <li>
//                         In-use bar with 32inches tv set
//                     </li>
//                     <li>
//                         Jacuzzi and swimming pool
//                     </li>
//                     <li>
//                         A barbecue outlet with grill
//                     </li>
//                     <li>
//                         New toilet accessories including toilet brush, cup holder, mirrors, tissue row holder etc
//                     </li>
//                     <li>
//                         In-use residence snooker board for games
//                     </li>
//                     </>
//                     }

//                 </ul>
//                 <button className="btn" onClick={()=>setMore(!more)}>{more ? 'read less.' : 'read more...' }</button>

//             </div>
//         </section>
//     )
// }