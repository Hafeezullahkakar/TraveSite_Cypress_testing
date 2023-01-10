import React from "react";
import "./HotelFormStyles.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HotelBookingImage from "../assets/ResturantBooking.jpg";
import Hero from "./Hero";

export default function ResturantForm() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={HotelBookingImage}
        title="Hotel Booking"
        btnClass="hide"
      />
      <div className="from-container">
        <h1>Stay with us ;)</h1>
        <form>
          <input placeholder="Name" required />
          <input placeholder="Email" required />
          <input placeholder="CNIC" type="number" maxLength="13" required />
          <input placeholder="Contact Number" type="number" maxLength="13" required />

          <label className="form-label">Select Hotel:</label>
          <select
            className="btn btn-secondary dropdown-toggle"
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <option>Pine View Hotel-Naran</option>
            <option>Hotel One-Naran</option>
            <option>Troutland Hotel-Naran</option>
            <option>Hill View Hotel-Shogran</option>
          </select>


          <label className="form-label">Select Room Type:</label>
          <select
            className="btn btn-secondary dropdown-toggle"
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <option>Economy</option>
            <option>Luxury</option>
            <option>Super Luxury</option>
            <option>VIP</option>
            <option>VVIP</option>
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

          <label>Select Arrival Date:</label>
          <input type="date" required></input>


          <input placeholder="Number of days to Stay" type="number" min="1" max="30" ></input>




          <textarea placeholder="Customer Note" rows="3"></textarea>
          <button>Book Hotel</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
