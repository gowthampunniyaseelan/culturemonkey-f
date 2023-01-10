import React from 'react'
import { MapContainer, TileLayer, Marker,Popup, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
export default function Map(props) {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <div>
  <MapContainer style={{ height: 100, width: 200 }} center={[props.value.lat, props.value.lng]} zoom={1} zoomControl={false}
 scrollWheelZoom={false} attributionControl={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker  position={[props.value.lat, props.value.lng]}>
    <Popup position={[props.value.lat, props.value.lng]}>
      <div>
        <p>
        {props.value.address}
        </p>
      </div> 
    </Popup>
  </Marker>
</MapContainer>
    </div>
  )
}
