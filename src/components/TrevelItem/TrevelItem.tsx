import * as React from 'react';

interface TrevelItemProps {
    title:string,
    location:string,
    googleMapsUrl:string,
    startDate:string,
    endDate:string,
    description:string,
    imageUrl:string,
    
}
 
interface TrevelItemState {
    
}
 
class TrevelItem extends React.Component<TrevelItemProps, TrevelItemState> {
    // state = { :  }
    render() { 
        return ( 
            <div className="trevelItem">
                <div className="img">
                    <img src={this.props.imageUrl}></img>
                </div>
                <div className="info">
                    <div className="country">
                        <div className="country-name">{this.props.location}</div>
                        <div className="map-link">
                            <a href={this.props.googleMapsUrl}>View on Google Maps</a>
                        </div>
                    </div>
                    <div className="title">{this.props.title}</div>
                    <div className="dates">{this.props.startDate} - {this.props.endDate}</div>
                    <div className="description">{this.props.description}</div>
                </div>
            </div>
         );
    }
}
 
export default TrevelItem;