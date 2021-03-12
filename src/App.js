import axios from 'axios';
import { Component } from 'react';
import Homepage from './pages/HomePage/Homepage';
import GamesPage from './pages/GamesPage/GamesPage';
import { api__url, api__key } from './Data/ApiDetails.js';
import './styles/App.scss';

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
                .get(api__url + `/games?sort-by=release-date`, {
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
            axios
                .get(api__url + `/games?category=${genre}&sort-by=release-date`, {
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

    launchGameInfoWindow = (id) => {
        axios
            .get(api__url + `/game?id=${id}`, {
                headers: {
                    'x-rapidapi-key': api__key,
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