import React from 'react';
import GameCard from '../../Components/GameCard/GameCard';
import './GamesPage.scss';

const GamesPage = (props) => {
    const { games } = props; // TODO change games to proper prop
    return (
        <div className='games-page'>
            <ul className='games-page__game-list'>
                {games.map(game => 
                    <li key={game.id}>
                        <GameCard gameInfo={game} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default GamesPage;