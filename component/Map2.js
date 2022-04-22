import React, { useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'leaflet/dist/leaflet.css'
import osm from './osm-providers'
import useGeoLocation from './useGeoLocation'
import { map } from 'leaflet'

const markerIcon = new L.Icon({
  iconUrl: require('../public/marker.png'),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
})

const Map2 = () => {
  const [center, setCenter] = useState({ lat: -4.043477, lng: 39.668205 })
  const ZOOM_LEVEL = 9
  const mapRef = useRef()
  const location = useGeoLocation()

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.LeafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      )
    } else {
      alert(location.error.message)
    }
  }

  return (
    <>
      <div className='container'>
        <div className='container'>
          <h1 className='text-center-mt-5'>OpenStreetMap Embeded</h1>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='container'>
              <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                <TileLayer
                  url={osm.maptiler.url}
                  attribution={osm.maptiler.attribution}
                />
                {location.loaded && !location.error && (
                  <Marker
                    position={[
                      location.coordinates.lat,
                      location.coordinates.lng,
                    ]}
                  ></Marker>
                )}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row my-4'>
          <div className='col d-flex justify-content-center'>
            <button className='btn btn-primary' onClick={showMyLocation}>
              Locate Me <FontAwesomeIcon icon='globe' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Map2
