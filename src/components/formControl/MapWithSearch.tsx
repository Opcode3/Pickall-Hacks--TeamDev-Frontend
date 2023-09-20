// components/MapWithSearch.tsx
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const MapWithSearch: React.FC = () => {
  const [center, setCenter] = useState<{ lat: number; lng: number }>({ lat: 9.0579, lng: 7.4951 });
//   const abujaCoordinates = { lat: 9.0579, lng: 7.4951 };
  const [address, setAddress] = useState<string>('');

  const handlePlaceSelect = (place: google.maps.places.PlaceResult) => {
    const geometry = place.geometry;
    if (geometry) {
      setAddress(place.formatted_address || '');
      if(geometry.location){
        setCenter({
            lat: geometry.location.lat(),
            lng: geometry.location.lng(),
          });
      }
    }
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <LoadScript googleMapsApiKey="AIzaSyCB_4Fr-SsYJBIE7Yc0R7L0Z_I9M6xkc_0" libraries={['places']}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={15}
        >
          <Autocomplete 
          
          onLoad={(autocomplete) => {
            autocomplete.addListener('place_changed', () => {
              handlePlaceSelect(autocomplete.getPlace());
            });
          }}>
            <input
              type="text"
              placeholder="Enter an address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Autocomplete>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapWithSearch;
