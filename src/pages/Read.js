import { useParams, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Read = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const entry = props.entry;
    const oneEntry = entry ? entry.find((e) => e._id === id) : null;

    const handleDelete = () => {
        props.deleteEntry(id);
        navigate('/read');
    };

    const loaded = () => {
        return (
            <>
                <h1 className="text-lg underline">{oneEntry.title}</h1>
                <p>{oneEntry.text}</p>
                <Link to={`/write/${id}/edit`}>Edit Entry</Link>
                <button id="delete" onClick={handleDelete}>
                    DELETE
                </button>
            </>
        );
    };
    const loading = () => {
        return <h1>Loading...</h1>
    };

    return (
        <div className="oneEntry">
            {oneEntry ? loaded() : loading()}
        </div>
    );
}

export default Read;
