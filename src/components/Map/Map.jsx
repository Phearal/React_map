import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import "./map.css"

function Map() {


    const [items, setItems] = useState([]);

    // useEffect permet de ne déclencher qu'une seule fois le comportement au chargement de la page
    useEffect(() => {
        fetch("http://localhost:3000/assets/data/items.json")
            .then((response) => response.json())
            .then(data => setItems(data))
    }, [])

    const customIcon = new Icon({
        iconUrl: "/assets/img/icons/location.svg",
        iconSize: [32, 32],
        iconAnchor: [16, 32]
    })

    return (
        <MapContainer className='test' center={[43.309865, -0.372990]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                items.map((item) => {
                    return (
                        <Marker position={[item.lat, item.long]} icon={customIcon}>
                            <Popup>
                                <h3>{item.title}</h3>
                                <p>{item.adresse}</p>
                                <img src="/assets/img/skateparks/{item.img}" alt="" />
                            </Popup>
                        </Marker>
                    )
                })
            }
            <Marker position={[43.29085790181754, -0.3655895466319969]} icon={customIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map