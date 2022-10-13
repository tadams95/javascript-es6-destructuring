// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
// import animals, {useAnimals} from "./data";

//destructured objects in array from practice.js
const [honda, tesla, mclaren] = cars;

//destructured nested objects
const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;
const {speedStats: {topSpeed: mclarenTopSpeed}} = mclaren;

//destructured nested arrays, assigned new name
const {coloursByPopularity: [hondaTopColour]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;
const {coloursByPopularity: [mclarenTopColour]} = mclaren;

ReactDOM.render(
  <table>
    <tr>
        {/* table heads */}
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
        {/* objects rendered to table */}
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
        {/* objects rendered to table */}
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td> 
    </tr>
    <tr>
        <td>{mclaren.model}</td>
        <td>{mclarenTopSpeed}</td>
        <td>{mclarenTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
