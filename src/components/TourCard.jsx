import React, {useState} from "react"; // Imports react and local state

// TourCard renders individuals tour details
const TourCard = ({id, name, info, price, image, onRemove}) => {
    const [readMore, setReadMore] = useState(false); // Toggles read more / show less

    return (
        <article className="tour-card">
            <h3>{name}</h3>
            <p>${price}</p>
            <img src={image} alt={name} className="tour-image"/>

            <p>
                {/* Shows full info if true, otherwise shows snippet */}
                {readMore ? info : `${info.substring(0,80)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {/* Displays tour info with toggle button*/}
                    {readMore ? "Show Less" : "Read More"}
                </button>
            </p>
            {/* Button to remove tour card */}
            <button className="button-remove" onClick={() => {
                onRemove(id)
            }}>Remove Tour</button>
        </article>
    )
}

export default TourCard; // Exports tour card
