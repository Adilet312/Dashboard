import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import WelcomeBack from "./WelcomeBack";
import RecentActivity from "./RecentActivity";
import ProgressTracker from "./ProgressTracker";
import './css/app.css';
 const App = () =>{
   return(
<React.Fragment>
   <header></header>
    <main>
      <div class="welcome-back"><WelcomeBack/></div>
      <div class="recent-activity"><RecentActivity/></div>
      <div class="progress-tracker"><ProgressTracker/></div>
      <div class="earnings-monthly"></div>
      <div class="earnings-year"></div>
      <div class="task-completion"></div>
      <div class="pending-request"></div>
      <div class="table"></div>
    </main>
   <footer></footer>
</React.Fragment>
   )
 }
export default App;
