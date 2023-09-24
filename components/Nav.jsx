import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
Nav.propTypes = {
    search: PropTypes.string,
    setSearch: PropTypes.func
}
const Nav = ({ search, setSearch }) => {
    return (
        <nav className='nav'>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input
                    id="search"
                    type="text"
                    placeholder='Search Posts'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/post'}>Posts</Link></li>
                <li><Link to={'/about'}>About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
