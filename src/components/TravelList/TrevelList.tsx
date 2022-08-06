import TravelItem from "@components/TravelItem/TravelItem";
import travelData from './travelData'
import "./travelList.css"
import React from "react";

interface TravelListProps {
    
}
 
interface TravelListState {
    
}
 
class TravelList extends React.Component<TravelListProps, TravelListState> {
    // state = { :  }

    private mappedTrevelItems = travelData.map(item =>{
        return(
            <>
            <TravelItem
                key = {item.id}
                {...item}/>
            <hr style={{border:"1px solid #F5F5F5"}}/>
            </>
        )
    })


    render() { 
        // this.mappedTrevelItems[0].props.CSSProperties[]
        return ( 
            <div className="travel-list">
                {this.mappedTrevelItems}
            </div>
         );
    }
}
 
export default TravelList;