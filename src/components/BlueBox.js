import React from 'react';
import './css/BlueBox.css';

const BlueBox = () =>{
  return(
  <React.Fragment>

  <div class="earnings-monthly">
          <div class="texts">
              <div class="block-first">
                  <p>Earnings (Monthly)</p>
                  <h2>$40,000</h2>
              </div>
              <div class="block-second">
                  <i class="fa fa-calendar-o"></i>
              </div>
          </div>
          <div class="view-report">
              <div class="view-report-text">
                  <a class="text-white" href="#">View Report</a>
              </div>
              <div class="view-report-icon">
                  <i class="fa fa-chevron-right"></i>
              </div>
          </div>
        </div>
  </React.Fragment>
  )
}
export default BlueBox;
