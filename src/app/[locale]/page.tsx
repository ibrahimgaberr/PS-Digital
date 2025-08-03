import dynamic from "next/dynamic";

import "slick-carousel/slick/slick.css";
import MainHero from "@/components/home/mainHero";
import Counter from "@/components/home/counter";
import LazyLoadOnScroll from "@/components/lazyLoadOnScroll";

const AboutUs = dynamic(() => import("@/components/home/about2"), {
  ssr: false,
});
const Clients = dynamic(() => import("@/components/home/clients"), {
  ssr: false,
});
const PortfolioSlider = dynamic(() => import("@/components/home/PortfolioSlider"), {
  ssr: false,
});
const ServiceList = dynamic(() => import("@/components/home/servicesList"), {
  ssr: false,
});
const WorkSlider = dynamic(() => import("@/components/home/ourWork"), {
  ssr: false,
});
const TeamSlider = dynamic(() => import("@/components/home/teamSlider"),{
  ssr: false,
});
const CareerSec = dynamic(() => import("@/components/home/careersSec"), {
  ssr: false,
});


const HomePage = () => {
  return (
    <>
      <MainHero />
      <Counter />
      
      <LazyLoadOnScroll>
        <AboutUs />
      </LazyLoadOnScroll>


      <LazyLoadOnScroll>
        <Clients />
      </LazyLoadOnScroll>

      <LazyLoadOnScroll>
        <PortfolioSlider />
      </LazyLoadOnScroll>

      <LazyLoadOnScroll>
        <ServiceList />
      </LazyLoadOnScroll>

      <LazyLoadOnScroll>
        <WorkSlider />
      </LazyLoadOnScroll>

      <LazyLoadOnScroll>
        <TeamSlider />
      </LazyLoadOnScroll>

      <LazyLoadOnScroll>
        <CareerSec />
      </LazyLoadOnScroll>
    </>
  );
};

export default HomePage;
