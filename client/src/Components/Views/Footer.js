import React from 'react'
//import { Link } from 'react-router-dom';
const Foter = ()=>{
    return(
        <footer className="page-footer white" style={{
            borderTop:"1px solid grey"
        }}>
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
        <h5 className="black-text">PlaceFinder</h5>
        <p className="black-text">PlaceFinder is an innovative project aimed at simplifying the process of discovering new places and navigating through them efficiently. It leverages modern technologies to provide users with a comprehensive platform for exploring various locations, tourist attractions, and more. PlaceFinder offers users the ability to quickly find nearby places of interest, view detailed information about them, and even get directions to their desired destinations. Discovering hidden gems in a new city, PlaceFinder is designed to enhance the user experience and make exploring the Madhya Pradesh and around us more convenient and enjoyable.</p>
      </div>
      <div className="col l4 offset-l2 s12">
        <h5 className="black-text">Links</h5>
        <ul>
          <li><a className="black-text" href="#!">Signin</a></li>
          <li><a className="black-text" href="#!">Signup</a></li>
          <li><a className="black-text" href="#!">Link 3</a></li>
          <li><a className="black-text" href="#!">Link 4</a></li>
        </ul>
      </div>
    </div>
  </div>
  
</footer>
    )
}

export default Foter;