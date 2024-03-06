import React from 'react';
import { useEffect, useState, useCallback } from 'react';
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

    const getPublicEntries = async () => {
        try {
            const response = await fetch(`${API_URL}`, {
                method: 'GET',
            });
            const data = await response.json();
            setEntry(data);
        } catch (error) {
            console.error('Error fetching public entries:', error);
        }
    };

    const getEntry = useCallback(async () => {
        try {
            const token = await props.user.getIdToken();
            const response = await fetch(`${API_URL}read`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
            });
            const data = await response.json();
            setEntry(data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }, [props.user]);

    const createEntry = async (entry) => {
        try {
            const token = await props.user.getIdToken();
            await fetch(`${API_URL}read`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
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
            const token = await props.user.getIdToken();
            await fetch(`${API_URL}read/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(formData),
            });
            getEntry();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteEntry = async (id) => {
        const token = await props.user.getIdToken();
        await fetch(`${API_URL}read/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });
        getEntry();
    };

    useEffect(() => {
        getPublicEntries();
    }, [props.user, getEntry]);


    return (
        <main>
            <Routes>
                <Route path="/" element={<Home entry={entry} user={props.user} />} />
                <Route path="/read" element={<ReadIndex entry={entry} />} />
                <Route path="/read/:id" element={<Read entry={entry} deleteEntry={deleteEntry} user={props.user} />} />
                <Route path="/write" element={<Write entry={entry} createEntry={createEntry} user={props.user} />} />
                <Route path="/write/:id/edit" element={<Write entry={entry} updateEntry={updateEntry} user={props.user} />} />
                <Route path="/aka" element={<AlsoKnownAs entry={entry} user={props.user} />} />
                <Route path="/writersblock" element={<WritersBlock entry={entry} user={props.user} />} />
            </Routes>
        </main>
    );
}

export default Main;