import { useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../shared/Spinner';
import store from '../../state/store';
import { filterOnLocation } from '../../state/eventsSlice';
import '../css/LocationSelector.css';

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const locations = useSelector(state => state.cities.data);
  const isLoading = useSelector(state => state.events.loading);

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
    store.dispatch(filterOnLocation(event.target.value));
  };

  return isLoading ?
    <Spinner /> : (
      <div className="location-selector">
        <div className="location-dropdown-container">
          <select
            id="location-select"
            value={selectedLocation}
            onChange={handleChange}
            className="location-dropdown"
          >
            <option value="">Select Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
          <span className="dropdown-arrow"></span>
        </div>
        {/* {selectedLocation && (
        <div className="selected-location">
          <p>You're seeing events from: {selectedLocation}</p>
        </div>
      )} */}
      </div>
    )
};

export default LocationSelector;
