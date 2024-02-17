import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

// Define your Google Maps API key
const googleMapsApiKey = 'YOUR_API_KEY';

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
