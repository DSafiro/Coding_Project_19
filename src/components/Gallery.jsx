import React, {useEffect, useState} from "react"; // Imports react with effect and state
import TourCard from "./TourCard" // Imports tour card

// Gallery is response for fetching tours
const TourList = ({tours, setTours, onRemove}) => {
    // Local state to manage loading and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Function to fetch tours from API
    const fetchTours = async () => {
        try {
            const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project") // Fetches data from API
            if (!response.ok) { // If response is not ok -> throws error message
                throw new Error("Failed to fetch tours.")
            }
            const data = await response.json();
            setTours(data); // Sets fetched data to global state
        } catch (error) {
            setError(true); // If there is an error -> shows error screen
            console.log(error); // Console logs error
        } finally {
            setLoading(false); // Stops showing loading screen
        }
    };

    // Run fetchTours once after the component mounts
    useEffect(() => {
        fetchTours();
    }, [])

    // Renders loading state
    if (loading) {
        return <h2>Loading...</h2>
    };
    // Render error state
    if (error) {
        return <h2>Something went wrong...</h2>
    }; // Render if no tours remain
    if (tours.length === 0) {
        return <h2>No tours left.</h2>;
        <button onClick={fetchBooks}>Refresh</button>
    }
    
    // Render the list of TourCards
    return (
        <section className="tour-list">
            {tours.map((tour) => {
                return (
                    <TourCard
                        key={tour.id} // Assigns each tour with a unique key
                        {...tour} // Passes all tour data using spread
                        onRemove={onRemove}  // Passes the remove function
                    />
                )
            })}
        </section>
    );
};

export default TourList; // Exports tour list