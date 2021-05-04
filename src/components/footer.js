import React from 'react'
import axios from "axios";
import {Form} from 'react-bootstrap'
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

class Footer extends React.Component{

    constructor(props) {
    super(props);
    this.state = {
        name: '',
        message: '',
        email: ''



    };

    this.handleChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    async getData(){

}
handleSubmit(event)  {

     axios({
            method: "POST",
            url: `https://8t-corporation.com/form/`,
            data: {
              name: this.state.name,
              email: this.state.email,
              message: this.state.message,

            },
         headers: {
            "X-CSRFToken": "csrftoken"



         },

        }).then(res => {
                 this.state.data = res.data
                console.log(this.state.data)




    }).catch(function (error) {
        console.log(error);

    });
    event.preventDefault();


}


    render(){
        return(
            <div>
            <section class="section section-on-footer" data-background="images/backgrounds/bg-dots.png">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="section-title">Наши контакты</h2>
      </div>
      <div class="col-lg-8 mx-auto">
        <div class="bg-white rounded text-center p-5 shadow-down">
          <h4 class="mb-80">Свяжись с нами</h4>
          <form  class="row">
            <div class="col-md-6">
              <input type="text"  onChange = {this.onChange} value = {this.state.name}  name="name" placeholder="Ф.И.О." class="form-control px-0 mb-4" />
            </div>
            <div class="col-md-6">
              <input type="email" name="email"  onChange = {this.onChange} value = {this.state.email} placeholder="Email" class="form-control px-0 mb-4" />
            </div>
            <div class="col-12">
              <textarea  onChange = {this.onChange} value = {this.state.message} name="message"  class="form-control px-0 mb-4"
                placeholder="Ваше сообщение"></textarea>
            </div>
            <div class="col-lg-6 col-10 mx-auto">
              <button  onClick = {this.handleSubmit} type='submit' class="btn btn-primary w-100">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="bg-dark footer-section">
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5 class="text-light">Email</h5>
          <p class="text-white paragraph-lg font-secondary">elab.shakha@gmail.com</p>
          <p class="text-white paragraph-lg font-secondary">elab.vladimir@gmail.com</p>
        </div>
        <div class="col-md-4">
          <h5 class="text-light">Контактные данные</h5>
          <p class="text-white paragraph-lg font-secondary">+7 (776) 149 2925</p>
          <p class="text-white paragraph-lg font-secondary">+7 (708) 212 0070</p>
        </div>
        <div class="col-md-4">
          <h5 class="text-light">Адрес</h5>
          <p class="text-white paragraph-lg font-secondary">Казахстан, г. Алматы, Ауэзовский район, Аксай 5, Дом 25</p>
        </div>
      </div>
    </div>
  </div>
  <div class="border-top text-center border-dark py-5">
    <p class="mb-0 text-light">Copyright ©<script>
        var CurrentYear = new Date().getFullYear()
        document.write(CurrentYear)
      </script> by <a href="/">elab.asia</a></p>
  </div>
</footer>

</div>

)
    }
}

export default Footer;