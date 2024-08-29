import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

function MapComponent() {
  const [viewport, setViewPort] = useState({
    latitude:45.4211,
    longtitude: -75.6903,
    width:'100vw',
    height:'100vh',
    zoom: 10
  })
  return (
    <div>

      <ReactMapGL>markers here</ReactMapGL>
    </div>
  )
}

export default MapComponent
