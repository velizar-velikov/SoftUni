import CLientOpinionCard from './ClientOpinionCard.jsx';

export default function ClientsSay() {
    return (
        <section id="clients-say" className="clients-say">
            <div className="container">
                <div className="section-header">
                    <h2>what our clients say</h2>
                </div>
                <div className="row">
                    <div className="owl-carousel testimonial-carousel">
                        <CLientOpinionCard />
                        <CLientOpinionCard />
                        <CLientOpinionCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
