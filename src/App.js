import axios from 'axios';
import { Component } from 'react';

import Homepage from './pages/HomePage/Homepage';
import GamesPage from './pages/GamesPage/GamesPage';
import './styles/App.scss';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
    state = {
        gameDisplay: [],
        isGameSelected: false,
        gameSelected: null
    }

    handleSubmit = (event) => {
        const genre = event.target.select.value;
        event.preventDefault();
        if (genre === 'none') {
            axios
                .get(`${API_URL}/games?sort-by=release-date`, {
                    headers: {
                        'x-rapidapi-key': API_KEY,
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
            axios
                .get(`${API_URL}/games?category=${genre}&sort-by=release-date`, {
                    headers: {
                        'x-rapidapi-key': API_KEY,
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

    launchGameInfoWindow = (id) => {
        axios
            .get(`${API_URL}/game?id=${id}`, {
                headers: {
                    'x-rapidapi-key': API_KEY,
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                }
            })
            .then((response) => {
                // console.log(response.data);
                // this.setState({
                //     gameSelected: response.data,
                //     isGameSelected: true
                // })
            })
    }

    render() {
        return (
            <div className='app-main'>
                <Homepage submit={this.handleSubmit} /> 
                {this.state.gameDisplay ?
                    <GamesPage games={this.state.gameDisplay} selectGame={this.launchGameInfoWindow} /> :
                    <></>
                }
            </div>
        )
    }
}

export default App;