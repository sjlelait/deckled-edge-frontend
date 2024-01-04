import { Link } from 'react-router-dom';

const ReadIndex = (props) => {
    const loaded = () => {
        return props.entry.map((entry) => (
            <div key={entry._id} className="entry">
                <Link to={`/read/${entry._id}`}>
                    <h2>{entry.title}</h2>
                </Link>
                <p>{entry.text}</p>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return props.entry ? loaded() : loading();
}

export default ReadIndex;