import React from 'react';
import './css/GreenBox.css';

const GreenBox = () =>{
  return(
  <React.Fragment>

  <div class="task-completion">
        <div class="texts">
            <div class="block-first">
                <p>Task Completion</p>
                <h2>24</h2>
            </div>
            <div class="block-second">
                <i class="fa fa-check"></i>
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
export default GreenBox;
