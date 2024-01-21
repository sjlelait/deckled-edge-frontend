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
        poem: false,
        favorite: false,
        public: false
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: fieldValue,
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
            poem: false,
            favorite: false,
            public: false
        });
    };

    // pre-fill with data for edit
    useEffect(() => {
        if (currentEntry) {
            setForm(currentEntry);
        }
    }, [currentEntry]);


    return (
        <div className="flex justify-center min-h-screen">
            <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
                <h1 className="text-lg underline">{isEditing ? `Edit ${form.title}` : 'Write'}</h1>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="title">
                        Title:
                    </label>
                    <input
                        type="text"
                        value={form.title}
                        name="title"
                        placeholder="title"
                        onChange={handleChange}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="title">
                        Text:
                    </label>
                    <textarea
                        type="text"
                        value={form.text}
                        name="text"
                        placeholder="text"
                        onChange={handleChange}
                        className="border border-gray-300 rounded px-3 py-2 w-full h-60 resize-none"
                        rows="auto"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                        Poem:
                        <input
                            type="checkbox"
                            checked={form.poem}
                            name="poem"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                        Favorite:
                        <input
                            type="checkbox"
                            checked={form.favorite}
                            name="favorite"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                        Public:
                        <input
                            type="checkbox"
                            checked={form.public}
                            name="public"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button
                    className="bg-blue-200 text-lg rounded-lg shadow-lg"
                    type="submit">{isEditing ? 'Update' : 'Publish'}
                </button>
            </form>
        </div>

    );
};

export default Write;