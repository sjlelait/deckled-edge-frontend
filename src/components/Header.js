import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="flex bg-mainPurple">
            <nav className="relative">
                <div className="inline-block items-center p-2">
                    <Link to="/" className="">
                        <span className="sr-only">Deckled Edge</span>
                    </Link>
                </div>
                <div className="inline-block items-center p-2">
                    <Link to="/">
                        <div>Home</div>
                    </Link>
                </div>
                <div className="inline-block items-center p-2">
                    <Link to="/read">
                        <div>Read</div>
                    </Link>
                </div>
                <div className="inline-block items-center p-2">
                    <Link to="/write">
                        <div>Write</div>
                    </Link>
                </div>
                <div className="inline-block items-center p-2">
                    <Link to="/aka">
                        <div>Also Known As</div>
                    </Link>
                </div>

            </nav>
        </header >
    );
}

export default Header;