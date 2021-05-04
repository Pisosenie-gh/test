import React, {useEffect, useState} from 'react'
import bootstrap from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import img1 from './plan.png'
import img2 from './design.png'
import img3 from './print.png'

import Footer from '../components/footer';
import Navbar from '../components/navbar';
import axios from "axios";

function CourseDetail({match}) {
  const [post, setPost] = useState({})
  const id = match.params.id

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://8t-corporation.com/api/blog/${id}/`
    }).then(response => {
      setPost(response.data)
    })
  }, [id]);
  {
    return (
      <div>
      <Navbar/>

      <section class="page-title-alt bg-primary position-relative" style={{paddingTop: 200}}>
        <Container>
          <Row>
            <Col> <img src={post.image} alt="portfolio-image"
                       class="img-fluid rounded w-100 d-block"/>
            </Col>
            <Col><h1 class="text-white font-tertiary" style={{fontSize: 40}}>{post.name}</h1></Col>
          </Row>
        </Container>
      </section>

      <section class="section pt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <p>{post.description}</p>
              <p>{post.description_2}</p>
              <p>{post.description_3}</p>
            </div>

            <div class="col-md-4 text-right ">
            <h4 class="mb-4">Цена курса: {post.price} тенге</h4><h4 class="mb-4">Длительность прохождения: {post.hours} часов</h4>


</div>

          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="row justify-content-around">
            <div class="col-lg-12 text-center">
              <h2 class="section-title">Учебный процесс</h2>
            </div>
            <div class="col-lg-3 col-md-4 text-center hover-shadow pt-3">
              <div class="">
                <img src={img1} class="mb-4" alt="icon"/>
                <h4 class="mb-4">{post.name1}</h4>
                <p>{post.description1}</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 text-center hover-shadow pt-3">
              <img src={img2} class="mb-4" alt="icon"/>
              <h4 class="mb-4">{post.name2}</h4>
              <p>{post.description2}</p>
            </div>
            <div class="col-lg-3 col-md-4 text-center hover-shadow pt-3">
              <img src={img3} class="mb-4" alt="icon"/>
              <h4 class="mb-4">{post.name3}</h4>
              <p>{post.description3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="section bg-cover" data-background="images/backgrounds/team-bg.png">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="section-title">Тьюторы данного курса</h2>
            </div>
            <div class="col-md-4 col-sm-6 mb-4 mb-md-0">
              <div class="card text-center">
                <img src="images/team/Dilmurat.jpg" class="card-img-top"/>
                <div class="card-body">
                  <h4 class="card-title">Dil</h4>
                  <p class="text-light font-secondary">MERN stack</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 mb-4 mb-md-0">
              <div class="card text-center">
                <img src="images/team/Danil.jpg" class="card-img-top"/>
                <div class="card-body">
                  <h4 class="card-title">Danil</h4>
                  <p class="text-light font-secondary">Django stack</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 mb-4 mb-md-0">
              <div class="card text-center">
                <img src="images/team/Ramz.jpg" class="card-img-top"/>
                <div class="card-body">
                  <h4 class="card-title">Ramz</h4>
                  <p class="text-light font-secondary">Django</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <Footer/>
    </div>
    );
  }

}

export default CourseDetail;