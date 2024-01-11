import { useParams } from "react-router-dom";

const Read = (props) => {
    const { id } = useParams();
    const entry = props.entry;
    const oneEntry = entry ? entry.find((e) => e._id === id) : null;

    const loaded = () => {
        return (
            <>
                <h1 className="text-lg underline">{oneEntry.title}</h1>
                <p>{oneEntry.text}</p>
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
