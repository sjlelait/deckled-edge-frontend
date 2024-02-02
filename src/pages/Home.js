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
            <div className="mx-auto mt-20 mb-10 flex items-center justify-between">
                <Link
                    to="/write"
                    className="py-2 px-4 ml-10 bg-white font-semibold rounded-lg shadow-lg hover:text-white hover:bg-mainPurple"
                >
                    Write
                </Link>
                <Link
                    to="/aka"
                    className="py-2 px-4 bg-white font-semibold rounded-lg shadow-lg hover:text-white hover:bg-mainPurple"
                >
                    Also Known As
                </Link>
                <Link
                    to="/read"
                    className="py-2 px-4 mr-10 bg-white font-semibold rounded-lg shadow-lg hover:text-white hover:bg-mainPurple"
                >
                    Read
                </Link>
            </div>
            {props.entry ? loaded() : loading()}
        </div>
    )
}

export default Home;