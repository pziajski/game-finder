import React, { Component } from 'react';
import GamesPage from './pages/GamesPage/GamesPage';
import games from './assets/data/temp-game-list.json';

export default class App extends Component {
	render() {
    	return (
			<div>
				<GamesPage games={games} />
			</div>
	    )
	}
}
