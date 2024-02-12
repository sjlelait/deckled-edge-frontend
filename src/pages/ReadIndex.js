import React from 'react';
import { Link } from 'react-router-dom';

const ReadIndex = (props) => {
    const loaded = () => {
        return props.entry.map(entry => (
            <div key={entry._id} className="entry">
                <Link to={`/read/${entry._id}`}>
                    <h2 className="text-lg">{entry.title}</h2>
                </Link>
                <p className="text-gray-500">{entry.text}</p>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <div>
            <h1 className="text-lg underline">My Work</h1>
            {props.entry ? loaded() : loading()}
        </div>
    )
}

export default ReadIndex;