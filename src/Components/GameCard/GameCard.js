import React from 'react';
import './GameCard.scss';

const GameCard = (props) => {
    const { title, thumbnail, short_description, genre } = props.gameInfo;

    return (
        <section className='game-card'>
            <img className='game-card__thumbnail' src={thumbnail} alt={title} />
            <div className='game-card__header'>
                <h3 className='game-card__title'>{title}</h3>
                <p className='game-card__genre'>{genre}</p>
            </div>
            <p className='game-card__description'>{short_description}</p>
        </section>
    )
}

export default GameCard;