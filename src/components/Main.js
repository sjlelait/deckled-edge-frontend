import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Read from '../pages/Read';
import ReadIndex from '../pages/ReadIndex';
import AlsoKnownAs from '../pages/AlsoKnownAs';

const Main = (props) => {
    const [entry, setEntry] = useState(null);
    const API_URL = 'https://deckled-edge-backend-988afb1cc431.herokuapp.com/';

    const getEntry = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setEntry(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getEntry();
    }, []);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/read" element={<ReadIndex entry={entry} />} />
                <Route path="/read/:id" element={<Read />} />
                <Route path="/aka" element={<AlsoKnownAs />} />
            </Routes>
        </main>
    );
}

export default Main;