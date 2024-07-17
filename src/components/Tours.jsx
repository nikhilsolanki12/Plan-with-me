import Card from "./Card";
import App from "../App";
function Tours({tours,removeTours}){

  return(
    <div className="container">
      <div>
      <h2 className="title">Plan with Love</h2>
      </div>
      <div className="cards">
    {
      tours.map((tour)=>{
        return <Card key={tour.id} {...tour} removeTour={removeTours}></Card>
        
      })
    }
      </div>
    </div>
  )
}

export default Tours;