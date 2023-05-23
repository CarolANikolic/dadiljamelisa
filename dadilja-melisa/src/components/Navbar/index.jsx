const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    <select name="language" id="language">
                        <option value="English">English</option>
                        <option value="Serbian">Serbian</option>
                    </select>
                </div>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Prices</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;