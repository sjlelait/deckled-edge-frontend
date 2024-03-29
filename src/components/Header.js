import React from 'react';
import { login, logout } from '../firebase';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="flex bg-mainPurple">
            <div className="flex lg:flex-1">
                <Link to="/" className="flex mr-auto items-center ml-4">
                    <div className="font-semibold text-lg">Deckled Edge</div>
                </Link>
            </div>
            <nav className="ml-auto flex max-w-7xl items-center justify-between h-16 p-6 lg:px-6">
                {props.user ?
                    <>
                        <div className="pr-5">
                            <img className="rounded-full w-10 h-10"
                                src={props.user.photoURL}
                                alt={props.user.displayName} />
                        </div>
                        <div className="inline-block items-center hover:shadow-lg hover:rounded-lg p-2">
                            <Link to="/read">
                                <div>Read</div>
                            </Link>
                        </div><div className="inline-block items-center hover:shadow-lg hover:rounded-lg p-2">
                            <Link to="/write">
                                <div>Write</div>
                            </Link>
                        </div><div className="inline-block items-center hover:shadow-lg hover:rounded-lg p-2">
                            <Link to="/aka">
                                <div>AKA</div>
                            </Link>
                        </div>
                        <div className="inline-block items-center hover:shadow-lg hover:rounded-lg p-2">
                            <button onClick={logout}>Logout</button>
                        </div>
                    </>
                    :
                    <>
                        <div className="inline-block items-center hover:shadow-lg hover:rounded-lg p-2">
                            <Link to="/aka">
                                <div>AKA</div>
                            </Link>
                        </div>
                        <div className="inline-block items-center hover:shadow-lg hover:rounded-lg p-2">
                            <button onClick={login}>Login</button>
                        </div>
                    </>
                }
            </nav>
        </header >
    );
}

export default Header;