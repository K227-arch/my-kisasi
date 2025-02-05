import React from "react";
import am from "../assets/am.png";
import chnt from "../assets/chnt.png";
import hw from "../assets/hw.png";
import kansai from "../assets/kansai.png";
import MI from "../assets/MI.png";
import Mirage from "../assets/Mirage.png";
import nsambya from "../assets/nsambya.png";
import roof from "../assets/roof.png";
import shell from "../assets/shell.png";
import uc from "../assets/uc.png";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";
import videoPlaceholder from "../assets/a.i.mp4";
import "./Landing.css";

const features = [
  {
    icon: "⚡",
    title: "AI Rubric generation",
    description:
      "Bwated creates detailed rubrics for your entire assignment with one click.",
  },
  {
    icon: "🔄",
    title: "AI Regrade",
    description:
      "Bwated grades exactly the way you do. Give it instructions, the same way you would instruct a TA.",
  },
  {
    icon: "↻",
    title: "AI Parsing",
    description:
      "Reuse your old assignments by uploading them to Bwated, in seconds.",
  },
  {
    icon: "📈",
    title: "AI Analytics",
    description:
      "Bwated gives you a bigger picture understanding of common student mistakes to help tailor your teaching.",
  },
];
const testimonials = [
  {
    id: 1,
    rating: 5,
    title: "A Super Efficient Platform!",
    text: "Bwarted is a highly efficient platform with questions designed to test logical thinking rather than just mechanical memory, accompanied by focused and relevant explanations. Highly recommend!",
    author: "Livia Stefania",
    username: "MUBS University",
  },
  {
    id: 2,
    rating: 5,
    title: "Recap Test Feature is Exceptional!",
    text: "The recap test feature is exceptional and makesBwarted my top choice. I no longer have to worry about planning my reviews, as the platform helps me stay organized and motivates me to complete them...",
    author: "Luana Corbu",
    username: "Makerere University",
  },
  {
    id: 3,
    rating: 5,
    title: "The Platform I Was Looking For!",
    text: "I've been searching for a residency preparation platform that tests logic, not just memory, while ensuring that no detail is overlooked. Bwarted not only accomplishes this but goes above and beyond!",
    author: "Darius Filis",
    username: "Isbat university",
  },
  {
    id: 4,
    rating: 5,
    title: "A Real Help for Residency Exam Preparation!",
    text: "The questions on Bwarted are a real help in preparing for the residency exam. They are clear, emphasize information without ambiguity, and the detailed explanations and flashcards help solidify the knowledge even further.",
    author: "Delia Barbu",
    username: "Kyambogo University",
  },
];

function App() {
  const navigate = useNavigate();
  const gotoDocumenttitle = () => navigate("/Documenttitle");
  const gotoLogin = () => navigate("/Login");

  return (
    <div className="container8">
      <header className="header3">
        <div className="logos">
          <img src={logo} className="logose" alt="Logo" />
        </div>
        <nav className="nav-buttons">
          <button className="btn btn-outline" onClick={gotoLogin}>
            Sign Up
          </button>
          <button className="btn btn-primary" onClick={gotoDocumenttitle}>
            TRY DEMO
          </button>
        </nav>
      </header>

      <main className="hero">
        <h1>
          Are you ready to
          <br />
          <span4 className="highlight">hack</span4> your exams?
        </h1>

        <p className="subtitle">
          Save yourself time and stress with
          <br />
          personalized learning on the best content!
        </p>

        <button className="btn btn-primary" onClick={gotoDocumenttitle}>
          GET STARTED
        </button>
        <div className="video-container">
          <video className="placeholder-video" autoPlay loop muted>
            <source src={videoPlaceholder} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>

      <div className="sliders">
        <div className="slide-track">
          <img src={am} className="slide" alt="" />

          <img src={chnt} className="slide" alt="" />
          <img src={hw} className="slide" alt="" />
          <img src={kansai} className="slide" alt="" />
          <img src={MI} className="slide" alt="" />
          <img src={Mirage} className="slide" alt="" />
          <img src={nsambya} className="slide" alt="" />
          <img src={roof} className="slide" alt="" />
          <img src={shell} className="slide" alt="" />
          <img src={uc} className="slide" alt="" />
          {/* Duplicate images for seamless scrolling */}
          <img src={am} className="slide" alt="" />
          <img src={chnt} className="slide" alt="" />
          <img src={hw} className="slide" alt="" />
          <img src={kansai} className="slide" alt="" />
          <img src={MI} className="slide" alt="" />
        </div>
      </div>

      <FAQ />

      <div className="features-container">
        <h2 className="features-title2">Features</h2>
        <h1 className="features-heading">
          Powerful AI tools to supercharge your assessment
        </h1>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card2">
              <div className="feature-icon2">{feature.icon}</div>
              <h3 className="feature-title2">{feature.title}</h3>
              <p className="feature-description2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-container">
        <h1>What Your Colleagues Say</h1>
        <p className="subtitle">
          Join thousands of students already learning with us
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <span7 key={index} className="star">
                    ★
                  </span7>
                ))}
              </div>
              <h2>{testimonial.title}</h2>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="author-info">
                <div className="author-avatar">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="author-details">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-username">{testimonial.username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
