import React from "react";
import FlightItem from "./FlightItem.js"
import './AirlineTable.scss';

export default ({ data }) => {
  let flightList = data.map((value) => {
    return <FlightItem data={value} />
    });

  return <div className="data-table">
    <table>
      <tr>
        <th>Terminal</th>
        <th>Local time</th>
        <th>Destination</th>
        <th>Status</th>
        <th>Airline</th>
        <th>Flight</th>
      </tr>

      {flightList}
    </table>
   </div>
};
