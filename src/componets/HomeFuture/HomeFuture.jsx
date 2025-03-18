import React from "react";
import "./homefuture.scss";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import box from "../../assets/img/box.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const reviewsData = {
  tab1: [
    {
      name: "Urban Wildlife Exploration",
      position:
        "Discover the flora and fauna thriving in the city’s green spaces.",
    },
    { name: "John Doe", position: "CTO of SkyTech" },
  ],
  tab2: [
    {
      name: "Sophia Carter",
      position: "Manager at Alpha Inc.",
    },
    {
      name: "Liam Wilson",
      position: "Lead Dev at NextGen",
    },
  ],
  tab3: [
    {
      name: "Sophia Carter",
      position: "Manager at Alpha Inc.",
    },
    {
      name: "Liam Wilson",
      position: "Lead Dev at NextGen",
    },
  ],
};

const HomeFuture = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [key, setKey] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [activeTab]);
  return (
    <section className="py future">
      <div class="box-shadow-4"></div>
      <div className="container">
        <div className="title">
          <h2 data-aos="fade-up" data-aos-delay="200">
            Revolutionizing the Future of Innovation
          </h2>
        </div>
        <div className="future-wrapper">
          <div className="future-tab" data-aos="fade-up" data-aos-delay="300">
            <p>
              Whether through AI, automation, or data-driven strategies, we aim
              to revolutionize how industries operate and innovate. With Nexora,
              you don't just adapt.
            </p>

            <div className="tab-btn" data-aos="fade-up" data-aos-delay="350">
              <span></span> <p>Innovation</p>
            </div>
            <div className="tabs" data-aos="fade-up" data-aos-delay="500">
              <div
                className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                onClick={() => setActiveTab("tab1")}
              >
                Digital Transformation
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_2_369"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="25"
                  >
                    <rect
                      x="0.731018"
                      y="0.00830078"
                      width="24"
                      height="24"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_2_369)">
                    <path
                      d="M13.406 12.0083L10.331 15.0833L11.731 16.5083L16.231 12.0083L11.731 7.5083L10.331 8.9333L13.406 12.0083ZM12.731 22.0083C11.3477 22.0083 10.0477 21.7458 8.83102 21.2208C7.61435 20.6958 6.55602 19.9833 5.65602 19.0833C4.75602 18.1833 4.04352 17.125 3.51852 15.9083C2.99352 14.6916 2.73102 13.3916 2.73102 12.0083C2.73102 10.625 2.99352 9.32497 3.51852 8.1083C4.04352 6.89163 4.75602 5.8333 5.65602 4.9333C6.55602 4.0333 7.61435 3.3208 8.83102 2.7958C10.0477 2.2708 11.3477 2.0083 12.731 2.0083C14.1144 2.0083 15.4144 2.2708 16.631 2.7958C17.8477 3.3208 18.906 4.0333 19.806 4.9333C20.706 5.8333 21.4185 6.89163 21.9435 8.1083C22.4685 9.32497 22.731 10.625 22.731 12.0083C22.731 13.3916 22.4685 14.6916 21.9435 15.9083C21.4185 17.125 20.706 18.1833 19.806 19.0833C18.906 19.9833 17.8477 20.6958 16.631 21.2208C15.4144 21.7458 14.1144 22.0083 12.731 22.0083ZM12.731 20.0083C14.9644 20.0083 16.856 19.2333 18.406 17.6833C19.956 16.1333 20.731 14.2416 20.731 12.0083C20.731 9.77497 19.956 7.8833 18.406 6.3333C16.856 4.7833 14.9644 4.0083 12.731 4.0083C10.4977 4.0083 8.60602 4.7833 7.05602 6.3333C5.50602 7.8833 4.73102 9.77497 4.73102 12.0083C4.73102 14.2416 5.50602 16.1333 7.05602 17.6833C8.60602 19.2333 10.4977 20.0083 12.731 20.0083Z"
                      fill="#B573AB"
                    />
                  </g>
                </svg>
              </div>
              <div
                className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                onClick={() => setActiveTab("tab2")}
              >
                Software Development
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_2_369"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="25"
                  >
                    <rect
                      x="0.731018"
                      y="0.00830078"
                      width="24"
                      height="24"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_2_369)">
                    <path
                      d="M13.406 12.0083L10.331 15.0833L11.731 16.5083L16.231 12.0083L11.731 7.5083L10.331 8.9333L13.406 12.0083ZM12.731 22.0083C11.3477 22.0083 10.0477 21.7458 8.83102 21.2208C7.61435 20.6958 6.55602 19.9833 5.65602 19.0833C4.75602 18.1833 4.04352 17.125 3.51852 15.9083C2.99352 14.6916 2.73102 13.3916 2.73102 12.0083C2.73102 10.625 2.99352 9.32497 3.51852 8.1083C4.04352 6.89163 4.75602 5.8333 5.65602 4.9333C6.55602 4.0333 7.61435 3.3208 8.83102 2.7958C10.0477 2.2708 11.3477 2.0083 12.731 2.0083C14.1144 2.0083 15.4144 2.2708 16.631 2.7958C17.8477 3.3208 18.906 4.0333 19.806 4.9333C20.706 5.8333 21.4185 6.89163 21.9435 8.1083C22.4685 9.32497 22.731 10.625 22.731 12.0083C22.731 13.3916 22.4685 14.6916 21.9435 15.9083C21.4185 17.125 20.706 18.1833 19.806 19.0833C18.906 19.9833 17.8477 20.6958 16.631 21.2208C15.4144 21.7458 14.1144 22.0083 12.731 22.0083ZM12.731 20.0083C14.9644 20.0083 16.856 19.2333 18.406 17.6833C19.956 16.1333 20.731 14.2416 20.731 12.0083C20.731 9.77497 19.956 7.8833 18.406 6.3333C16.856 4.7833 14.9644 4.0083 12.731 4.0083C10.4977 4.0083 8.60602 4.7833 7.05602 6.3333C5.50602 7.8833 4.73102 9.77497 4.73102 12.0083C4.73102 14.2416 5.50602 16.1333 7.05602 17.6833C8.60602 19.2333 10.4977 20.0083 12.731 20.0083Z"
                      fill="#B573AB"
                    />
                  </g>
                </svg>
              </div>
              <div
                className={`tab ${activeTab === "tab3" ? "active" : ""}`}
                onClick={() => setActiveTab("tab3")}
              >
                Blockchain Services
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_2_369"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="25"
                  >
                    <rect
                      x="0.731018"
                      y="0.00830078"
                      width="24"
                      height="24"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_2_369)">
                    <path
                      d="M13.406 12.0083L10.331 15.0833L11.731 16.5083L16.231 12.0083L11.731 7.5083L10.331 8.9333L13.406 12.0083ZM12.731 22.0083C11.3477 22.0083 10.0477 21.7458 8.83102 21.2208C7.61435 20.6958 6.55602 19.9833 5.65602 19.0833C4.75602 18.1833 4.04352 17.125 3.51852 15.9083C2.99352 14.6916 2.73102 13.3916 2.73102 12.0083C2.73102 10.625 2.99352 9.32497 3.51852 8.1083C4.04352 6.89163 4.75602 5.8333 5.65602 4.9333C6.55602 4.0333 7.61435 3.3208 8.83102 2.7958C10.0477 2.2708 11.3477 2.0083 12.731 2.0083C14.1144 2.0083 15.4144 2.2708 16.631 2.7958C17.8477 3.3208 18.906 4.0333 19.806 4.9333C20.706 5.8333 21.4185 6.89163 21.9435 8.1083C22.4685 9.32497 22.731 10.625 22.731 12.0083C22.731 13.3916 22.4685 14.6916 21.9435 15.9083C21.4185 17.125 20.706 18.1833 19.806 19.0833C18.906 19.9833 17.8477 20.6958 16.631 21.2208C15.4144 21.7458 14.1144 22.0083 12.731 22.0083ZM12.731 20.0083C14.9644 20.0083 16.856 19.2333 18.406 17.6833C19.956 16.1333 20.731 14.2416 20.731 12.0083C20.731 9.77497 19.956 7.8833 18.406 6.3333C16.856 4.7833 14.9644 4.0083 12.731 4.0083C10.4977 4.0083 8.60602 4.7833 7.05602 6.3333C5.50602 7.8833 4.73102 9.77497 4.73102 12.0083C4.73102 14.2416 5.50602 16.1333 7.05602 17.6833C8.60602 19.2333 10.4977 20.0083 12.731 20.0083Z"
                      fill="#B573AB"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="slider" data-aos="fade-up" data-aos-delay="550">
            <Swiper
              key={key}
              modules={[Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: false }}
              navigation
              breakpoints={{
                0: { slidesPerView: 1 },
              }}
            >
              {reviewsData[activeTab].map((review, index) => (
                <SwiperSlide key={index}>
                  <h3>{review.name}</h3>
                  <p>{review.position}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="data-ana" data-aos="fade-up" data-aos-delay="600">
            <h3>Data Analytics</h3>
            <p>Advanced analytics to turn raw data into actionable insights.</p>
            <Link to="">Learn More</Link>
            <img src={box} alt="box" />
          </div>
          <div className="pages">
            <div className="tab-btn" data-aos="fade-up" data-aos-delay="650">
              <span></span> <p>Innovation</p>
            </div>

            <div className="our-page">
              <div className="box" data-aos="fade-up" data-aos-delay="700">
                <h2>20%</h2>
                <p>Sustainability Through Innovation</p>
              </div>
              <div className="box" data-aos="fade-up" data-aos-delay="750">
                <h2>100</h2>
                <p>Organizations to Achieve Digital Excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFuture;
