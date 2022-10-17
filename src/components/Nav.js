import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <section className='nav-bar content-margin flex'>
            <Link to='/'><span className="logo">toolhub.</span></Link>

            <ul className='nav-links flex'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/dashboard'><li>Dashboard</li></Link>
                <Link to='/leaderboard'><li>Leaderboard</li></Link>
            </ul>
        </section>
    )
}

export default Nav;