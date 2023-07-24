import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My Arctic Experience</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/infonorthernlights">Aurora</Link>
                <Link to="/our-toursinrovaniemi">Book Online</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
     );
}

export default Navbar;