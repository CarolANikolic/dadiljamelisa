import styles from './Navbar.module.css'

const Navbar = () => {
    return (
       
            <nav>
                <div>
                    {/* svg logo here */}
                </div>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Prices</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <div>
                    <select name="language" id="language">
                        <option value="English">English</option>
                        <option value="Serbian">Serbian</option>
                    </select>
                </div>
            </nav>
        
    );
};

export default Navbar;