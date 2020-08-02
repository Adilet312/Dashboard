import React, {useState,useEffect} from 'react';
import './css/ProgressTracker.css';

const ProgressTracker = () =>{
  return(
    <section>
      <header>
      <h7>Progress Tracker</h7>
      <div className="menu"><i class="fas fa-ellipsis-v"></i></div>
      </header>
        <ul>
          <li class="box1">
            <div class="header">
              <h7>Server MIgration</h7>
              <p>%20</p>
            </div>
            <div class="progress-box">
              <div class="progress-box1-color"></div>
            </div>
          </li>
          <li class="box2">
            <div class="header">
              <h7>Sales Tracking</h7>
              <p>%40</p>
            </div>
            <div class="progress-box">
              <div class="progress-box2-color"></div>
            </div>
          </li>
          <li class="box3">
                <div class="header">
              <h7>Customer Database</h7>
              <p>%60</p>
            </div>
            <div class="progress-box">
              <div class="progress-box3-color"></div>
            </div>
          </li>
          <li class="box4">
                <div class="header">
              <h7>Payout Details</h7>
              <p>%80</p>
            </div>
            <div class="progress-box">
              <div class="progress-box4-color"></div>
            </div>
          </li>
          <li class="box5">
                <div class="header">
              <h7>Account Setup</h7>
              <p>Completed</p>
            </div>
            <div class="progress-box">
              <div class="progress-box5-color"></div>
            </div>
          </li>
        </ul>
        <footer>
          <h7><a href="#">Visit Task Center</a></h7>
          <div className="menu"><i class="fas fa-arrow-right"></i></div>
        </footer>
    </section>
  )
}
export default ProgressTracker;
