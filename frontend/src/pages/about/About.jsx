import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="heading1">About Us</h1>
        <p>
          In today's fast-evolving digital landscape, mastering Computer Science
          skills is more essential than ever. At ELearning, we provide a
          structured and comprehensive learning platform to help students,
          professionals, and tech enthusiasts build expertise in key fields of
          software development and artificial intelligence.
        </p>
        <p>
          Our platform offers in-depth courses, hands-on projects, and
          expert-led tutorials in the following domains:
        </p>

        <h2 className="heading2">Web Development</h2>
        <p>
          From building interactive front-end designs to managing robust
          back-end systems, our web development courses cover essential
          technologies such as HTML, CSS, JavaScript, React, Node.js, and modern
          frameworks. Whether you want to become a full-stack developer or
          specialize in a particular area, our structured learning path ensures
          you gain practical coding experience and industry-relevant skills.
        </p>

        <h2 className="heading2">App Development</h2>
        <p>
          Mobile applications are transforming the way we interact with
          technology. Our courses guide you through the development of both iOS
          and Android applications using Flutter, React Native, Swift, Kotlin,
          and other powerful tools. Learn how to design, develop, and deploy
          high-performance mobile apps that stand out in the competitive market.
        </p>
        <h2 className="heading2">Game Development</h2>
        <p>
          The gaming industry is booming, and skilled developers are in high
          demand. We provide a deep dive into game development using
          industry-leading engines like Unity and Unreal Engine. From 2D and 3D
          game design to physics simulation and AI-driven gameplay, our
          curriculum helps you build engaging and immersive gaming experiences.
        </p>
        <h2 className="heading2">Data Science</h2>
        <p>
          Data is at the heart of modern decision-making. Our data science track
          equips you with skills in Python, R, SQL, data visualization,
          statistical analysis, and predictive modeling. Whether you aspire to
          become a data analyst, scientist, or engineer, our hands-on approach
          ensures you gain experience with real-world datasets and business
          applications.
        </p>
        <h2 className="heading2">Artificial Intelligence & Machine Learning</h2>
        <p>
          AI is shaping the future, and learning it today gives you a
          competitive edge. Our AI and ML courses cover deep learning, neural
          networks, natural language processing (NLP), computer vision, and
          reinforcement learning. With hands-on projects and industry use cases,
          you'll develop AI-powered solutions that solve complex problems.
        </p>

        <ul>
          <li>
            <span className="bold-text">Comprehensive Curriculum -</span>{" "}
            Structured learning paths tailored to industry needs.
          </li>
          <li>
            <span className="bold-text">Hands-on Projects -</span> Real-world
            applications to reinforce learning.
          </li>
          <li>
            <span className="bold-text">Flexible Learning -</span> Learn at your
            own pace, anytime, anywhere.
          </li>
        </ul>

        <p>
          At ELearning, our mission is to make high-quality tech education
          accessible to everyone. Whether you're a beginner starting from
          scratch or a professional looking to upskill, we provide the tools and
          knowledge to help you succeed in the ever-evolving world of
          technology. Join us and start building your future today!
        </p>
      </div>
    </div>
  );
};

export default About;
