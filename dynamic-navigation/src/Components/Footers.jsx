import React from 'react'
import { FaInstagram } from "react-icons/fa";

const Footers = () => {
  return (
    <>
      <footer className="footer1">
    <div className="foot1">
      <h1>1038117</h1>
      <h6>Total Visitors</h6>
    </div>
    <div className="foot2">
      <h4>Tourist Interest</h4>
      <ul>
        <li>Museum palaces</li>
        <li>Trekking sites</li>
        <li>Water parks / Dam</li>
        <li>Forts</li>
        <li>Forest</li>
      </ul>
    </div>
    <div className="foot3">
      <h4>Important Links</h4>
      <ul>
        <li>MTDC</li>
        <li>Gazette Department</li>
        <li>Incredible India</li>
        <li>Urban Development</li>
        <li>Department</li>
        <li>GR</li>
      </ul>
    </div>
    <div className="foot4">
      <h4>About Us</h4>
      <ul>
        <li>Directorate of Tourism (DoT)</li>
        <li>Organization Structure</li>
        <li>Citizen Charter</li>
        <li>Terms and Conditions</li>
      </ul>
    </div>

    <div className="foot5">
      <h4>QUICK LINKS</h4>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
      <div className="logocontact">
        <i className="fab fa-whatsapp" aria-hidden="true"></i>
        <i className="fab fa-facebook-f" aria-hidden="true"></i>
        <i className="fab fa-instagram" aria-hidden="true"></i>
        <i className="fab fa-twitter" aria-hidden="true"></i>
      </div>
    </div>
  </footer>
      <div className="divmobile">
      <div className="logocontact">
        <i className="fab fa-whatsapp" aria-hidden="true"></i>
        <i className="fab fa-facebook-f" aria-hidden="true"></i>
        <i className="fab fa-instagram" aria-hidden="true"></i>
        <i className="fab fa-twitter" aria-hidden="true"></i>
      </div>
      </div>
    </>
  )
}

export default Footers