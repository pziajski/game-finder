import React from 'react';
import GameCard from '../GameCard/GameCard';

const GamesPage = (props) => {
    const { games } = props;
    return (
        <div className='games-page'>
            <ul className='games-page__game-list'>
                {games.map(game => 
                    <li key={game.id} className='games-page__game-item'>
                        <GameCard gameInfo={game} />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default GamesPage;