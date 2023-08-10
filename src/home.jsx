import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
             <div class="container-fluid main_menu">
    <div class="row">
        <div class="col-md-10 col-12 mx-auto">


            <nav class="navbar navbar-expand-lg ">

                <a class="navbar-brand" href="/"><i class="far fa-snowflake"></i> WeatherApp <i
                        class="far fa-snowflake"></i></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/weather">Weather</a>
                        </li>
                        

                    </ul>

                </div>
            </nav>
        </div>
    </div>
</div>

    <div className="container-fluid main_header">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <div className="row">
            <div className="col-md-6 col-12 main_header_left">
              <p>Welcome to the weather app</p>
              <h1>Get the latest <span className="txt_clr">weather</span> info of your city</h1>
              <a href="/Weather"><button className="btn btn-primary">check now</button></a>
            </div>
            <div className="col-md-6 col-12 main_header_right">
              <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../img/bg1.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="../img/bg2.png" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="../img/bg3.png" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default Home;
