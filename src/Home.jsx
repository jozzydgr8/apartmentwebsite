import React from 'react'
import MapComponent from './component/MapComponent'
import Header from './pages/Header'
import Listings from './pages/Listings'
import { Amenities } from './pages/Amenities'

function Home() {
  return (
    <div>
        {/* <div style={{ height: '100vh' }}>
        <MapComponent />
          
        </div> */}
        
        <Header/>
        <Amenities/>
        <Listings/>

    </div>
  )
}

export default Home
