import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Read from '../pages/Read';
import ReadIndex from '../pages/ReadIndex';
import AlsoKnownAs from '../pages/AlsoKnownAs';

const Main = (props) => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/read" element={<ReadIndex />} />
                <Route path="/read/:id" element={<Read />} />
                <Route path="/aka" element={<AlsoKnownAs />} />
            </Routes>
        </main>
    );
}

export default Main;