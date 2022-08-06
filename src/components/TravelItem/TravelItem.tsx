import * as React from 'react';
import "@img/mapPin.svg"
import "./TravelItem.css"

interface TravelItemProps {
    title:string,
    location:string,
    googleMapsUrl:string,
    startDate:string,
    endDate:string,
    description:string,
    imageUrl:string,
    style?:React.CSSProperties
}
 
interface TravelItemState {
    
}
 
class TravelItem extends React.Component<TravelItemProps, TravelItemState> {
    // state = { :  }
    render() { 
        return ( 
            <div className="travelItem flex" style={this.props.style}>
                <div className="photo">
                    <img src={this.props.imageUrl}></img>
                </div>
                <div className="info">
                    <div className="country flex">
                        <div className="country-name flex">
                            <img src="/src/assets/img/mapPin.svg" alt="pin" className='pin'/>
                            {this.props.location.toUpperCase()}
                            </div>
                        <div className="map-link">
                            <a href={this.props.googleMapsUrl}>View on Google Maps</a>
                        </div>
                    </div>
                    <div className="title"><h1>{this.props.title}</h1></div>
                    <div className="dates">{this.props.startDate} - {this.props.endDate}</div>
                    <div className="description"><p>{this.props.description}</p></div>
                </div>
            </div>
         );
    }
}
 
export default TravelItem;