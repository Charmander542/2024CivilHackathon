import React, { useEffect, useState } from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

// Define your Google Maps API key

export default function StreetMap(){
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Fetch current location using browser's geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);
  const position = {lat: 53.54992, lng: 10.00678};

  return (
        <APIProvider apiKey="AIzaSyCgc07q6Q-wgiE04hQ76jWp7E_V5tL_0Ik">
            <Map defaultCenter={position} defaultZoom={10}>
                <Marker position={position} />
            </Map>
        </APIProvider>
  );
};