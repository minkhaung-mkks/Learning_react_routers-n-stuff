import Footer from "./Footer"
import Header from "./Header"
import Nav from "./Nav"
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'


const Layout = ({ search, setSearch }) => {
    return (
        <div className="App">
            <Header title="React Blog" />
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    search: PropTypes.string,
    setSearch: PropTypes.func
}

export default Layout
