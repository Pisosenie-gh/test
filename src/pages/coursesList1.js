import React, {useEffect, useState} from 'react'
import CoursesIT from '../components/coursesIT';
import CoursesKids from '../components/coursesKids';
import CoursesTeacher from '../components/coursesTeacher';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

import {Link} from 'react-router-dom'
import OurPartners from '../components/ourPartners';
import axios from "axios";

function CoursesList1() {
  const [event, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/it/`
    }).then(response => {
      setData(response.data)
    })
  });

{
        return(
            <div>
                <Navbar />

<section class="page-title bg-primary position-relative">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="text-white font-tertiary">Наши курсы</h1>
      </div>
    </div>
  </div>
  <img src="images/illustrations/page-title.png" alt="illustrations" class="bg-shape-1 w-100" />
  <img src="images/illustrations/cSharp.png" alt="illustrations" class="bg-shape-2" style={{maxWidth: '10%'}} />
  <img src="images/illustrations/dots-cyan.png" alt="illustrations" class="bg-shape-3" />
  <img src="images/illustrations/leaf-orange.png" alt="illustrations" class="bg-shape-4" />
  <img src="images/illustrations/html.png" alt="illustrations" class="bg-shape-5" style={{webkitTransform: 'rotate(0deg)', transform: 'rotate(0deg)', maxWidth: '10%'}} />
  <img src="images/illustrations/dots-group-cyan.png" alt="illustrations" class="bg-shape-6" />
  <img src="images/illustrations/java.png" alt="illustrations" class="bg-shape-7" style={{right: -0, bottom: -60, maxWidth: '10%'}}/>
</section>

<section class="section">
  <div class="container">
    <div class="row mb-5">
      <div class="col-12">
        <div class="btn-group btn-group-toggle justify-content-center d-flex" data-toggle="buttons">
        <Link to={{pathname: '/courses-list1', fromDashboard: false}}>
          <label class="btn btn-sm btn-primary">
            <input type="radio" name="shuffle-filter" value="design" style={{position: 'absolute', clip: 'rect(0,0,0,0)', pointerEvents: 'none'}}/>Програмиирование
          </label>
          </Link>
          <Link to={{pathname: '/courses-list2', fromDashboard: false}}>
          <label class="btn btn-sm btn-primary">
            <input type="radio" name="shuffle-filter" value="design" style={{position: 'absolute', clip: 'rect(0,0,0,0)', pointerEvents: 'none'}}/>Курсы для педагогов
          </label>
          </Link>
          <Link to={{pathname: '/courses-list3', fromDashboard: false}}>
          <label class="btn btn-sm btn-primary">
            <input type="radio" name="shuffle-filter" value="design" style={{position: 'absolute', clip: 'rect(0,0,0,0)', pointerEvents: 'none'}}/>Курсы для препринимателей
          </label>
          </Link>
        </div>
      </div>
    </div>
    <div class="row shuffle-wrapper">

      {event.map(c =>(
      <div className="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
        <div className="position-relative rounded hover-wrapper">
          <img src={c.image} alt="portfolio-image" className="img-fluid rounded w-100 d-block"/>
          <div className="hover-overlay">
            <div className="hover-content">
              <Link className="btn btn-light btn-sm"  to = {{pathname: `it-course-detail/${c.id}`}}>Подробнее</Link>
            </div>
          </div>
        </div>
      </div>
           ))}
    </div>

  </div>
</section>

<OurPartners />

<Footer />
            </div>
        );
    }
}


export default CoursesList1;