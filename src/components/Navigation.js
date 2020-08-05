import React from 'react';
import './css/Navigation.css';

const Navigation =() =>{

  return(
    <nav className = "navigation">
      <ul className = "left-side-menu">
        <li className ="left-list"><a href="#">SB Admin Pro</a></li>
        <li className = "left-list"><a href="#"><i className="fas fa-bars"></i></a></li>
        <li className = "left-list"><input type = "text" placeholder = "Search"/><i className="fas fa-search"></i></li>
      </ul>
      <ul className = "right-side-menu">
        <li className = "right-list"><a href="#">Documentation<i className="fas fa-arrow-right"></i></a></li>
        <li className = "right-list"><a href="#"><i className="far fa-bell"></i></a></li>
        <li className = "right-list"><a href="#"><i className="far fa-envelope"></i></a></li>
        <li className = "right-list"><a href = "#"><i className="fas fa-user-circle"></i></a></li>
      </ul>
    </nav>
  )
}
export default Navigation;
