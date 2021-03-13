import './Homepage.scss';
import arrow from '../../images/down-arrow.svg';

import genres from '../../assets/data/genres.json';

function Homepage({ submit }) {
    return(
        <div className="homepage">
            <h1 className="homepage__title">FindIt</h1>
            <h2 className='homepage__info'>Bored and Broke no Problem </h2>
            <form className='homepage__form' onSubmit={submit}>
            <label className='homepage__form--label'>Pick a Genre 
                <select className="homepage__form--picker" name='select' defaultValue='none'>
                    <option value='none'>none</option>
                    {genres.map(genre => 
                        <option key={genre.id} value={genre.name}> {genre.name}</option>
                    )}
                </select>
            </label>
            <button className='homepage__form--btn'>Submit</button>
            </form>
            <img className="homepage__arrow" src={arrow} alt='arrow' />
        </div>
    )

}

export default Homepage;