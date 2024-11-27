import { useState } from 'react';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import NewCars from './components/NewCars.jsx';
import FeaturedCars from './components/FeaturedCars.jsx';
import ClientsSay from './components/ClientsSay.jsx';
import Brands from './components/Brands.jsx';
import Blog from './components/Blog.jsx';
import Footer from './components/Footer.jsx';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Home />

            <Services />

            <NewCars />

            <FeaturedCars />

            <ClientsSay />

            <Brands />

            <Blog />

            <Footer />
        </>
    );
}

export default App;
