import React from "react";
import "./homehero.scss";
import box from "../../assets/img/box.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import line from "../../assets/img/Line.png";
import sub from "../../assets/img/Subtract.png";
import l1 from "../../assets/img/Logo.png";
import l2 from "../../assets/img/Logo1.png";
import l3 from "../../assets/img/Logo2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const logos = [l1, l2, l3];
const HomeHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="hero" id="home">
      <div className="box-shadow-1"></div>
      <div className="round-box">
        <div className="round-1 round"></div>
        <div className="round-2 round"></div>
        <div className="round-3 round"></div>
        <div className="round-4 round"></div>
      </div>
      <div className="box-shadow"></div>
      <div className="container">
        <div className="hero-wrapper">
          <div
            className="box-img box-1"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img src={box} alt="box images" />
          </div>
          <div className="content">
            <div className="tagline" data-aos="fade-up" data-aos-delay="100">
              <span></span>
              <p>Innovative Solutions for the Next Generation</p>
            </div>
            <h1 data-aos="fade-up" data-aos-delay="300">
              Unlocking the Potential of Future Tech
            </h1>
            <div className="text-p" data-aos="fade-up" data-aos-delay="500">
              <p>
                Our mission is to create cutting-edge solutions that empower
                businesses to thrive in a rapidly evolving digital landscape.
              </p>
            </div>

            <div className="btns" data-aos="fade-up" data-aos-delay="700">
              <div className="btn">
                <Link to="">get started</Link>
              </div>
              <div className="btn-hover">
                <Link to="">contact us</Link>
              </div>
            </div>

            <div className="boxs-1">
              <div className="box-3" data-aos="fade-up" data-aos-delay="800">
                <div className="tag">
                  <span></span>
                  <p>The Need for Innovation</p>
                </div>
                <img src={line} alt="line" />
                <p>85% of businesses believe</p>
              </div>
              <div
                className="box-3 box-4"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="tag">
                  <span></span>
                  <p>The Future Is Big</p>
                </div>
                <div className="sub">
                  <img src={sub} alt="subtrat" />
                  <p>94%</p>
                  <span>Digital Transformation</span>
                </div>
                <div className="sub-box">
                  <p>
                    Proven Results <span>50%</span>
                  </p>
                  <p>
                    Cloud Powering <span>30%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="box-img box-2"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img src={box} alt="box images" />
          </div>
        </div>

        <div className="icon-logos">
          <div className="box-shadow-2"></div>

          <div className="icons">
            <div className="icon" data-aos="fade-up" data-aos-delay="100">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_2_316"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="33"
                  height="34"
                >
                  <rect
                    x="0.0876007"
                    y="0.0933838"
                    width="32.9116"
                    height="32.9116"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2_316)">
                  <path
                    d="M15.1721 23.4058H17.9147V19.2918H22.0287V16.5492H17.9147V12.4352H15.1721V16.5492H11.0581V19.2918H15.1721V23.4058ZM16.5434 30.2624C14.8293 30.2624 13.2237 29.9367 11.7267 29.2853C10.2296 28.6339 8.92688 27.754 7.8184 26.6455C6.70992 25.537 5.82999 24.2343 5.17861 22.7373C4.52724 21.2402 4.20155 19.6347 4.20155 17.9205C4.20155 16.2064 4.52724 14.6008 5.17861 13.1038C5.82999 11.6067 6.70992 10.304 7.8184 9.1955C8.92688 8.08702 10.2296 7.20709 11.7267 6.55572C13.2237 5.90434 14.8293 5.57865 16.5434 5.57865C18.2576 5.57865 19.8631 5.90434 21.3602 6.55572C22.8572 7.20709 24.1599 8.08702 25.2684 9.1955C26.3769 10.304 27.2568 11.6067 27.9082 13.1038C28.5596 14.6008 28.8853 16.2064 28.8853 17.9205C28.8853 19.6347 28.5596 21.2402 27.9082 22.7373C27.2568 24.2343 26.3769 25.537 25.2684 26.6455C24.1599 27.754 22.8572 28.6339 21.3602 29.2853C19.8631 29.9367 18.2576 30.2624 16.5434 30.2624ZM7.76697 3.31598L9.68682 5.23582L3.85872 11.0639L1.93887 9.14408L7.76697 3.31598ZM25.3198 3.31598L31.1479 9.14408L29.2281 11.0639L23.4 5.23582L25.3198 3.31598ZM16.5434 27.5197C19.2175 27.5197 21.4859 26.5884 23.3486 24.7257C25.2113 22.863 26.1426 20.5946 26.1426 17.9205C26.1426 15.2464 25.2113 12.9781 23.3486 11.1153C21.4859 9.25264 19.2175 8.32129 16.5434 8.32129C13.8693 8.32129 11.6009 9.25264 9.73824 11.1153C7.87554 12.9781 6.94418 15.2464 6.94418 17.9205C6.94418 20.5946 7.87554 22.863 9.73824 24.7257C11.6009 26.5884 13.8693 27.5197 16.5434 27.5197Z"
                    fill="#B573AB"
                  />
                </g>
              </svg>
            </div>
            <div className="icon" data-aos="fade-up" data-aos-delay="300">
              <svg
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_2_308"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="33"
                  height="34"
                >
                  <rect
                    x="0.0876007"
                    y="0.180176"
                    width="32.9116"
                    height="32.9116"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2_308)">
                  <path
                    d="M16.5434 31.7205C13.138 31.7205 10.2296 31.2348 7.8184 30.2635C5.40717 29.2921 4.20155 27.9494 4.20155 26.2352C4.20155 25.5039 4.43011 24.8468 4.88721 24.264C5.34432 23.6812 5.98427 23.1612 6.80706 22.7041L9.03545 24.6925C8.48692 24.8753 8.00125 25.1096 7.57842 25.3953C7.1556 25.681 6.94419 25.961 6.94419 26.2352C6.94419 26.8295 7.86983 27.4351 9.72111 28.0522C11.5724 28.6693 13.8465 28.9779 16.5434 28.9779C19.2403 28.9779 21.5144 28.6693 23.3657 28.0522C25.217 27.4351 26.1426 26.8295 26.1426 26.2352C26.1426 25.961 25.9312 25.681 25.5084 25.3953C25.0856 25.1096 24.5999 24.8753 24.0514 24.6925L26.2798 22.7041C27.1026 23.1612 27.7425 23.6812 28.1996 24.264C28.6567 24.8468 28.8853 25.5039 28.8853 26.2352C28.8853 27.9494 27.6797 29.2921 25.2684 30.2635C22.8572 31.2348 19.9488 31.7205 16.5434 31.7205ZM16.5434 26.2352C16.0406 26.2352 15.5549 26.1495 15.0864 25.9781C14.6179 25.8067 14.1893 25.5496 13.8008 25.2067L5.16148 17.5616C4.86436 17.3102 4.63009 17.0017 4.45868 16.636C4.28726 16.2703 4.20155 15.8932 4.20155 15.5047V12.762C4.20155 12.3735 4.27583 11.9964 4.42439 11.6307C4.57295 11.265 4.79579 10.9565 5.09291 10.7051L13.7322 2.64857C14.1208 2.28288 14.555 2.00862 15.035 1.82578C15.5149 1.64293 16.0177 1.55151 16.5434 1.55151C17.0691 1.55151 17.5719 1.64293 18.0519 1.82578C18.5318 2.00862 18.9661 2.28288 19.3546 2.64857L27.9939 10.7051C28.291 10.9565 28.5139 11.265 28.6624 11.6307C28.811 11.9964 28.8853 12.3735 28.8853 12.762V15.5047C28.8853 15.8932 28.7996 16.2703 28.6281 16.636C28.4567 17.0017 28.2225 17.3102 27.9253 17.5616L19.286 25.2067C18.8975 25.5496 18.469 25.8067 18.0004 25.9781C17.5319 26.1495 17.0462 26.2352 16.5434 26.2352ZM16.4063 19.79C16.7263 19.79 17.0291 19.7386 17.3148 19.6358C17.6005 19.5329 17.869 19.3672 18.1204 19.1387L25.7312 12.3849L17.5033 4.63698C17.3433 4.5227 17.1834 4.43699 17.0234 4.37986C16.8634 4.32272 16.692 4.29415 16.5091 4.29415C16.3263 4.29415 16.1549 4.32272 15.9949 4.37986C15.8349 4.43699 15.6978 4.5227 15.5835 4.63698L7.21845 12.5221L14.6921 19.1387C14.9435 19.3672 15.2121 19.5329 15.4978 19.6358C15.7835 19.7386 16.0863 19.79 16.4063 19.79ZM12.4295 14.2362C12.9094 14.2362 13.3151 14.0705 13.6465 13.7391C13.9779 13.4077 14.1436 13.002 14.1436 12.5221C14.1436 12.0421 13.9779 11.6364 13.6465 11.305C13.3151 10.9736 12.9094 10.8079 12.4295 10.8079C11.9495 10.8079 11.5438 10.9736 11.2124 11.305C10.881 11.6364 10.7153 12.0421 10.7153 12.5221C10.7153 13.002 10.881 13.4077 11.2124 13.7391C11.5438 14.0705 11.9495 14.2362 12.4295 14.2362ZM14.1436 16.0875C15.1264 16.5674 16.1606 16.7217 17.2462 16.5503C18.3318 16.3789 19.286 15.9275 20.1088 15.1961C20.8859 14.5333 21.3944 13.6991 21.6344 12.6935C21.8744 11.6878 21.7544 10.7393 21.2745 9.84799L14.1436 16.0875ZM16.5434 10.1222C17.0234 10.1222 17.4291 9.95655 17.7605 9.62515C18.0919 9.29374 18.2576 8.88806 18.2576 8.4081C18.2576 7.92814 18.0919 7.52246 17.7605 7.19106C17.4291 6.85966 17.0234 6.69395 16.5434 6.69395C16.0634 6.69395 15.6578 6.85966 15.3264 7.19106C14.995 7.52246 14.8293 7.92814 14.8293 8.4081C14.8293 8.88806 14.995 9.29374 15.3264 9.62515C15.6578 9.95655 16.0634 10.1222 16.5434 10.1222Z"
                    fill="#B573AB"
                  />
                </g>
              </svg>
            </div>
            <div className="icon" data-aos="fade-up" data-aos-delay="500">
              <svg
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_2_290"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="33"
                  height="34"
                >
                  <rect
                    x="0.087616"
                    y="0.26709"
                    width="32.9116"
                    height="32.9116"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2_290)">
                  <path
                    d="M14.555 25.2251L21.6516 16.7229H16.1663L17.1605 8.94071L10.8182 18.0943H15.5835L14.555 25.2251ZM11.0582 30.4361L12.4295 20.8369H5.57289L17.9147 3.00977H20.6574L19.2861 13.9803H27.514L13.8008 30.4361H11.0582Z"
                    fill="#B573AB"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className="company-logos">
            {logos.length <= 3 ? (
              <div className="static-logos">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="logo"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <img src={logo} alt={`logo-${index}`} />
                  </div>
                ))}
              </div>
            ) : (
              <Slider {...settings}>
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="logo"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <img src={logo} alt={`logo-${index}`} />
                  </div>
                ))}
              </Slider>
            )}
          </div>

          <div className="scroll-box" data-aos="fade-up" data-aos-delay="700">
            <Link to="/" state={{ sectionId: "target-section" }}>
              Scroll Down
              <div className="icon">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_2_298"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="41"
                    height="41"
                  >
                    <rect
                      x="0.571411"
                      y="0.837708"
                      width="40"
                      height="40"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_2_298)">
                    <path
                      d="M20.5714 32.5044L10.5714 22.5044L12.9047 20.171L20.5714 27.796L28.2381 20.171L30.5714 22.5044L20.5714 32.5044ZM20.5714 22.5044L10.5714 12.5044L12.9047 10.171L20.5714 17.796L28.2381 10.171L30.5714 12.5044L20.5714 22.5044Z"
                      fill="#B573AB"
                    />
                  </g>
                </svg>
              </div>
            </Link>
          </div>

          <div className="round-box">
            <div className="round-1 round"></div>
            <div className="round-2 round"></div>
            <div className="round-3 round"></div>
            <div className="round-4 round"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
