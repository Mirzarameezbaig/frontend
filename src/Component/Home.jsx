import React from "react";
import pexelsImage from "../Assets/logo192.png";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";

const Home = () => {
  const cardsData = [
    {
      image:
        "https://images.pexels.com/photos/9884692/pexels-photo-9884692.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "cente 1(3 classes)"
    },
    {
      image:
        "https://images.pexels.com/photos/9486104/pexels-photo-9486104.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "cente 2(3 classes)"
    },
    {
      image:
        "https://images.pexels.com/photos/10721228/pexels-photo-10721228.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "cente 3(3 classes)"
    },
    {
      image:
        "https://images.pexels.com/photos/7524272/pexels-photo-7524272.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "cente 4(3 classes)"
    }
  ];
  return (
    <div className="content-wrapper">
      <div className="content-info">
        <div>
          <span>Phone: 7083368521</span>
          <span>Email: shayansj@gmail.com</span>
        </div>
        <div>Welcome to Maktab E Noori Page</div>
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <div className="logo-container">
            <img src={pexelsImage} alt="Logo" className="logo-img" />
            <div className="logo-text">Maktab E Noori</div>
          </div>
        </div>
        <div className="navbar-menu">
          <Link className="admission-Link" to="/application">
            Admission
          </Link>
        </div>
      </nav>
      <section className="home-section">
        <h1 className="section-heading">Discovering the Treasures of Islam!</h1>
        <div className="section-text">
          Unlock the Door to Knowledge: Click Below to Begin Your Admission
          Journey
        </div>
        <Link className="admission-Link" to="/application">
          Admission
        </Link>
      </section>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <ImageCard
            key={index}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
      <section className="map-section">
        <div className="map-container">
          <div className="map-embed">
            <iframe
              title="Embedded Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.575995861145!2d-74.00597428484974!3d40.71277607427848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0x56e2d4e2b9b68607!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1631199687201!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
        <div className="contact-footer">
          <h2>Contact Us</h2>
          <p>Get in touch:</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: contact@example.com</p>
          <p>Address: 1234 Street, City, Country</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
