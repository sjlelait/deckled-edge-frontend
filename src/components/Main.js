import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ReadIndex from '../pages/ReadIndex';
import Read from '../pages/Read';
import Write from '../pages/Write';
import AlsoKnownAs from '../pages/AlsoKnownAs';
import WritersBlock from '../pages/WritersBlock';

const Main = (props) => {
    const [entry, setEntry] = useState(null);
    const API_URL = 'https://deckled-edge-backend-988afb1cc431.herokuapp.com/';

    const getEntry = async () => {
        try {
            const response = await fetch(`${API_URL}read`);
            const data = await response.json();
            setEntry(data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    const createEntry = async (entry) => {
        try {
            await fetch(`${API_URL}read`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entry),
            });
            getEntry();
        } catch (error) {
            console.log(error);
        }
    };

    const updateEntry = async (id, formData) => {
        try {
            await fetch(`${API_URL}read/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            getEntry();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteEntry = async (id) => {
        await fetch(`${API_URL}read/${id}`, {
            method: 'DELETE',
        });
        getEntry();
    };

    useEffect(() => {
        getEntry();
    }, []);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home entry={entry} />} />
                <Route path="/read" element={<ReadIndex entry={entry} />} />
                <Route path="/read/:id" element={<Read entry={entry} deleteEntry={deleteEntry} />} />
                <Route path="/write" element={<Write entry={entry} createEntry={createEntry} />} />
                <Route path="/write/:id/edit" element={<Write entry={entry} updateEntry={updateEntry} />} />
                <Route path="/aka" element={<AlsoKnownAs entry={entry} />} />
                <Route path="/writersblock" element={<WritersBlock entry={entry} />} />
            </Routes>
        </main>
    );
}

export default Main;