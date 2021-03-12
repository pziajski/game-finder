import options from '../../Data/Options';

function Homepage(props) {
    const { submit } = props;
    return(
        <section className="homepage">
            <h1 className="homepage__title">FindIt</h1>
            <form className='homepage__form' onSubmit={(e) => submit(e)}>
                <label>Pick a Genre 
                    <select name='select' defaultValue='none'>
                        <option value='none'>none</option>
                        {options.map(genre =>
                            <option key={genre} value={genre}> {genre}</option>
                        )}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </section>

    )

}export default Homepage;