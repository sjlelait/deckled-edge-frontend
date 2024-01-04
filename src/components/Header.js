import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav className="mx-auto flex items-center justify-between">
                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/read">
                    <div>Read</div>
                </Link>
                <Link to="/aka">
                    <div>Also Known As</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;