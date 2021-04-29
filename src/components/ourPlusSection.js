import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../logo.svg';
import '../App.css'

class OurPlus extends React.Component{
    render(){
        return(
          <section class="section position-relative">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-title">Наши возможности</h2>
              </div>
              <div class="col-lg-6 col-md-6 mb-80">
                <div class="d-flex">
                  <div class="mr-lg-5 mr-3">
                    <i class="ti-desktop icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                  </div>
                  <div>
                    <h4>Образовательная вебинарная платформа</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 mb-80">
                <div class="d-flex">
                  <div class="mr-lg-5 mr-3">
                    <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                  </div>
                  <div>
                    <h4>Международная сертификация</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 mb-80">
                <div class="d-flex">
                  <div class="mr-lg-5 mr-3">
                    <i class="ti-view-list-alt icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                  </div>
                  <div>
                    <h4>Более 9 направлений обучения</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 mb-80">
                <div class="d-flex">
                  <div class="mr-lg-5 mr-3">
                    <i class="ti-book icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                  </div>
                  <div>
                    <h4>Обучение более 115 курсам</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="img-fluid edu-bg-image w-100" src="images/backgrounds/education-bg.png" alt="bg-image" />
        </section>
        );
    }
}

export default OurPlus;