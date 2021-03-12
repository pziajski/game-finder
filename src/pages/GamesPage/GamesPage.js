import React from 'react';
import GameCard from '../../Components/GameCard/GameCard';
import './GamesPage.scss';

const GamesPage = (props) => {
    const { games, selectGame } = props;

    return (
        <div className='games-page'>
            <ul className='games-page__game-list'>
                {games.map(game => 
                    <li key={game.id} onClick={() => selectGame(game.id)}>
                        <GameCard gameInfo={game}/>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default GamesPage;