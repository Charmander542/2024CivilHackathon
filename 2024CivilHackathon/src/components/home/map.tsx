import React, { useEffect, useState } from 'react';
import {
    APIProvider,
    Map,
    useMapsLibrary,
    useMap,
} from "@vis.gl/react-google-maps"

// Define your Google Maps API key
const googleMapsApiKey = 'YOUR_API_KEY';

export default function Map(){
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

  return (
    <div className="w-full h-10">
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <Map
                center={currentLocation}
                zoom={9}
                mapId={process.env.NEXT_PUBLIC_MAP_ID}
                fullscreenControl={false}
            >
                <Directions />
            </Map>
        </APIProvider>
    </div>
  );
};