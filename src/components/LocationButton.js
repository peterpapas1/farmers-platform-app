import React, { useState } from "react";

function LocationButton() {
  const [location, setLocation] = useState(null);

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocation({ lat, lon });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <button
        className="mt-2 mb-2 py-4 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
        onClick={handleClick}
      >
        Use Location
      </button>
      {location && (
        <div>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lon}</p>
        </div>
      )}
    </div>
  );
}

export default LocationButton;
