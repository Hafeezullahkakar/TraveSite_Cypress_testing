import React from 'react';
import "./HotelFormStyles.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import dineImage from "../assets/dine-in.jpg";
import Hero from "./Hero";

export default function ResturantFrom() {
  return (
    <>
    <Navbar/>
    <Hero 
        cName="hero-mid"
       heroimg={dineImage}
       title="Resturant Booking"
       btnClass="hide"
        />
    <div className="from-container">
      <h1>Dine with us ;)</h1>
      <form>
        <input placeholder="Name" required/>
        <input placeholder="Email" required/>
        <input placeholder="CNIC" type="number" maxLength="13" required/>
        <input placeholder="Contact Number" type="number" maxLength="13" required/>

        <label className="form-label">Select Resturant:</label>
        <select
          className="btn btn-secondary dropdown-toggle"
          style={{ width: "100%", marginBottom: "20px", height: "30px" }}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <option>Food Planet-Naran</option>
          <option>Mr. Broaster-Naran</option>
          <option>Lasani Resturant-Naran</option>
          <option>Mc'Donalds-Shogran</option>
        </select>


        <label className="form-label">No. of Tables</label>
        <select
          className="btn btn-secondary dropdown-toggle"
          style={{ width: "100%", marginBottom: "20px", height: "30px" }}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <option>1-Small</option>
          <option>1-Large</option>
          <option>2-Large</option>
          <option>Floor</option>
          <option>Hall</option>
        </select>


        <label className="form-label">Select No. of Persons:</label>
        <select
          className="btn btn-secondary dropdown-toggle"
          style={{ width: "100%", marginBottom: "20px", height: "30px" }}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          required
        >
          <option>1-2</option>
          <option>3-5</option>
          <option>5-8</option>
          <option>9-10</option>
        </select>

        <label>Select Arrival Date & Time:</label>
        <input type="datetime-local" required></input>
        
        
        <textarea placeholder="Customer Note" rows="3"></textarea>
        <button>Book</button>
      </form>
    </div>
      <Footer/>
      </>
  )
}
