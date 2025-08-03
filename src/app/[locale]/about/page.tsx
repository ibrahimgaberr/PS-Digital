"use client";
import { motion } from "framer-motion";
import Values from "./about/values";
import Div from "@/components/home/Div";
import TeamSlider from "@/components/home/teamSlider";
import "slick-carousel/slick/slick.css";
import Clients from "@/components/home/clients";
import InnerBanner from "@/components/innerBanner";
import Image from "next/image";

interface about {
  img_1: string;
  img_2: string;
  img_3: string;
  title: string;
  des: any;
}

const about_two_bg: about = {
  img_1: "/images/portfolio_2.jpeg",
  img_2: "/images/portfolio_1.jpeg",
  img_3: "/images/about/video-2-shape-2.png",
  title: "Explore Thousands of Creative Classes.",
  des: (
    <>
      {" "}
      Our expertise includes web design and development, mobile app development,
      digital marketing strategy & management, performance marketing, branding,
      and graphic design.Our expertise includes web design and development,
      mobile app development, digital marketing strategy & management,
      performance marketing, branding, and graphic design.
    </>
  ),
};

const { img_1, img_2, img_3, title, des } = about_two_bg;
interface funface {
  title: string;
  factNumber: string;
}

const funfaceData: funface[] = [
  {
    title: "Global Happy Clients",
    factNumber: "400",
  },
  {
    title: "Project Completed",
    factNumber: "500",
  },
  {
    title: "Team Members",
    factNumber: "245",
  },
  {
    title: "Digital products",
    factNumber: "550",
  },
];
const About = () => {
  return (
    <>
      <InnerBanner />
      <section className="pt-2 sm:pt-15 pb-20">
        <div className="container flex flex-col px-6 py-0 mx-auto  lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" w-full pt-6"
          >
            <span className="text-xl font-semibold tracking-wide text-[#fa9f1c] ">
              About US
            </span>
            <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-[#001d35] lg:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-white dark:text-[#001d35]">{des}</p>
            <p className="mt-4 text-white dark:text-[#001d35]">{des}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full relative"
          >
            <Image
              fill
              src={img_1}
              className="w-full mt-10 h-[70vh] rounded-tr-[40px] rounded-bl-[40px]"
              alt="about-img"
            />

            <Image
              fill
              src={img_3}
              alt="about-shape"
              className="absolute hidden lg:-bottom-8 lg:-right-8 opacity-50"
            />
          </motion.div>
        </div>
      </section>

      <section className="pt-2 sm:pt-0 pb-20">
        <div className="container flex flex-col gap-10 px-0 py-2 mx-auto  lg:py-6 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" w-full pt-6 lg:w-1/2"
          >
            <span className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
              What We Do
            </span>
            <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-[#001d35] lg:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-white dark:text-[#001d35]">{des}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            <Image
              fill
              src={img_2}
              className="rounded-tr-[40px] rounded-bl-[40px] w-full h-96 object-cover"
              alt="about-img"
            />
          </motion.div>
        </div>
      </section>
      <Div className="container">
        <Values
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </Div>
      <TeamSlider />
      <Clients />
      <div className="bg-[#01080f] h-[50px] dark:bg-white"></div>
    </>
  );
};

export default About;
