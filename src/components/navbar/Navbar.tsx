import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (        
            <header>
                <nav>
                    <div>LOGO</div>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/Message"><li>Message</li></Link>
                        <Link to="/Profile"><li>Profile</li></Link>
                        <Link to="/Contact"><li>Contact</li></Link>
                    </ul>
                </nav>
            </header>        
    );
};

export default Navbar;