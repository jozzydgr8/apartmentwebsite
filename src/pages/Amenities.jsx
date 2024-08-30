import { useState } from "react"

export const Amenities = ()=>{
    const[more, setMore] = useState(false)
    return(
        <section>
            <div className="container-fluid">
                <h1>Amenities</h1>
                <p>when you stay with us you are entitled
                   to valuable facilities and amenities
                    such as
                </p>
                <ul>
                    <li>
                        Unlimited internet FTU applies 2.5TB per year
                    </li>
                    <li>
                       Free DSTV, Netflix, Amazon subscription
                    </li>
                    <li>
                        Free iptv subscription worldwide channels including UK and USA
                    </li>
                    <li>
                        12,000 watts peak inverter system power supply for each duplex
                    </li>
                    <li>
                        Purified drinking water system
                    </li>
                    <li>
                        Brand new TV in each rooms and new inverter AC in each rooms and living rooms
                    </li>
                    <li>
                        Brand new inbuilt microwave, oven, fridge, freezer with water dispenser and glass gas cooker
                    </li>
                    {
                        more && <>
                    <li>
                        Fully installed cctv system with electric fence
                    </li>
                    <li>
                        video intercom system
                    </li>
                    <li>
                        electric and automated gate system
                    </li>
                    <li>
                        Fully staff security and full time onsite on demand maintenance staff
                    </li>
                    <li>
                        Fully staff domestic staff for cleaning
                    </li>
                    <li>
                        General in-use washing machine
                    </li>
                    <li>
                        Imported turkish curtains with inners
                    </li>
                    <li>
                        Brand new bed sheets with pillow cases and duvet
                    </li>
                    <li>
                        In-use lounge and cinema for movies, PS computer games and football matches
                    </li>
                    <li>
                        In-use bar with 32inches tv set
                    </li>
                    <li>
                        Jacuzzi and swimming pool
                    </li>
                    <li>
                        A barbecue outlet with grill
                    </li>
                    <li>
                        New toilet accessories including toilet brush, cup holder, mirrors, tissue row holder etc
                    </li>
                    <li>
                        In-use residence snooker board for games
                    </li>
                    </>
                    }

                </ul>
                <button className="btn" onClick={()=>setMore(!more)}>{more ? 'read less.' : 'read more...' }</button>

            </div>
        </section>
    )
}