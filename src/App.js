import axios from 'axios';
import React, { Component } from 'react';
import Homepage from './Components/Homepage'
import {api__url, api__key} from './Data/ApiDetails.js'

class App extends React.Component {
state = {
  gameDisplay: [],
}


handleSubmit = (event) => {
  const genre = event.target.select.value
  console.log(genre)
  event.preventDefault();
 if(genre === 'none'){ 
   axios
  .get(api__url +`?sort-by=release-date`,{
    headers: {
      'x-rapidapi-key': api__key,
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    }
  })
  .then((response) => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error);
  })
}
  else{
    event.preventDefault();
    axios
    .get(api__url + `?category=${genre}&sort-by=release-date`,{
      headers: {
        'x-rapidapi-key': api__key,
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      }
    })
    .then((response) => {
      console.log(response.data)
    })
  }
}






  render() {
    return (
      <div>
        <Homepage submit={this.handleSubmit} />
      </div>
    )
  }
} export default App;
