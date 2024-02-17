import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { useJsApiLoader } from '@react-google-maps/api';

//Added from video
const {isLoaded} = useJsApiLoader({
  googleMapsApiKey: 'AIzaSyCgc07q6Q-wgiE04hQ76jWp7E_V5tL_0Ik'
})



// Define your Google Maps API key
const googleMapsApiKey = 'AIzaSyCgc07q6Q-wgiE04hQ76jWp7E_V5tL_0Ik'

const Map = () => {
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
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={currentLocation} // Set the center of the map to currentLocation
        zoom={10}
      >
        {/* Map marker for current location */}
        {currentLocation && (
          <Marker
            position={currentLocation}
            title="Your Location"
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
