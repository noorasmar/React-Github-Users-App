import './style.css'

function SearchForm() {
    return ( 
        <form>
            <input type='text' placeholder='Enter user name'/>
            <input type='submit' value='Search'/>
        </form>
    );
}

export default SearchForm;