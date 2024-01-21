import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const Write = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { entry, createEntry, updateEntry } = props;

    // edit or new:
    const isEditing = !!id;
    const currentEntry = isEditing ? entry.find((e) => e._id === id) : null;

    const [form, setForm] = useState({
        title: '',
        text: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isEditing) {
            updateEntry(id, form);
            navigate(`/read/${id}`);
        } else {
            createEntry(form);
            navigate('/read');
        }

        setForm({
            title: '',
            text: '',
        });
    };

    // pre-fill with data for edit
    useEffect(() => {
        if (currentEntry) {
            setForm(currentEntry);
        }
    }, [currentEntry]);


    return (
        <>
            <h1 className="text-lg underline">{isEditing ? `Edit ${form.title}` : 'Write'}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={form.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={form.text}
                    name="text"
                    placeholder="text"
                    onChange={handleChange}
                />
                <button type="submit">{isEditing ? 'Update' : 'Publish'}</button>
            </form>
        </>

    )
}

export default Write;