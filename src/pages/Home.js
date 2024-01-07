import { Link } from 'react-router-dom';

const Home = (props) => {
    const loaded = () => {
        return props.entry
            .filter(entry => entry.public === true)
            .map((entry) => (
                <div key={entry._id} className="entry_public">
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

    return props.entry ? loaded() : loading();
}

export default Home;