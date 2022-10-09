import React from "react"

export default function Location(props) {
    return (
        <div className = "locations">
            <img 
            src = {props.imageUrl}
            className = "locations--image"
            />
            <div className = "locations--content">
                <div className = "locations--maps">
                    <span>
                        <img src = "https://gcdnb.pbrd.co/images/DmtN5mzZWtm2.png?o=1" className = "location--symbol"/>
                        {props.location} 
                    </span>
                    <span className = "locations--maps--link"><a href = "{props.googleMapsUrl}">View on Google Maps.</a></span>
                </div>
                <h2 className = "locations--title">{props.title}</h2>
                <p className = "locations--date">{props.startDate} - {props.endDate}</p>
                <p className = "locations--description">{props.description}</p>
            </div>
        </div>
    )
}