import SearchIcon from '../icon/SearchIcon';

const SearchBar = () => {
    return (
        <div className='search'>
            <SearchIcon />
            <input type='search' placeholder='Wyszukaj' className='search-bar' />
        </div>
    )
}

export default SearchBar;
