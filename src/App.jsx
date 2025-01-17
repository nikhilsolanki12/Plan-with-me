import { useReducer, useState } from "react";
import "./App.css";
import data from "./data"
import Tours from "./components/Tours";

function App() {

 const [tours,setTours]= useState(data);

 function removeTour(id){
  const newTours=tours.filter(tour => tour.id!=id);
  setTours(newTours);
 }


 if(tours.length==0){
  return (<div className="refresh">
    <h2>No tour left</h2>
    <button className="btn-white" onClick={()=>{setTours(data)}}>Refesh</button>
  </div>
  )
 }
  return (
     <div className="App">
        <Tours tours={tours} removeTours={removeTour}></Tours>
      </div> 
  )
}

export default App;
