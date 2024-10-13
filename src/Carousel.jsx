import React from 'react'


const Carousel = () => {
    return (

        <div className=" container border border-3 border-info pt-3 rounded">
            <h1 className="text-center font-weight-bold:700 text-uppercase text-success">Wish you 82<span className='text-lowercase'>nd</span> EME Corps Day Celeberation</h1>
            <h4 className="text-center p-50">Click on play button to play song:</h4>
            <audio className="p-2" controls autoPlay loop>
                <source src="corps_song.mp3" type="audio/mpeg" />
            </audio>

            <div id="carouselExampleAutoplaying" className="carousel slide container col-lg-2 col-md-4 col-sm-6 col-xs-12" data-bs-ride="carousel">
                <div className="carousel-inner rounded-5 img-fluid img-responsive " width="304" height="236">
                    <div className="carousel-item active">
                        <img src="img1.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img2.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img3.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img4.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img5.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img6.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img7.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img8.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img9.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img10.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img11.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img12.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img13.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img14.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img15.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img16.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                    <div className="carousel-item">
                        <img src="img17.jpg" className="d-block w-100" width="500" height="300" alt="image" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h5 className="text-center text-success pt-2">Specially wish to DEE(RO)-127 course all Members on Occasion of 82nd Corps Day Celebration by Sub Amarchand (course senior).</h5>
            <section className='text-center text-danger'>
                <p>
                    Copyright 2024 ©- All Right Reserved.
                    <br /> Mahendra Singh Gajraj
                </p>
            </section>

        </div>
    )
}

export default Carousel