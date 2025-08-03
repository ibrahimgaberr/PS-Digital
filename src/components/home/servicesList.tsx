"use client";
import Link from "next/link";
import React from "react";
import Div from "./Div";
import { motion } from "framer-motion";

export default function ServiceList() {
  const serviceData = [
    {
      svg: (
        <svg
          viewBox="0 0 300 300"
          className="fill-white dark:fill-[#001d35] w-[35px]"
        >
          <rect
            className="cls-1"
            x="-469.44"
            y="-867.22"
            width="50"
            height="50"
          ></rect>
          <path d="m147.08,207.45l-42.38,22.28c-4.6,2.42-9.97-1.49-9.09-6.61l8.09-47.19c.35-2.03-.33-4.11-1.8-5.55l-34.29-33.42c-3.72-3.63-1.67-9.94,3.47-10.69l47.38-6.88c2.04-.3,3.81-1.58,4.72-3.43l21.19-42.94c2.3-4.66,8.94-4.66,11.24,0l21.19,42.94c.91,1.85,2.68,3.13,4.72,3.43l47.38,6.88c5.14.75,7.19,7.06,3.47,10.69l-34.29,33.42c-1.48,1.44-2.15,3.51-1.8,5.55l8.09,47.19c.88,5.12-4.5,9.02-9.09,6.61l-42.38-22.28c-1.83-.96-4.01-.96-5.83,0Z"></path>
        </svg>
      ),
      title: "WP Development",
      subtitle: "Sed ut perspiciatis unde omnis iste natus error sit.",
      imgUrl: "/images/proj/1.jpg",
      href: "/Portfolio",
    },
    {
      svg: (
        <svg
          viewBox="0 0 300 300"
          className="fill-white dark:fill-[#001d35] w-[35px]"
        >
          <rect
            className="cls-1"
            x="-469.44"
            y="-867.22"
            width="50"
            height="50"
          ></rect>
          <g>
            <path
              className="cls-2"
              d="m157.59,194.99c-4.13.7-8.45.84-12.88.33-21.55-2.48-38.57-20.16-40.2-41.78-2.08-27.58,20.37-50.46,47.8-49.11,23.28,1.14,42.17,20.1,43.27,43.38.19,4.11-.16,8.1-.99,11.91-.52,2.41.77,4.84,3.08,5.7l23.47,8.81c2.73,1.03,5.76-.53,6.51-3.34,1.85-6.89,2.83-14.14,2.76-21.63-.4-43.39-35.78-79-79.16-79.66-44.98-.68-81.65,35.58-81.65,80.4s36,80.41,80.41,80.41c5.63,0,11.11-.59,16.41-1.7,2.81-.59,4.53-3.45,3.74-6.21l-6.93-24.02c-.7-2.44-3.13-3.91-5.63-3.49Z"
            />
            <path
              className="cls-2"
              d="m150,118.22c-17.55,0-31.78,14.23-31.78,31.78s14.23,31.78,31.78,31.78c2.8,0,5.51-.37,8.1-1.05l-8-27.72c-1.05-3,1.29-5.16,4.2-3.88l26.19,9.83c.84-2.85,1.29-5.85,1.29-8.97,0-17.55-14.23-31.78-31.78-31.78Z"
            />
          </g>
        </svg>
      ),
      title: "UI/UX Design",
      subtitle: "Sed ut perspiciatis unde omnis iste natus error sit.",
      imgUrl: "/images/proj/2.jpg",
      href: "/Portfolio",
    },
    {
      svg: (
        <svg
          viewBox="0 0 300 300"
          className="fill-white dark:fill-[#001d35] w-[35px]"
        >
          <rect
            className="cls-1"
            x="-799.52"
            y="-867.22"
            width="30"
            height="30"
          />
          <g>
            <path
              className="cls-2"
              d="m256.48,150s-47.67,53.45-106.48,53.45-106.48-53.45-106.48-53.45c0,0,47.67-53.45,106.48-53.45s106.48,53.45,106.48,53.45Z"
            />
            <circle
              className="cls-1 fill-[#001d35]"
              cx="150"
              cy="150"
              r="46.56"
            />
          </g>
        </svg>
      ),
      title: "Branding",
      subtitle: "Sed ut perspiciatis unde omnis iste natus error sit.",
      imgUrl: "/images/proj/3.jpg",
      href: "/Portfolio",
    },
    {
      svg: (
        <svg
          className="fill-white dark:fill-[#001d35] w-[35px]"
          viewBox="0 0 300 300"
        >
          <rect
            className="cls-1"
            x="-469.44"
            y="-867.22"
            width="50"
            height="50"
          ></rect>
          <g>
            <path
              className="cls-3"
              d="m197.06,181.93v-93.85c0-10.24-8.3-18.55-18.55-18.55h-57.02c-10.24,0-18.55,8.3-18.55,18.55v93.85h94.12Z"
            />
            <path
              className="cls-3"
              d="m102.94,186.61v25.31c0,10.24,8.3,18.55,18.55,18.55h57.02c10.24,0,18.55-8.3,18.55-18.55v-25.31h-94.12Z"
            />
            <line
              className="cls-2"
              x1="139.35"
              y1="94.56"
              x2="161.47"
              y2="94.56"
            />
          </g>
        </svg>
      ),
      title: "Social Ad Campaign",
      subtitle: "Sed ut perspiciatis unde omnis iste natus error sit.",
      imgUrl: "/images/proj/4.jpg",
      href: "/Portfolio",
    },
  ];
  return (
    <Div className="bg-gradient-to-t from-[#001d35] to-[#01080f] dark:from-[#eee] dark:to-[#eee]">
      <Div className="container !py-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container flex flex-col px-6 py-10 mx-auto space-y-6"
        >
          <div className="mb-10 w-full">
            <span className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
              Our services
            </span>
            <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-[#001d35] lg:text-4xl">
              Portfolio to explore
            </h1>
          </div>
        </motion.div>
        <Div className="">
          {serviceData.map((item, index) => (
            <Div className=" [&>*:last-child]:border-b-2" key={index}>
              <Link
                href={item.href}
                className="cs-iconbox cs-style3 !justify-center  border-gray-800"
              >
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex gap-[32rem] justify-between"
                  >
                    <Div className="cs-iconbox_in flex gap-10">
                      <div>{item.svg}</div>
                      <div>
                        <h2 className="cs-iconbox_title dark:text-[#001d35]">
                          {item.title}
                        </h2>
                        <Div className="cs-iconbox_subtitle dark:text-[#001d35]">
                          {item.subtitle}
                        </Div>
                      </div>
                    </Div>
                    <span className="cs-iconbox_icon flex justify-center items-center">
                      <svg
                        width="26"
                        height="28"
                        viewBox="0 0 26 28"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.598 2.51465H5.7557V0.764648H25.258L25.258 21.6932H23.508L23.508 4.10635L2.02413 27.2351L0.741943 26.0441L22.598 2.51465Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </motion.div>
                </>
              </Link>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
