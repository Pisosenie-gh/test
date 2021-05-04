import React, {useEffect,useState} from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import {Link} from 'react-router-dom'
import axios from "axios";
import Popular from '../components/PopularMer';
function PostDetail({ match }) {
  const [post, setPost] = useState({})
  const id = match.params.id

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://8t-corporation.com/api/mer/${id}/`
    }).then(response => {
      setPost(response.data)
    })
  }, [id]);
  {
    return (
        <div>
          <Navbar/>

          <section class="page-title bg-primary position-relative">
            <div class="container">
              <div class="row">
                <div class="col-12 text-center">
                  <h1 class="text-white font-tertiary">Мероприятия и конкурсы</h1>
                </div>
              </div>
            </div>
            <img src="../images/illustrations/page-title.png" alt="illustrations" class="bg-shape-1 w-100"/>
            <img src="../images/illustrations/cSharp.png" alt="illustrations" class="bg-shape-2"
                 style={{maxWidth: '10%'}}/>
            <img src="../images/illustrations/dots-cyan.png" alt="illustrations" class="bg-shape-3"/>
            <img src="../images/illustrations/leaf-orange.png" alt="illustrations" class="bg-shape-4"/>
            <img src="../images/illustrations/html.png" alt="illustrations" class="bg-shape-5"
                 style={{webkitTransform: 'rotate(0deg)', transform: 'rotate(0deg)', maxWidth: '10%'}}/>
            <img src="../images/illustrations/dots-group-cyan.png" alt="illustrations" class="bg-shape-6"/>
            <img src="../images/illustrations/java.png" alt="illustrations" class="bg-shape-7"
                 style={{right: -0, bottom: -60, maxWidth: '10%'}}/>
          </section>

          <section class="section">
            <div class="container">
              <div class="row">

                <div class="col-lg-12">
                  <h3 class="font-tertiary mb-5">{post.name}</h3>
                  <p class="font-secondary">Создано: {post.date} <span>by ELAB</span></p>
                  <div class="content">
                    <img style={{maxWidth: '65%'}} src={post.image} alt="post-thumb" class="img-fluid rounded float-left mr-5 mb-4"/>
                    <strong>{post.description}</strong>
                    <p>.</p>

                    <blockquote>За подробной информацией и записи на курсы писать в what's app.</blockquote>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section>
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h4 class="font-weight-bold mb-3">Комментарии</h4>
                  <div class="bg-gray p-5 mb-4">
                    <div class="media border-bottom py-4">
                      <img src="images/user-1.jpg" class="img-fluid align-self-start rounded-circle mr-3" alt=""/>
                      <div class="media-body">
                        <h5 class="mt-0">Боб Бибоп.</h5>
                        <p>15 января 2015 / 10:30</p>
                        <p>ОРвлрыфроф.</p>
                        <a href="#" class="btn btn-transparent btn-sm pl-0">Ответить</a>
                        <div class="media my-5">
                          <img src="images/user-2.jpg" class="img-fluid align-self-start rounded-circle mr-3" alt=""/>
                          <div class="media-body">
                            <h5 class="mt-0">Боб Бибоп.</h5>
                            <p>15 января 2015 / 10:30</p>
                            <p>ОРвлрыфроф.</p>
                            <a href="#" class="btn btn-transparent btn-sm pl-0">Ответить</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="media py-4">
                      <img src="images/user-3.jpg" class="img-fluid align-self-start rounded-circle mr-3" alt=""/>
                      <div class="media-body">
                        <h5 class="mt-0">Боб Бибоп.</h5>
                        <p>15 января 2015 / 10:30</p>
                        <p>ОРвлрыфроф.</p>
                        <a href="#" class="btn btn-transparent btn-sm pl-0">Ответить</a>
                      </div>
                    </div>
                  </div>
                  <h4 class="font-weight-bold mb-3 border-bottom pb-3">Оставить комментарий</h4>
                  <form action="#" class="row">
                    <div class="col-md-6">
                      <input type="text" class="form-control mb-3" placeholder="Имя" name="fname" id="fname"/>
                      <input type="text" class="form-control mb-3" placeholder="Фамилия" name="lname" id="lname"/>
                      <input type="text" class="form-control mb-3" placeholder="Email *" name="mail" id="mail"/>
                    </div>
                    <div class="col-md-6">
                      <textarea name="comment" id="comment" placeholder="Message" class="form-control mb-4"></textarea>
                      <button type="submit" class="btn btn-primary w-100">Отправить</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section> */}

          <Popular />

          <Footer/>
        </div>
    );
  }
}

export default PostDetail;