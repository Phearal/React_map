import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import { Icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import "./map.css"

function Map({ setMapVisibleItems }) {

    const [items, setItems] = useState([]);
    const [visibleItems, setVisibleItems] = useState([]);

    const customIcon = new Icon({
        iconUrl: "/assets/img/icons/location.svg",
        iconSize: [32, 32],
        iconAnchor: [16, 32]
    })

    const MapEvents = () => {
        const map = useMapEvents({
            click(e) {
                console.log(e.latlng);
            },
            zoom() {
                const mapBounds = map.getBounds();
                const visibleItems = items.filter((item) => mapBounds.contains([item.lat, item.long]));
                setMapVisibleItems(visibleItems);
            },
            moveend() {
                const mapBounds = map.getBounds();
                const visibleItems = items.filter((item) => mapBounds.contains([item.lat, item.long]));
                setMapVisibleItems(visibleItems);
            }
        })

        return null;
    }

    function test() {
        console.log("test ready");
    }

    // useEffect permet de ne déclencher qu'une seule fois le comportement au chargement de la page
    useEffect(() => {
        fetch("http://localhost:3000/assets/data/items.json")
            .then((response) => response.json())
            .then(data => setItems(data))
    }, [])
    

    return (
        <MapContainer className='test' center={[43.309865, -0.372990]} zoom={12} scrollWheelZoom={true} whenReady={test}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                items.map((item) => {
                    return (
                        <Marker key={item.id} position={[item.lat, item.long]} icon={customIcon}>
                            <Popup>
                                <h3>{item.title}</h3>
                                <p>{item.adresse}</p>
                                <div className="marker-img-container">
                                    <img src={`/assets/img/skateparks/${item.img}`} alt="" />
                                </div>
                            </Popup>
                        </Marker>
                    )
                })
            }
            <MapEvents />
        </MapContainer>
    )
}

export default Map