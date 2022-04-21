import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const OpenStreetMap = () => {
  return (
    <div className='container'>
      <MapContainer
        center={[-4.05746, 39.66394]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[-4.05746, 39.66394]}>
          <Popup>I am Here</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default OpenStreetMap
