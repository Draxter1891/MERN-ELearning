import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import vectorImage from "../../assets/images/study1.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-container">
        <div className="text-section">
          <h1>
            Learn <br />
            Grow <br />
            Excel
          </h1>
          <p>Welcome to our Elearning platform.</p>
          <button
            onClick={() => navigate("/courses")}
            className="get-started-btn"
          >
            Get Started
          </button>
        </div>

        <div className="image-section">
          <img
            src={vectorImage}
            alt="E-learning Illustration"
            className="vector-art"
          />
        </div>
      </div>

      <Testimonials />
    </div>
  );
};

export default Home;
