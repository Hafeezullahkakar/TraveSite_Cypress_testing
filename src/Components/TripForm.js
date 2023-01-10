import React from 'react';
import "./HotelFormStyles.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TripImage from "../assets/trip.jpg";
import Hero from "./Hero";

export default function TripForm() {
  return (
    <>
    <Navbar/>
    <Hero 
        cName="hero-mid"
       heroimg={TripImage}
       title="Plan Trips"
       btnClass="hide"
        />
    <div className="from-container">
      <h1>Be a Companion of us ;)</h1>
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
          <option>Kaghan & Naran</option>
          <option>Shogran & Siri-Paye Meadows</option>
          <option>Naran & Batakundi</option>
          <option>Naran & Babusar-Top</option>
        </select>


        <label className="form-label">Select Plan:</label>
        <select
          className="btn btn-secondary dropdown-toggle"
          style={{ width: "100%", marginBottom: "20px", height: "30px" }}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <option>Economy(3 Days)</option>
          <option>Luxury(5 Days)</option>
          <option>Adventurous(7 Days)</option>
          <option>Nature Lovers(10 Days)</option>
        </select>


        <input type="number" min="1" max="30" placeholder="No. of Persons"/>

        <label>Arrival Date & Time:</label>
        <input type="datetime-local" required></input>
        
        
        <textarea placeholder="Customer Note" rows="3"></textarea>
        <button>Book</button>
      </form>
    </div>


    <Footer/>
      
    </>
  )
}
