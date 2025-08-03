"use client";
import Portfolio from "./portfolioItem";
import Slider from "react-slick";
import Div from "./Div";
import { motion } from "framer-motion";

interface PortfolioItem {
  title: string;
  subtitle: string;
  href: string;
  src: string;
}

const PortfolioSlider = () => {
  const portfolioData: PortfolioItem[] = [
    {
      title: "Colorful Art Work",
      subtitle: "view project",
      href: "/innerProject",
      src: "/images/portfolio_1.jpeg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "view project",
      href: "/innerProject",
      src: "/images/portfolio_2.jpeg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "view project",
      href: "/innerProject",
      src: "/images/portfolio_4.jpeg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "view project",
      href: "/innerProject",
      src: "/images/portfolio_3.jpeg",
    },
  ];

  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container flex flex-col px-6 py-10 mx-auto space-y-6"
      >
        <div className="mb-10 w-full">
          <span className="text-xl font-semibold tracking-wide text-[#fa9f1c] animate-fade-up animate-delay-[1.5s]">
            Our portfolio
          </span>
          <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-[#001d35] lg:text-4xl animate-fade-up animate-delay-[2s]">
            Portfolio to explore
          </h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
          {portfolioData.map((item, index) => (
            <Div key={index}>
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src} 
                variant={undefined} 
              />
            </Div>
          ))}
        </Slider>
      </motion.div>
    </>
  );
};

export default PortfolioSlider;
