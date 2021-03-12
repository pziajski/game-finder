import axios from 'axios';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './pages/HomePage/Homepage'
import GamesPage from './pages/GamesPage/GamesPage';
import { api__url, api__key } from './Data/ApiDetails.js'

class App extends Component {
    state = {
        gameDisplay: []
    }

    handleSubmit = (event) => {
        const genre = event.target.select.value;
        event.preventDefault();
        if (genre === 'none') {
            return axios
                .get(api__url + `?sort-by=release-date`, {
                    headers: {
                        'x-rapidapi-key': api__key,
                        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                    }
                })
                .then((response) => {
                    this.setState({
                        gameDisplay: response.data
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            event.preventDefault();
             return axios
                .get(api__url + `?category=${genre}&sort-by=release-date`, {
                    headers: {
                        'x-rapidapi-key': api__key,
                        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                    }
                })
                .then((response) => {
                    this.setState({
                        gameDisplay: response.data
                    })
                })
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Route path='/' exact render={renderProps => 
                    <Homepage submit={this.handleSubmit} {...renderProps}/> 
                }/>
                {this.state.gameDisplay ?
                    <GamesPage games={this.state.gameDisplay} /> :
                    <></>
                }
            </BrowserRouter>
        )
    }
}

export default App;