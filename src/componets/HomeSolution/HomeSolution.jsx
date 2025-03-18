import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./homesolution.scss";
import box from "../../assets/img/box.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const tags = ["Solutions", "Innovation", "Automation"];

const contentData = [
  {
    number: "01",
    text: "Our team of experts is dedicated to designing intelligent, adaptable, and forward-thinking.",
  },
  {
    number: "02",
    text: "From AI-driven automation to scalable cloud solutions, we craft smarter tools.",
  },
];

const HomeSolution = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.sectionId) {
      const section = document.getElementById(location.state.sectionId);

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="target-section" className="solution py">
      <div class="box-shadow-3"></div>
      <div className="container" id="about">
        <div className="title">
          <h2 data-aos="fade-up" data-aos-delay="100">
            Crafting Smarter Solutions
          </h2>
          <div className="tags">
            {tags.map((tag, index) => (
              <div
                className="tag"
                data-aos="fade-up"
                data-aos-delay="300"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="solution-wrapper">
          <div className="content">
            {contentData.map((item, index) => (
              <div
                className="content-box"
                data-aos="fade-up"
                data-aos-delay="500"
                key={index}
              >
                <span>{item.number}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="content-box">
            <div className="box" data-aos="fade-up" data-aos-delay="600">
              <div className="heading">
                <p>Cloud Solutions</p>
              </div>
              <p>Scalable and secure cloud infrastructure for businesses.</p>
              <Link to="">Learn More</Link>
            </div>
            <img src={box} alt="box" data-aos="fade-up" data-aos-delay="700" />
          </div>
        </div>

        <div className="solution-content-wrapper">
          <img src={box} alt="box" data-aos="fade-up" data-aos-delay="700" />

          <div
            className="solution-tile"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <span>Results</span>
            <p>15</p>
          </div>

          <div
            className="solution-tile"
            data-aos="fade-up"
            data-aos-delay="850"
          >
            <p>
              General Fintech <br /> Adoption
            </p>
          </div>
          <div
            className="solution-tile"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <span>Solutions</span>
            <p>75%</p>
          </div>
          <div
            className="solution-tile"
            data-aos="fade-up"
            data-aos-delay="950"
          >
            <span>Services</span>
            <p>200</p>
          </div>
        </div>
      </div>
      <div class="round-box">
        <div class="round-1 round"></div>
        <div class="round-2 round"></div>
        <div class="round-3 round"></div>
        <div class="round-4 round"></div>
      </div>
    </section>
  );
};

export default HomeSolution;
