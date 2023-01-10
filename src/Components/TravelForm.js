import React from "react";
import "./HotelFormStyles.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TravelImage from "../assets/travel.jpg";
import Hero from "./Hero";

export default function TravelForm() {
  return (
    <>
    <Navbar/>
    <Hero 
        cName="hero-mid"
       heroimg={TravelImage}
       title="Travel"
       btnClass="hide"
        />
    <div className="from-container">
      <h1>Travel with us ;)</h1>
      <form>
        <input placeholder="Name" required/>
        <input placeholder="Email" required/>
        <input placeholder="CNIC" type="number" maxLength="13" required/>
        <input placeholder="Contact Number" type="number" maxLength="13" required/>

        <label className="form-label">Select Route:</label>
        <select
          className="btn btn-secondary dropdown-toggle"
          style={{ width: "100%", marginBottom: "20px", height: "30px" }}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <option>Naran-Babusar Top(Round Trips Only)</option>
          <option>Naran-Batakundi(Round Trips Only)</option>
          <option>Naran-Shogran & Siri Paye(Round Trips Only)</option>
          <option>Naran-Lake Saif-ul-Malook(Round Trips Only)</option>
        </select>


        <label className="form-label">Select Bus Type:</label>
        <select
          className="btn btn-secondary dropdown-toggle"
          style={{ width: "100%", marginBottom: "20px", height: "30px" }}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <option>Jeep</option>
          <option>Vigo 4 by 4</option>
          <option>Toyota Hiace(16 Seater)</option>
          <option>Coaster(30 Seater)</option>
        </select>

        <label>Select Arival Date & Time:</label>
        <input type="datetime-local" required></input>
        
        
        <textarea placeholder="Customer Note" rows="3"></textarea>
        <button>Book </button>
      </form>
    </div>
      <Footer/>
      </>
  );
}
