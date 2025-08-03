"use client";

import Link from "next/link";
import React, { useState } from "react";
import Div from "./Div";
import { motion } from "framer-motion";
import Image from "next/image";


interface Service {
  title: string;
  subtitle: string;
  imgUrl: string;
  href: string;
}

export default function ServiceList() {
  const serviceData: Service[] = [
    {
      title: "WP Development",
      subtitle:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem.",
      imgUrl: "/images/proj/1.jpg",
      href: "/Portfolio",
    },
    {
      title: "UI/UX Design",
      subtitle:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem.",
      imgUrl: "/images/proj/2.jpg",
      href: "/Portfolio",
    },
    {
      title: "Branding",
      subtitle:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem.",
      imgUrl: "/images/proj/3.jpg",
      href: "/Portfolio",
    },
    {
      title: "Social Ad Campaign",
      subtitle:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem.",
      imgUrl: "/images/proj/4.jpg",
      href: "/Portfolio",
    },
  ];

  const [active, setActive] = useState(0);
  const handelActive = (index: number) => {
    setActive(index);
  };

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
        <Div className="cs-iconbox_3_list">
          {serviceData.map((item, index) => (
            <Div
              className={`cs-hover_tab ${active === index ? "active" : ""}`}
              key={index}
              onMouseEnter={() => handelActive(index)}
            >
              <Link href={item.href} className="cs-iconbox cs-style3">
                <>
                  <Div className="cs-image_layer cs-style1 cs-size_md">
                    <Div className="cs-image_layer_in">
                      <Image
                        src={item.imgUrl}
                        alt="Thumb"
                        className="rounded-tr-[40px] rounded-bl-[40px]"
                      />
                    </Div>
                  </Div>
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 * index }}
                    className="flex"
                  >
                    <Div className="cs-iconbox_in">
                      <h2 className="cs-iconbox_title dark:text-[#001d35]">
                        {item.title}
                      </h2>
                      <Div className="cs-iconbox_subtitle dark:text-[#001d35]">
                        {item.subtitle}
                      </Div>
                    </Div>
                    <span className="cs-iconbox_icon flex justify-center items-center">
                      <svg
                        width={30}
                        height={29}
                        viewBox="0 0 30 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                          fill="currentColor"
                        />
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
