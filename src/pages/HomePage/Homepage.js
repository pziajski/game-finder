import options from '../../Data/Options';
import './Homepage.scss';
import arrow from '../../images/down-arrow.svg'

function Homepage(props) {

    return(
        
        <section className="homepage">
            <h1 className="homepage__title">FindIt</h1>
            <h2 className='homepage__info'>Bored and Broke no Problem </h2>
            <form className='homepage__form' onSubmit={props.submit}>
            <label className='homepage__form--label'>Pick a Genere 
                <select className="homepage__form--picker" name='select'>
                    <option  selected value='none'>none</option>
                    {options.map(genere => {
                        return (
                            <option value={genere}> {genere}</option>
                        )
                    })}
                </select>
            </label>
            <button className='homepage__form--btn'>Submit</button>
            </form>
            <img className="homepage__arrow" src={arrow}></img>

        </section>

    )

}export default Homepage;