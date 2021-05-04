import React from 'react'
import {Link} from 'react-router-dom'

import Almagul from './Almagul.jpeg'

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
                    <p class="text-white mb-4">Мы видим высокий профессионализм команды и огромный потенциал. Уверены, что <strong>наша совместная деятельность пойдет во благо развития образования Казахстана.</strong></p>
                    <img class="img-fluid rounded-circle mb-4 d-inline-block" src={Almagul}
                      alt="client-image" />
                    <h4 class="text-white">Алмагуль Кенесхановна,</h4>
                    <h6 class="text-light mb-4">Вице - президент НАО МОН РК</h6>
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