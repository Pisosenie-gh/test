import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";

function Posts({match}) {

  const [event, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/mer/`
    }).then(response => {
      setData(response.data)
    })
  });
  {
    return (
        <section class="section">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h2 class="section-title">Наши мероприятия</h2>
              </div>

              {event.map (c =>(
              <div class="col-lg-4 col-sm-6 mb-4">
                <article class="card shadow">
                  <img class="rounded card-img-top" src={c.image} alt="post-thumb"/>
                  <div class="card-body">
                    <h4 class="card-title"><a class="text-dark" href="blog-single.html">{c.name}</a>
                    </h4>
                    <p class="cars-text">{c.description}</p>
                    <Link to = {{pathname: `post-detail/${c.id}`, fromDashboard: false}}
                          class="btn btn-xs btn-primary">Подробнее</Link>
                  </div>
                </article>
              </div>
                  ))}


            </div>
          </div>
        </section>

    )
  }
}


export default Posts;