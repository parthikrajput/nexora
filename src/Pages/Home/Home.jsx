import React from "react";
import HomeHero from "../../componets/HomeHero/HomeHero";
import HomeSolution from "../../componets/HomeSolution/HomeSolution";
import HomeFuture from "../../componets/HomeFuture/HomeFuture";
import HomeGanration from "../../componets/HomeGanration/HomeGanration";
import HomeReview from "../../componets/HomeReview/HomeReview";

const Home = () => {
  return (
    <>
      <main>
        <HomeHero />
        <HomeSolution />
        <HomeFuture />
        <HomeGanration />
        <HomeReview />
      </main>
    </>
  );
};

export default Home;
