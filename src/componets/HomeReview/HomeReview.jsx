import React from "react";
import "./homereview.scss";
import user from "../../assets/img/box.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const reviews = [
  {
    name: "Theresa Webb",
    role: "Medical Assistant",
    image: user,
    review:
      "Nexora transformed our business operations with their cutting-edge AI solutions. We saw a 40% increase in efficiency within just three months! Their team was collaborative, professional, and always ahead of the curve.",
    rating: 5,
  },
  {
    name: "Jerome Bell",
    role: "Nursing Assistant",
    image: user,
    review:
      "The cloud infrastructure Nexora built for us was a game-changer. It was secure, scalable, and allowed us to seamlessly expand our services globally. I can't recommend them enough",
    rating: 5,
  },
  {
    name: "Arlene McCoy",
    role: "Marketing Coordinator",
    image: user,
    review:
      "We partnered with Nexora for our digital transformation journey, and the results were phenomenal. Their innovative approach and attention to detail ensured that we stayed ahead in our industry.",
    rating: 5,
  },
  {
    name: "Leslie Alexander",
    role: "Web Designer",
    image: user,
    review:
      "Nexora’s IoT solutions enabled us to monitor and optimize our operations in real time. Their expertise and dedication to delivering value exceeded all expectations.",
    rating: 5,
  },
];

const HomeReview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="py review">
      <div class="box-shadow-4"></div>
      <div class="box-shadow-5"></div>

      <div class="round-box">
        <div class="round-1 round"></div>
        <div class="round-2 round"></div>
        <div class="round-3 round"></div>
        <div class="round-4 round"></div>
      </div>

      <div className="container">
        <div className="title">
          <h2 data-aos="fade-up" data-aos-delay="100">
            What Our Clients Are Saying
          </h2>
          <div className="content" data-aos="fade-up" data-aos-delay="200">
            <p>
              At Nexora, our clients’ success stories speak volumes about the
              impact of our solutions. From startups to global enterprises,
              we’ve partnered with businesses across industries to help them
              innovate, grow, and thrive.
            </p>
          </div>
        </div>

        <div className="reviws">
          {reviews.map((item, index) => (
            <div
              className="review-box"
              data-aos="fade-up"
              data-aos-delay="300"
              key={index}
            >
              <Link to="" className="oner-sharing">
                <div className="oner">
                  <img src={item.image} alt="user" />
                  <div className="oner-title">
                    <p>{item.name}</p>
                    <span>{item.role}</span>
                  </div>
                </div>

                <svg
                  width="61"
                  height="61"
                  viewBox="0 0 61 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_3_445"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="61"
                    height="61"
                  >
                    <rect
                      x="1.019"
                      y="30.8281"
                      width="41.4707"
                      height="41.4707"
                      transform="rotate(-45 1.019 30.8281)"
                      fill="#D9D9D9"
                      stroke="#B573AB"
                    />
                  </mask>
                  <g mask="url(#mask0_3_445)">
                    <path
                      d="M36.5753 26.6737L21.5841 41.6649L19.5058 39.5866L34.497 24.5954L35.0091 24.0833H34.2849L25.6954 24.0833L25.6433 21.117L40.0537 21.117L40.0537 35.5274L37.0875 35.4753L37.0875 26.8859V26.1616L36.5753 26.6737Z"
                      fill="#B573AB"
                      stroke="#B573AB"
                      stroke-width="0.6"
                    />
                  </g>
                </svg>
              </Link>

              <p>{item.review}</p>

              {/* Dynamic Star Rating */}
              <div className="star">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59505 1.43664C9.8073 0.783417 10.7314 0.783417 10.9437 1.43664L12.8648 7.34934C12.9597 7.64146 13.232 7.83925 13.5391 7.83925H19.7561C20.4429 7.83925 20.7285 8.71815 20.1729 9.12186L15.1432 12.7761C14.8947 12.9567 14.7907 13.2767 14.8857 13.5688L16.8068 19.4815C17.019 20.1347 16.2714 20.6779 15.7158 20.2742L10.6861 16.62C10.4376 16.4394 10.1011 16.4394 9.85262 16.62L4.82297 20.2742C4.26731 20.6779 3.51968 20.1347 3.73192 19.4815L5.65307 13.5688C5.74799 13.2767 5.64401 12.9567 5.39551 12.7761L0.365867 9.12186C-0.189794 8.71815 0.0957778 7.83925 0.782612 7.83925H6.99959C7.30676 7.83925 7.57898 7.64146 7.6739 7.34934L9.59505 1.43664Z"
                      fill="#FCEC36"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeReview;
