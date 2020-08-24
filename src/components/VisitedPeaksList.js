import React from 'react';
import { useDestinations } from 'hooks';



const VisitedPeaksList = () => {
const { destinations } = useDestinations();
destinations.sort((a, b) => a.peakNumber - b.peakNumber);
    return (
        <ul>
          { destinations.map(destination => {
            const {id, name, winter} = destination;
              return (<li className="visitedPeaksList" key={id}>{name} 
              {winter===true &&
              <img className="winter" src="/snowflake.png" width="20px" alt="zimowy szczyt"></img>
              }
              </li>)
          })}
        </ul>
    )
}

export default VisitedPeaksList;
