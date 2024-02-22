import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Home = (props) => {
    return (
        <>
            <div className="mx-auto pt-12 pb-12 flex items-center justify-between bg-background">
                {props.user ?
                    <>
                        <Link
                            to="/write"
                            className="py-2 px-4 ml-10 bg-white font-semibold rounded-lg shadow-lg hover:bg-mainPurple"
                        >
                            Write
                        </Link>
                        <Link
                            to="/read"
                            className="py-2 px-4 bg-white font-semibold rounded-lg shadow-lg hover:bg-mainPurple"
                        >
                            Read
                        </Link>
                        <Link
                            to="/aka"
                            className="py-2 px-4 mr-6 bg-white font-semibold rounded-lg shadow-lg hover:bg-mainPurple"
                        >
                            Also Known As
                        </Link>
                    </>
                    :
                    <>
                        <Link
                            to="/aka"
                            className="py-2 px-4 ml-5 bg-white font-semibold rounded-lg shadow-lg hover:bg-mainPurple"
                        >
                            Also Known As
                        </Link>
                    </>
                }
            </div>
            {props.entry && <Carousel entry={props.entry} />}
        </>
    )
}

export default Home;