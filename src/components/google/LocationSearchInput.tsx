// components/LocationSearchInput.tsx
import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

interface LocationSearchInputProps {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setLatLng: React.Dispatch<React.SetStateAction<null | { lat: number; lng: number }>>;
}

const LocationSearchInput: React.FC<LocationSearchInputProps> = ({ setAddress, setLatLng }) => {
  const [address, setAddressInternal] = useState<string>('');

  const handleSelect = async (selectedAddress: string) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      setAddress(selectedAddress);
      setLatLng(latLng);
    } catch (error) {
      console.error('Error selecting address:', error);
    }
  };

  return (
    <PlacesAutocomplete value={address} onChange={setAddressInternal} onSelect={handleSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({ placeholder: 'Enter an address' })}
            type="text"
          />
          <div>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion, index) => {
              const style = {
                backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
              };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, { style })}
                  key={index}
                >
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
