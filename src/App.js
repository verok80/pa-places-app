import { data } from './data';
import { useState } from 'react';
import './App.css';

function App() {
  const [places, setPlaces] = useState(data);
  console.log(data)
  const [showText, setShowText] = useState(false);
  const checkPlaces = (id) => {
    let newPlaces = places.filter(place => place.id !==id);
    setPlaces(newPlaces)
  }
 const clickText = (element) =>{
  element.showMore =!element.showMore
  setShowText(!showText)
 }
  return (
    <div>
      <div className="container">
        <h1>{ places.length } places to visit in Pennsylvania </h1>
      </div>
      {places.map((element =>{
        const {id, name, image, imageSource, description,showMore} = element;
        return(
          <div key= {id}>
            <div className="container">
              <h2>{id} - {name}</h2>
            </div>
            
            <div className="container">
              <img src={ image }  alt="view" width="600px"/>
            </div>
            <div className="container">
            <p className ="source">Image source: { imageSource}</p>
            </div>
            <div className="container">
              <p className="description">{showMore ? description : description.substring(0,300) + "...." }
              <button onClick = {() => clickText(element)}>{showMore? "Show less" : "Show more"}</button>
              </p>
            </div>
             <div className="container">
              <button className="btn" onClick = { () => checkPlaces(id)} >Check</button>
            </div>
          </div>
        )
      }))}
      
    </div>
  );
}

export default App;
