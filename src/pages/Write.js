import { useState } from "react";

const Write = (props) => {
    const [newForm, setNewForm] = useState({
        title: '',
        text: '',
    });

    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.title]: event.target.value,
            [event.target.text]: event.target.value,
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createEntry(newForm);
        setNewForm({
            title: '',
            text: '',
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newForm.title}
                title="title"
                placeholder="title"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.text}
                title="text"
                placeholder="text"
                onChange={handleChange}
            />
            <button type="submit">Publish</button>
        </form>
    )
}

export default Write;
