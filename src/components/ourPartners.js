import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../logo.svg';
import '../App.css'

class OurPartners extends React.Component{
    render(){
        return(
          <section class="section pb-0">
          <div class="container">
                <div class="col-12 text-center">
                    <h2 class="section-title text-black mb-5" >Наши партнеры</h2>
                </div>
            <div class="client-logo-slider d-flex align-items-center">
              <a href="#" class="text-center d-block outline-0 p-4"><img class="d-unset img-fluid"
                  src="images/clients-logo/client-logo-1.png" alt="client-logo" /></a>
              <a href="#" class="text-center d-block outline-0 p-4"><img class="d-unset img-fluid"
                  src="images/clients-logo/client-logo-2.png" alt="client-logo" /></a>
              <a href="#" class="text-center d-block outline-0 p-4"><img class="d-unset img-fluid"
                  src="images/clients-logo/client-logo-3.png" alt="client-logo" /></a>
              <a href="#" class="text-center d-block outline-0 p-4"><img class="d-unset img-fluid"
                  src="images/clients-logo/client-logo-4.png" alt="client-logo" /></a>
              <a href="#" class="text-center d-block outline-0 p-4"><img class="d-unset img-fluid"
                  src="images/clients-logo/client-logo-5.png" alt="client-logo" /></a>
              <a href="#" class="text-center d-block outline-0 p-4"><img class="d-unset img-fluid"
                  src="images/clients-logo/client-logo-1.png" alt="client-logo" /></a>
              <a href="#" class="text-center d-block outline-0 p-4"><img class="d-unset img-fluid"
                  src="images/clients-logo/client-logo-2.png" alt="client-logo" /></a>
              <a href="#" class="text-center d-block outline-0 p-4"><img class="d-unset img-fluid"
                  src="images/clients-logo/client-logo-3.png" alt="client-logo" /></a>
              <a href="#" class="text-center d-block outline-0 p-4"><img class="d-unset img-fluid"
                  src="images/clients-logo/client-logo-4.png" alt="client-logo" /></a>
              <a href="#" class="text-center d-block outline-0 p-4"><img class="d-unset img-fluid"
                  src="images/clients-logo/client-logo-5.png" alt="client-logo" /></a>
            </div>
          </div>
        </section>
        );
    }
}

export default OurPartners;