import Footer from "./Footer"
import Header from "./Header"
import Nav from "./Nav"
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <div className="App">
            <Header title="React Blog" />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
