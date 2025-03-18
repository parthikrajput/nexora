import React from "react";
import "./ganration.scss";
import box from "../../assets/img/box.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ganrationData = [
  {
    imgSrc: box, // Ensure 'box' is imported or available in scope
    title: "Artificial Intelligence Solutions",
    content:
      "From machine learning models to natural language processing, we develop AI systems that enhance automation, precision, and user engagement across industries.",
  },
  {
    imgSrc: box,
    title: "Cloud Infrastructure Deployment",
    content:
      "At Nexora, we are at the forefront of technological evolution, transforming bold ideas into groundbreaking solutions. Our focus is on empowering businesses to thrive.",
  },
  {
    imgSrc: box,
    title: "Custom Automation Workflows",
    content:
      "Guide businesses through a comprehensive transformation strategy to modernize operations, improve agility, and unlock growth potential.",
  },
];

const HomeGanration = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="py ganration" id="features">
      {/* <div class="box-shadow-4"></div> */}
      <div className="container">
        <div className="title">
          <h2 data-aos="fade-up" data-aos-delay="100">
            Innovative Solutions for the Next Generation
          </h2>
          <div className="content" data-aos="fade-up" data-aos-delay="200">
            <p>
              Whether through AI, automation, or data-driven strategies, we aim
              to revolutionize how industries operate and innovate. With Nexora,
              you don't just adapt.
            </p>
          </div>
        </div>
        <div class="round-box">
          <div class="round-1 round"></div>
          <div class="round-2 round"></div>
          <div class="round-3 round"></div>
          <div class="round-4 round"></div>
        </div>
        <div className="ganration-wrapper">
          {ganrationData.map((item, index) => (
            <div
              className="ganration-box"
              data-aos="fade-up"
              data-aos-delay="300"
              key={index}
            >
              <img src={item.imgSrc} alt="" />
              <div className="title">
                <p>{item.title}</p>
              </div>
              <div className="content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGanration;
