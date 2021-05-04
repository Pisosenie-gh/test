import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";

function Popular({match}) {

  var i;
var divs = document.getElementsByTagName('p');
for(i=0;i<divs.length;i++) {
  if(divs[i].className == 'cars-text') {
    divs[i].innerHTML = divs[i].innerHTML.substring(0,80);
  }
}

  const [event, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://8t-corporation.com/api/most/`
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
                  <img class="rounded card-img-top" src={c.mer.image} alt="post-thumb"/>
                  <div class="card-body">
                    <h4 class="card-title"><a class="text-dark" href="blog-single.html">{c.mer.name}</a>
                    </h4>
                    <p class="cars-text">{c.mer.description}</p>
                    <Link to = {{pathname: `post-detail/${c.mer.id}`, fromDashboard: false}}
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


export default Popular;