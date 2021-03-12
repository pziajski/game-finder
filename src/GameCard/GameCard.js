import React from 'react';

const GameCard = (props) => {
    const { title, thumbnail, short_description, genre } = props.gameInfo;
    return (
        <section className='game-card'>
            <img className='game-card__thumbnail' src={thumbnail} />
            <h2 className='game-card__title'>{title}</h2>
            <p className='game-card__description'>{short_description}</p>
            <p className='game-card__genre'>{genre}</p>
        </section>
    )
}

export default GameCard;