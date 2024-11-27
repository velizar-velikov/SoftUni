import NewCar from './NewCar.jsx';

export default function NewCars() {
    return (
        <section id="new-cars" className="new-cars">
            <div className="container">
                <div className="section-header">
                    <p>
                        checkout <span>the</span> latest cars
                    </p>
                    <h2>newest cars</h2>
                </div>
                <div className="new-cars-content">
                    <div className="owl-carousel owl-theme" id="new-cars-carousel">
                        <div className="new-cars-item">
                            <NewCar />
                        </div>
                        <div className="new-cars-item">
                            <NewCar />
                        </div>
                        <div className="new-cars-item">
                            <NewCar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
