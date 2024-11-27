import Brand from './Brand.jsx';

export default function Brands() {
    return (
        <section id="brand" className="brand">
            <div className="container">
                <div className="brand-area">
                    <div className="owl-carousel owl-theme brand-item">
                        <Brand />
                        <Brand />
                        <Brand />
                        <Brand />
                        <Brand />
                        <Brand />
                    </div>
                </div>
            </div>
        </section>
    );
}
