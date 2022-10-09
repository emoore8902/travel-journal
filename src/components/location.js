import React from "react"

export default function Location(props) {
    return (
        <div className = "locations">
            <img 
            src = {props.imageUrl}
            className = "locations--image"
            />
            <div className = "locations--maps">
                <span>{props.location} </span>
                <span>{props.googleMapsUrl}</span>
            </div>
            <h2 className = "locations--title">{props.title}</h2>
            <p className = "locations--date">{props.startDate} - {props.endDate}</p>
            <p className = "locations--description">{props.description}</p>
        </div>
    )
}