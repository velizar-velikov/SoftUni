import CarSearch from './CarSearch.jsx';
import Hero from './Hero.jsx';
import Navigation from './Navigation.jsx';

export default function Home() {
    return (
        <section id="home" className="welcome-hero">
            <div className="top-area">
                <div className="header-area">
                    <Navigation />
                </div>
                <div className="clearfix"></div>
            </div>

            <Hero />

            <CarSearch />
        </section>
    );
}
