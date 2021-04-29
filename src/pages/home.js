import React from 'react'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import OurPartners from '../components/ourPartners';
import OurPlus from '../components/ourPlusSection';
import OurReviews from '../components/ourReviews';
import OurWork from '../components/ourWorkSection';
import Posts from '../components/postList';
import Welcome from '../components/welcomeSection';
import Years from '../components/yearsSection';
import Popular from "../components/PopularMer";

class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar />

<Welcome />

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mx-auto text-center">
        <p class="font-secondary paragraph-lg text-dark" >Цифровая Академия «Elab.Asia» это - широкий ассортимент образовательных программ (более 115 курсов), новейшие методики обучения, возможность предоставления международной сертификации, высококвалифицированные специалисты и уникальная образовательная платформа, которая подходит для всех направлений и специализаций.</p>
        <a href="about.html" class="btn btn-transparent">Узнать больше</a>
      </div>
    </div>
  </div>
</section>

{/* <section class="section">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-title">Skills</h2>
      </div>
      <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div class="card shadow text-center">
          <div class="position-relative rounded-top progress-wrapper" data-color="#fdb157">
            <div class="wave" data-progress="90%"></div>
          </div>
          <div class="card-footer bg-white">
            <h4 class="card-title">Web Design (90%)</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div class="card shadow text-center">
          <div class="position-relative rounded-top progress-wrapper" data-color="#9473e6">
            <div class="wave" data-progress="60%"></div>
          </div>
          <div class="card-footer bg-white">
            <h4 class="card-title">Logo Design (60%)</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div class="card shadow text-center">
          <div class="position-relative rounded-top progress-wrapper" data-color="#bdecf6">
            <div class="wave" data-progress="80%"></div>
          </div>
          <div class="card-footer bg-white">
            <h4 class="card-title">After Effects (80%)</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div class="card shadow text-center">
          <div class="position-relative rounded-top progress-wrapper" data-color="#ffbcaa">
            <div class="wave" data-progress="70%"></div>
          </div>
          <div class="card-footer bg-white">
            <h4 class="card-title">Web App (70%)</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

<OurWork />

<OurPlus />

<Years />

<OurReviews />

<OurPartners />

<Popular/>

<Footer />
            </div>
        );
    }

}

export default Home;