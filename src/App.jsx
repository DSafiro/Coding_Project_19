import React, { useState } from "react"; // Imports react and state
import Gallery from "./components/Gallery"; // Imports gallery from components
import "./styles/styles.css";

// Root component of the app
function App() {
  // Global state to hold the list of tours
  const [tours, setTours] = useState([]);

  // Function to remove tour by ID
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main className="container">
      <div className="card">
        <h1>Tour Explorer</h1>
        {/* Pass state and handlers down to the gallery component */}
        <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
      </div>
    </main>
  );
}

export default App; // Exports app