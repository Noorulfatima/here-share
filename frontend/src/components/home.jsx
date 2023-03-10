import React , {useEffect} from "react";
import $ from 'jquery';
import 'owl.carousel'
import "../css/bootstrap.min.css";
import "../css/main.css";
import carousel1 from "../img/carousel-1.jpg";
import carousel2 from "../img/carousel-2.jpg";
import TeamMember from "./teamMember";
import Service from "./service";
import LatestUser from "./latestUser";
import Feature from "./feature";
import Aboutpart1 from "./aboutpart1";
function Home() {
  
    useEffect(() => {
        $(document).ready(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
  });
  
    
        })

}, []);
  return (
    <>
      <div class="container-fluid p-0">
        <div
          id="header-carousel"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100" src={carousel1} alt="carousel1" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{ maxWidth: "900px" }}>
                  <h5 class="text-white text-uppercase">
                    Business Consultancy
                  </h5>
                  <h1 class="display-1 text-white mb-md-4">
                    We Provide Solution On Your Business
                  </h1>
                  <a
                    href="/jdhsj"
                    class="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill"
                  >
                    Get Quote
                  </a>
                  <a
                    href="/hasdas"
                    class="btn btn-secondary py-md-3 px-md-5 rounded-pill"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="w-100" src={carousel2} alt="carousel2" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{ maxWidth: "900px" }}>
                  <h5 class="text-white text-uppercase">
                    Business Consultancy
                  </h5>
                  <h1 class="display-1 text-white mb-md-4">
                    Take Our Help To Reach The Top Level
                  </h1>
                  <a
                    href="get"
                    class="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill"
                  >
                    Get Quote
                  </a>
                  <a
                    href="contact"
                    class="btn btn-secondary py-md-3 px-md-5 rounded-pill"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <Aboutpart1 />

      <Service />

      <Feature />

      <TeamMember />

      <LatestUser />
    </>
  );
}

export default Home;
