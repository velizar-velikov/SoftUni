import FeaturedCar from './FeaturedCar.jsx';

export default function FeaturedCars() {
    return (
        <section id="featured-cars" className="featured-cars">
            <div className="container">
                <div className="section-header">
                    <p>
                        checkout <span>the</span> featured cars
                    </p>
                    <h2>featured cars</h2>
                </div>
                <div className="featured-cars-content">
                    <div className="row">
                        <FeaturedCar />
                        <FeaturedCar />
                        <FeaturedCar />
                        <FeaturedCar />
                    </div>
                    <div className="row">
                        <FeaturedCar />
                        <FeaturedCar />
                        <FeaturedCar />
                        <FeaturedCar />
                    </div>
                </div>
            </div>
        </section>
    );
}
