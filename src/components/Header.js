import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="flex">
            <nav className="relative">
                <div className="inline-block items-center">
                    <Link to="/" className="">
                        <span className="sr-only">Deckled Edge</span>
                    </Link>
                </div>
                <div className="inline-block items-center">
                    <Link to="/">
                        <div>Home</div>
                    </Link>
                </div>

                <Link to="/read">
                    <div>Read</div>
                </Link>
                <Link to="/aka">
                    <div>Also Known As</div>
                </Link>
            </nav>
        </header >
    );
}

export default Header;