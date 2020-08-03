import React from 'react';
import WelcomeBack from "./WelcomeBack";
import RecentActivity from "./RecentActivity";
import ProgressTracker from "./ProgressTracker";
import BlueBox from "./BlueBox";
import OrangeBox from "./OrangeBox";
import GreenBox from "./GreenBox";
import RedBox from "./RedBox";
import Table from "./Table";
import './css/app.css';
 const App = () =>{
   return(
<React.Fragment>
   <header>
     <div className="container-h">
       <div className="head-h">
          <h1 className="head-text-h"><i className="fas fa-wave-square"></i>Dashboard</h1>
          <p className="text-h">Example dashboard overview and content summary</p>
       </div>
       <div className="calendar-h">
          <div className="date-h"><i className="far fa-calendar-check"></i>June 22, 2020 - Jul 21, 2020<i className="fas fa-chevron-down"></i></div>
      </div>
    </div>

   </header>
    <main>
      <div className="welcome-back"><WelcomeBack/></div>
      <div className="recent-activity"><RecentActivity/></div>
      <div className="progress-tracker"><ProgressTracker/></div>
      <div className="earnings-monthly"><BlueBox/></div>
      <div className="earnings-year"><OrangeBox/></div>
      <div className="task-completion"><GreenBox/></div>
      <div className="pending-request"><RedBox/></div>
      <div className="personal-management"><Table/></div>
    </main>
   <footer></footer>
</React.Fragment>
   )
 }
export default App;
