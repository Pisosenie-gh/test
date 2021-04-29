import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../logo.svg';
import '../App.css'

class Welcome extends React.Component{
    render(){
        return(
                <section class="hero-area bg-primary" id="parallax">
  <div class="container">
    <div class="row">
      <div class="col-lg-11 mx-auto">
        <h1 class="text-white font-tertiary">Добро пожаловать <br/> в мир <br/> Инновационного развития</h1>
      </div>
    </div>
  </div>
  <div class="layer-bg w-100">
    <img class="img-fluid w-100" src="images/illustrations/leaf-bg.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l2">
    <img src="images/illustrations/dots-cyan.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l3">
    <img src="images/illustrations/cSharp.png" alt="bg-shape" style={{maxWidth: '60%'}} />
  </div>
  <div class="layer" id="l4">
    <img src="images/illustrations/dots-orange.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l5">
    <img src={logo} className="App-logo" alt="logo" />
  </div>
  <div class="layer" id="l6">
    <img src="images/illustrations/python.png" alt="bg-shape" style={{maxWidth: '60%'}} />
  </div>
  <div class="layer" id="l7">
    <img src="images/illustrations/dots-group-orange.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l8">
    <img src="images/illustrations/js.png" alt="bg-shape" style={{maxWidth: '60%'}}/>
  </div>
  <div class="layer" id="l9">
    <img src="images/illustrations/html.png" alt="bg-shape" style={{maxWidth: '60%'}}/>
  </div>
  <ul class="list-unstyled ml-5 mt-3 position-relative zindex-1">
    <li class="mb-3"><a class="text-white" href="https://www.facebook.com/elabasia_digital_academy-105324734595469/"><i class="ti-facebook"></i></a></li>
    <li class="mb-3"><a class="text-white" href="https://www.instagram.com/elab.asia/"><i class="ti-instagram"></i></a></li>
    <li class="mb-3"><a class="text-white" href="https://www.youtube.com/channel/UCjwLOs7tgaZ1ArqTv10r8Zw/featured"><i class="ti-youtube"></i></a></li>
  </ul>
</section>
        );
    }
}

export default Welcome;