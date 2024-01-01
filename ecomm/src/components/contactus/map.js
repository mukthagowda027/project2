import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    const center = [13.0072, 76.0967];

    return (
        <div style={{ border: '1px solid black' }}>
            <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%', border: '1px solid green' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                    <Popup>Your Marker Popup</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
