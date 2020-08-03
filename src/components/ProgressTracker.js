import React  from 'react';
import './css/ProgressTracker.css';

const ProgressTracker = () =>{
  return(
    <section className="section-progress-tracker">
      <header className="section-progress-header">
      <h7>Progress Tracker</h7>
      <div classNameName="menu"><i className="fas fa-ellipsis-v"></i></div>
      </header>
        <ul>
          <li className="box1">
            <div className="header">
              <h7>Server MIgration</h7>
              <p>%20</p>
            </div>
            <div className="progress-box">
              <div className="progress-box1-color"></div>
            </div>
          </li>
          <li className="box2">
            <div className="header">
              <h7>Sales Tracking</h7>
              <p>%40</p>
            </div>
            <div className="progress-box">
              <div className="progress-box2-color"></div>
            </div>
          </li>
          <li className="box3">
                <div className="header">
              <h7>Customer Database</h7>
              <p>%60</p>
            </div>
            <div className="progress-box">
              <div className="progress-box3-color"></div>
            </div>
          </li>
          <li className="box4">
                <div className="header">
              <h7>Payout Details</h7>
              <p>%80</p>
            </div>
            <div className="progress-box">
              <div className="progress-box4-color"></div>
            </div>
          </li>
          <li className="box5">
                <div className="header">
              <h7>Account Setup</h7>
              <p>Completed</p>
            </div>
            <div className="progress-box">
              <div className="progress-box5-color"></div>
            </div>
          </li>
        </ul>
        <footer>
          <h7><a href="#">Visit Task Center</a></h7>
          <div className="menu"><i className="fas fa-arrow-right"></i></div>
        </footer>
    </section>
  )
}
export default ProgressTracker;
