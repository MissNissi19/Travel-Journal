import React from "react"

export default function Experience(props){
    return (
        <section className="journal">
            <div >
                <img src={props.img} className="image" alt="Imagine" />
            </div>
            <div className="journal-text">
                <div className="journal-location">
                    <p className="location-name">
                        <img src="https://www.pngitem.com/pimgs/m/23-235870_google-location-icon-png-location-symbol-red-png.png" className="location-image" alt="Imagine" />{props.location}
                    </p>
                    <p><a className="location-map" href={props.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <h3>{props.title}</h3>
                <div className="time">
                    <h6>{props.startDate} - </h6>
                    <h6>{props.endDate}</h6>
                </div>
                <p className="description">{props.description}</p>
            </div>
            <hr />
            
        </section>
    )
}