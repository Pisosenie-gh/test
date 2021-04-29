import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../logo.svg';
import '../App.css'

class OurReviews extends React.Component{
    render(){
        return(
            <section class="section bg-primary position-relative testimonial-bg-shapes">
            <div class="container">
              <div class="row">
              <div class="col-12 text-center"><h2 class="section-title text-white mb-5">Наши отзывы</h2></div>
                <div class="col-lg-10 mx-auto testimonial-slider">
                  <div class="text-center testimonial-content">
                    <p class="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit
                      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <img class="img-fluid rounded-circle mb-4 d-inline-block" src="images/testimonial/client-1.png"
                      alt="client-image" />
                    <h4 class="text-white">Jesica Gomez</h4>
                    <h6 class="text-light mb-4">CEO, Funder</h6>
                  </div>
                  <div class="text-center testimonial-content">
                    <p class="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit in
                      voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.</p>
                    <img class="img-fluid rounded-circle mb-4 d-inline-block" src="images/testimonial/client-1.png"
                      alt="client-image" />
                    <h4 class="text-white">Jesica Gomez</h4>
                    <h6 class="text-light mb-4">CEO, Funder</h6>
                  </div>
                  <div class="text-center testimonial-content">
                    <p class="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit in
                      voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.</p>
                    <img class="img-fluid rounded-circle mb-4 d-inline-block" src="images/testimonial/client-1.png"
                      alt="client-image" />
                    <h4 class="text-white">Jesica Gomez</h4>
                    <h6 class="text-light mb-4">CEO, Funder</h6>
                  </div>
                </div>
              </div>
            </div>
            <img src="images/backgrounds/map.png" alt="map" class="img-fluid bg-map" />
            
          </section>
        );
    }
}

export default OurReviews;