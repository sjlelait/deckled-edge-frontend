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

    return (
        <div>
            <h1 className="text-lg underline">Home</h1>
            <div className="mx-auto flex items-center justify-between">
                <Link
                    to="/write"
                    className="py-2 px-4 ml-10 bg-gray-300 font-semibold rounded-lg hover:text-white hover:bg-purple-600"
                >
                    Write
                </Link>
                <Link
                    to="/aka"
                    className="py-2 px-4 bg-gray-300 font-semibold rounded-lg hover:text-white hover:bg-purple-600"
                >
                    Also Known As
                </Link>
                <Link
                    to="/read"
                    className="py-2 px-4 mr-10 bg-gray-300 font-semibold rounded-lg hover:text-white hover:bg-purple-600"
                >
                    Read
                </Link>
            </div>
            {props.entry ? loaded() : loading()}
        </div>
    )
}

export default Home;