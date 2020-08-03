import React from 'react';
import './css/RedBox.css';

const RedBox = () =>{
  return(
  <React.Fragment>

  <div class="pending-request">
        <div class="texts">
            <div class="block-first">
                <p>Pending Requests</p>
                <h2>17</h2>
            </div>
            <div class="block-second">
                <i class="fa fa-comment-o"></i>
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
export default RedBox;
