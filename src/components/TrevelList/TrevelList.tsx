import TrevelItem from "@components/TrevelItem/TrevelItem";
import travelData from './travelData'
import React from "react";

interface TrevelListProps {
    
}
 
interface TrevelListState {
    
}
 
class TrevelList extends React.Component<TrevelListProps, TrevelListState> {
    // state = { :  }

    private mappedTrevelItems = travelData.map(item =>{
        return(
            <TrevelItem
                key = {item.id}
                {...item}/>
        )
    })

    render() { 
        return ( 
            <div className="trevelList">
                {this.mappedTrevelItems}
            </div>
         );
    }
}
 
export default TrevelList;