"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface AboutSection {
  title: string;
  img_1: string;
  img_3: string;
  des: ReactNode;
}

const about_two_bg: AboutSection = {
  img_1: "/images/about-bg.png",
  img_3: "/images/about/video-2-shape-2.png",
  title: "Explore Thousands of Creative Classes.",
  des: (
    <>
      {" "}
      Our expertise includes web design and development, mobile app development,
      digital marketing strategy & management, performance marketing, branding,
      and graphic design.
    </>
  ),
};

const { img_1, img_3, title, des } = about_two_bg;

const AboutUs = () => {
  return (
    <>
      <section className="pt-2 sm:pt-10 pb-20">
        <div className="container flex flex-col px-6 py-6 mx-auto lg:py-12 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full pt-6"
          >
            <span className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
              About US
            </span>
            <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-[#001d35] lg:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-white dark:text-[#001d35]">{des}</p>
            <p className="mt-4 text-white dark:text-[#001d35]">{des}</p>
            <motion.div>
              <Link
                href="/about"
                id="header_button"
                className="hovered_animated_button cursor_hover_zeroed mt-10 dark:!border-[#001d35]"
              >
              <span
                className="hovered_animated_button_circle"
                id="header_button_circle"
              ></span>
              <div className="header_button_inner_content">
                <svg width="26" height="28" viewBox="0 0 26 28" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.598 2.51465H5.7557V0.764648H25.258L25.258 21.6932H23.508L23.508 4.10635L2.02413 27.2351L0.741943 26.0441L22.598 2.51465Z"
                    className="fill-white dark:fill-[#001d35]"
                  ></path>
                </svg>
                <span className="text-white dark:text-[#001d35]">
                  {" "}
                  About Us
                </span>
              </div>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            <Image loading="lazy" fill src={img_1} alt="about-img" />

            <Image
              loading="lazy"
              fill
              src={img_3}
              alt="about-shape"
              className="absolute bottom-0 right-0 opacity-50"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
