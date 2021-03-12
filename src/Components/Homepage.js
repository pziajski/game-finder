import react from 'react'
import options from '../Data/Options'

function Homepage(props) {

    return(
        
        <section className="homepage">
            <h1 className="homepage__title">FindIt</h1>
            <form className='homepage__form' onSubmit={props.submit}>
            <label>Pick a Genere 
                <select name='select'>
                    <option selected value='none'>none</option>
                    {options.map(genere => {
                        return (
                            <option value={genere}> {genere}</option>
                        )
                    })}
                </select>
            </label>
            <button>Submit</button>
            </form>

        </section>

    )

}export default Homepage;