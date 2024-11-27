export default function NewCar() {
    return (
        <div className="single-new-cars-item">
            <div className="row">
                <div className="col-md-7 col-sm-12">
                    <div className="new-cars-img">
                        <img src="/images/new-cars-model/ncm1.png" alt="img" />
                    </div>
                </div>
                <div className="col-md-5 col-sm-12">
                    <div className="new-cars-txt">
                        <h2>
                            <a href="#">
                                chevrolet camaro <span> za100</span>
                            </a>
                        </h2>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                        <p className="new-cars-para2">
                            Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </p>
                        <button className="welcome-btn new-cars-btn" onClick={() => (window.location.href = '#')}>
                            view details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
