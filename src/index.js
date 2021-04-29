import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import About from './pages/about';
import PostList from './pages/postList';
import PostDetail from './pages/postDetail';
import CoursesList1 from './pages/coursesList1';
import CoursesList3 from './pages/coursesList3';
import CoursesList2 from './pages/coursesList2';
import Contact from './pages/contact';
import CourseDetail from './pages/courseDetail';
import ITCourseDetail from "./pages/ITCourseDetail";
import TeachersCourseDetail from "./pages/TeachersCourseDetail";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>

      <Route exact path="/post-list" component={PostList}/>
      <Route exact path="/post-detail/:id" component={PostDetail}/>
      <Route exact path="/courses-list1" component={CoursesList1}/>
      <Route exact path="/courses-list2" component={CoursesList2}/>
      <Route exact path="/courses-list3" component={CoursesList3}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/course-detail/:id" component={CourseDetail}/>
      <Route exact path="/it-course-detail/:id" component={ITCourseDetail}/>
      <Route exact path="/teacher-course-detail/:id" component={TeachersCourseDetail}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
