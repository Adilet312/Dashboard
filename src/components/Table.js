import React from 'react';
import './css/Table.css';

const Table = () =>{
  return(
  <React.Fragment>

     <div className="table">
         <section className="section-table">
             <h2>Personal Management </h2>
             <form className="table-form" action="#">
                 <div className="left-form">
                     <label htmlFor="show" id="show">Show</label>
                         <select type="number" value="10" id="show" min="1" max="10">
                             <option value="10">1</option>
                             <option value="10">2</option>
                             <option value="10">3</option>
                             <option value="10">4</option>
                             <option value="10">5</option>
                             <option value="10">6</option>
                             <option value="10">7</option>
                             <option value="10">8</option>
                             <option value="10">9</option>
                             <option value="10" selected="selected">10</option>
                         </select>
                     <label htmlFor="entry">entries</label>
                 </div>

                 <div className="right-form">
                     <label htmlFor="search">Search:</label>
                     <input className="serch-box-t" type="text" id="search"/>
                 </div>
             </form>

             <div className="scroller">
                 <table>
                     <thead>
                         <tr>
                             <th>Name<i className="fa fa-angle-up blue-arrow"></i><i className="fa fa-angle-down"></i></th>
                             <th>Position<i className="fa fa-angle-up blue-arrow"></i><i className="fa fa-angle-down"></i></th>
                             <th>Office<i className="fa fa-angle-up blue-arrow"></i><i className="fa fa-angle-down"></i></th>
                             <th>Age<i className="fa fa-angle-up blue-arrow"></i><i className="fa fa-angle-down"></i></th>
                             <th>Start date<i className="fa fa-angle-up blue-arrow"><i className="fa fa-angle-down"></i></i></th>
                             <th>Salary<i className="fa fa-angle-up blue-arrow"></i><i className="fa fa-angle-down"></i></th>
                             <th>Status<i className="fa fa-angle-down blue-arrow"></i></th>
                             <th>Action<i className="fa fa-angle-up blue-arrow"></i><i className="fa fa-angle-down"></i></th>
                         </tr>
                     </thead>

                     <tbody>
                         <tr>
                             <td>Garrett Winters</td>
                             <td>Accounatnt</td>
                             <td>Tokyo</td>
                             <td>63</td>
                             <td>2011/07/25</td>
                             <td>$170,750</td>

                             <td>
                                 <div className="badges badge-warning">
                                     Pending
                                 </div>
                             </td>

                             <td >
                                 <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                     <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                 </svg>
                                 <img className="bins" src={"https://img.icons8.com/wired/64/000000/trash.png"}/>
                             </td>
                         </tr>

                         <tr>
                             <td>Bradley Greer</td>
                             <td>Software Engineer</td>
                             <td>London</td>
                             <td>41</td>
                             <td>2012/10/13</td>
                             <td>$132,000</td>
                             <td>
                                 <div className="badges badge-warning">
                                     Pending
                                 </div>
                             </td>
                             <td>
                                 <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                     <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                 </svg>
                                 <img className="bins" src={"https://img.icons8.com/wired/64/000000/trash.png"}/>
                             </td>
                         </tr>

                         <tr>
                             <td>Donna Snider</td>
                             <td>Customer Support</td>
                             <td>New York</td>
                             <td>27</td>
                             <td>2011/01/25</td>
                             <td>$112,050</td>
                             <td>
                                 <div className="badges badge-secondary">
                                     Part-time
                                 </div>
                             </td>
                             <td>
                                 <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                     <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                 </svg>
                                 <img className="bins" src={"https://img.icons8.com/wired/64/000000/trash.png"}/>
                             </td>
                         </tr>

                         <tr>
                             <td>Caesar Vence</td>
                             <td>Pre-Sales Support</td>
                             <td>New York</td>
                             <td>21</td>
                             <td>2011/12/12</td>
                             <td>$106,450</td>
                             <td>
                                 <div className="badges badge-secondary">
                                     Part-time
                                 </div>
                             </td>
                             <td>
                                 <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                     <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                 </svg>
                                 <img  className="bins" src={"https://img.icons8.com/wired/64/000000/trash.png"}/>
                             </td>
                         </tr>

                         <tr>
                             <td>Ashton Cox</td>
                             <td>Junior Technical Author</td>
                             <td>San Francisco</td>
                             <td>66</td>
                             <td>2009/01/12</td>
                             <td>$86,00</td>
                             <td>
                                 <div className="badges badge-secondary">
                                     Part-time
                                 </div>
                             </td>
                             <td>
                                 <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                     <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                 </svg>
                                 <img className="bins" src={"https://img.icons8.com/wired/64/000000/trash.png"}/>
                             </td>
                         </tr>

                         <tr>
                             <td>Angelica Ramos</td>
                             <td>Chief Executive Officer(CEO)</td>
                             <td>London</td>
                             <td>47</td>
                             <td>2009/10/09</td>
                             <td>$1,200,000</td>
                             <td>
                                 <div className="badges badge-primary">
                                 Full-time
                                 </div>
                             </td>
                             <td>
                                 <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                     <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                 </svg>
                                 <img className="bins" src={"https://img.icons8.com/wired/64/000000/trash.png"}/>
                             </td>
                         </tr>

                         <tr>
                             <td>Flona Green</td>
                             <td>Chief Opeartinf Officer(COO)</td>
                             <td>San Francisco</td>
                             <td>48</td>
                             <td>2010/03/11</td>
                             <td>$850,000</td>
                             <td>
                                 <div className="badges badge-primary">
                                     Full-time
                                 </div>
                             </td>
                             <td>
                                 <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                     <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                 </svg>
                                 <img className="bins" src={"https://img.icons8.com/wired/64/000000/trash.png"}/>
                             </td>
                         </tr>

                         <tr>
                             <td>Paul byrd</td>
                             <td>Chief Financial Officer(CFO)</td>
                             <td>New York</td>
                             <td>64</td>
                             <td>2010/06/09</td>
                             <td>$725,000</td>
                             <td>
                                 <div className="badges badge-primary">
                                     Full-time
                                 </div>
                             </td>
                             <td>
                                 <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                     <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                 </svg>
                                 <img className="bins" src={"https://img.icons8.com/wired/64/000000/trash.png"}/>
                             </td>
                         </tr>

                         <tr>
                             <td>Yiry Berry</td>
                             <td>Chief Marketing Ofiicer(CMO)</td>
                             <td>New York</td>
                             <td>40</td>
                             <td>2009/06/25</td>
                             <td>$675,000</td>
                             <td>
                                 <div className="badges badge-primary">
                                     Full-time
                                 </div>
                             </td>
                             <td>
                                 <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                     <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                 </svg>
                                 <img className="bins" src="https://img.icons8.com/wired/64/000000/trash.png"/>
                             </td>
                         </tr>

                         <tr>
                             <td>Jackson Bradshaw</td>
                             <td>Director</td>
                             <td>New York</td>
                             <td>65</td>
                             <td>2008/09/26</td>
                             <td>$645,750</td>
                             <td >
                                 <div className="badges badge-primary">
                                     Full-time
                                 </div>
                             </td>
                             <td>
                                 <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                     <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                 </svg>
                                 <img className="bins" src="https://img.icons8.com/wired/64/000000/trash.png"/>
                             </td>
                         </tr>
                     </tbody>

                     {/*<tfooter>
                         <tr>
                             <th>Name </th>
                             <th>Position</th>
                             <th>Office</th>
                             <th>Age</th>
                             <th>Start Date</th>
                             <th>Salary</th>
                             <th>Status</th>
                             <th>Actions</th>
                         </tr>
                     </tfooter>*/}
                 </table>
             </div>
         </section>

         <footer className="table-footer">
             <p>Showing 1 to 10 of 57 entries</p>
             <div className="footer-button">
                 <ul>
                     <li>Previous</li>
                     <li>1</li>
                     <li>2</li>
                     <li>3</li>
                     <li>4</li>
                     <li>5</li>
                     <li>6</li>
                     <li>Next</li>
                 </ul>
             </div>
         </footer>
     </div>




  </React.Fragment>
  )
}
export default Table;
