import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Posts from '../components/postList'
import OurPartners from '../components/ourPartners';

class PostList extends React.Component{
    render(){
        return(
            <div>
                <Navbar />

                <section class="page-title bg-primary position-relative">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="text-white font-tertiary">Мероприятия и конкурсы</h1>
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

<Posts />

<OurPartners />

<Footer />
            </div>
        );
    }

}

export default PostList;