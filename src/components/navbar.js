import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <header class="navigation fixed-top">
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand font-tertiary h3" href="index.html"><strong>ELAB.ASIA</strong></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
      aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse text-center" id="navigation">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a href="/" class="nav-link">Главная</a>
        </li>
        {/* <li class="nav-item">
          <Link to={{pathname: '/about', fromDashboard: false}} class="nav-link">О нас</Link>
        </li> */}
        <li class="nav-item">
          <Link to={{pathname: '/post-list', fromDashboard: false}} class="nav-link">Мероприятия</Link>
        </li>
        <li class="nav-item">
          <Link to={{pathname: '/courses-list1', fromDashboard: false}} class="nav-link">Наши курсы</Link>
        </li>
        <li class="nav-item">
          <Link to={{pathname: 'contact', fromDashboard: false}} class="nav-link">Контакты</Link>
        </li>
      </ul>
    </div>
  </nav>
</header>
            </div>
        );
    }
}

export default Navbar;