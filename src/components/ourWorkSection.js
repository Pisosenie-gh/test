import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../logo.svg';
import '../App.css'

class OurWork extends React.Component{
    render(){
        return(
            <section class="section">
            <div class="container">
              <div class="row">
                <div class="col-12 text-center">
                  <h2 class="section-title">Что мы делаем?</h2>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                  <div class="card hover-shadow shadow">
                    <div class="card-body text-center px-4 py-5">
                      <i class="ti-bar-chart icon mb-5 d-inline-block"></i>
                      <h4 class="mb-4">Цифровое развитие</h4>
                      <p>Содействуем в повышении цифровой грамотности и компетенций всех категорий населения РК. Мы предлагаем креативные образовательные программы, которые включают в себя актуальные темы, контент и методы.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                  <div class="card active-bg-primary hover-shadow shadow">
                    <div class="card-body text-center px-4 py-5">
                      <i class="ti-stats-up icon mb-5 d-inline-block"></i>
                      <h4 class="mb-4">Повышение квалификации педагогов</h4>
                      <p>В соответствии с переходом на обновленное содержание образования, а также развитием цифровых технологий и внедрением их в образовательный процесс, мы обучаем педагогов всех уровней широким спектром курсов.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                  <div class="card hover-shadow shadow">
                    <div class="card-body text-center px-4 py-5">
                      <i class="ti-heart icon mb-5 d-inline-block"></i>
                      <h4 class="mb-4">Реализация социального проекта</h4>
                      <p>Мы поставили перед собой цель реализации социального проекта, направленного на повышение цифровой грамотности на безвозмездной основе социально - уязвимого слоя региона.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default OurWork;