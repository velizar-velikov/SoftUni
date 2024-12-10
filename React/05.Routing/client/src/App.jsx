import NotFound from './components/404.jsx';
import About from './components/About.jsx';
import Comments from './components/Comments.jsx';
import Dashboard from './components/Dashboard.jsx';
import Details from './components/Details.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Navigation from './components/Navigation.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/details/:id" element={<Details />}>
                        <Route path="comments" element={<Comments />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
