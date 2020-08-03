import React from 'react';
import './css/OrangeBox.css';

const OrangeBox = () =>{
  return(
  <React.Fragment>
  <div class="earnings-year">
          <div class="texts">
              <div class="block-first">
                  <p>Earnings (Annual)</p>
                  <h2>$215,000</h2>
              </div>
              <div class="block-second">
                  <i class="fa fa-dollar"></i>
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
export default OrangeBox;
