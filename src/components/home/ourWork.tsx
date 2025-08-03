"use client";
import React from "react";
import Slider from "react-slick";
import Div from "./Div";
import WorkItem from "./workItem";
import { motion } from "framer-motion";
import Link from "next/link";

interface WorkItem {
  url: string;
  src: string;
  alt: string;
  service: string;
  title: string;
}

export default function WorkSlider() {
  const workData: WorkItem[] = [
    {
      url: "/Portfolio",
      src: "/images/proj/1.jpg",
      alt: "our work",
      service: "website",
      title: "Burger King for fast food",
    },
    {
      url: "/Portfolio",
      src: "/images/proj/2.jpg",
      alt: "our work",
      service: "mobile app",
      title: "ASTK for fashion",
    },
    {
      url: "/Portfolio",
      src: "/images/proj/3.jpg",
      alt: "our work",
      service: "branding",
      title: "Texas Chicken for food",
    },
    {
      url: "/Portfolio",
      src: "/images/proj/1.jpg",
      alt: "our work",
      service: "website",
      title: "How to keep fear from ruining your art business with confident",
    },
    {
      url: "/Portfolio",
      src: "/images/proj/2.jpg",
      alt: "our work",
      service: "website",
      title: "Artistic mind will be great for creation anything",
    },
    {
      url: "/Portfolio",
      src: "/images/proj/3.jpg",
      alt: "our work",
      service: "production",
      title: "A.I will take over all job for human within next year",
    },
  ];

  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="pt-2 sm:pt-20 pb-1 sm:pb-20">
      <div className="gap-10 flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-12 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="container w-full lg:w-[30%] px-0 sm:px-8"
        >
          <span className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
            Our Work
          </span>
          <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-[#001d35] lg:text-5xl">
            view more about our case studies
          </h1>

          <Link
            href="/Portfolio"
            className="!py-[18px] my-10 !px-[60px] text-[18px] btn-action style-2"
          >
            View Projects
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[70%] relative"
        >
          <Div className="cs-half_of_full_width">
            <Slider {...settings} className="cs-gap-24">
              {workData.map((item, index) => (
                <Div key={index}>
                  <WorkItem
                    url={item.url}
                    src={item.src}
                    alt={item.alt}
                    service={item.service}
                    title={item.title}
                  />
                </Div>
              ))}
            </Slider>
          </Div>
        </motion.div>
      </div>
    </section>
  );
}
