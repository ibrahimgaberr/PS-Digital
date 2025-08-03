"use client";
import Slider from "react-slick";
import Div from "./Div";
import Team from "./teamItem";
import { motion } from "framer-motion";

interface TeamItem {
  memberImage: string;
  memberName: string;
  memberDesignation: string;
}

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData: TeamItem[] = [
    {
      memberImage: "/images/member_1.jpeg",
      memberName: "Melon Bulgery",
      memberDesignation: "Product Designer",
    },
    {
      memberImage: "/images/member_2.jpeg",
      memberName: "Olinaz Fushi",
      memberDesignation: "Product Designer",
    },
    {
      memberImage: "/images/member_3.jpeg",
      memberName: "David Elone",
      memberDesignation: "React Developer",
    },
    {
      memberImage: "/images/member_4.jpeg",
      memberName: "Melina Opole",
      memberDesignation: "WP Developer",
    },
    {
      memberImage: "/images/member_1.jpeg",
      memberName: "Melon Bulgery",
      memberDesignation: "Product Designer",
    },
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow !rounded-tr-[10px] !rounded-bl-[10px] dark:bg-[#001d35]" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <svg width="30" height="30" x="0" y="0" viewBox="0 0 512 512">
        <g>
          <path
            d="M492 236H68.442l70.164-69.824c7.829-7.792 7.859-20.455.067-28.284-7.792-7.83-20.456-7.859-28.285-.068l-104.504 104-.018.019c-7.809 7.792-7.834 20.496-.002 28.314l.018.019 104.504 104c7.828 7.79 20.492 7.763 28.285-.068 7.792-7.829 7.762-20.492-.067-28.284L68.442 276H492c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
            fill="#FFFFFF"
            data-original="#000000"
            opacity="1"
          ></path>
        </g>
      </svg>
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow !rounded-tr-[10px] !rounded-bl-[10px] dark:bg-[#001d35]" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <svg width="30" height="30" x="0" y="0" viewBox="0 0 512.009 512.009">
        <g>
          <path
            d="M508.625 247.801 392.262 131.437c-4.18-4.881-11.526-5.45-16.407-1.269-4.881 4.18-5.45 11.526-1.269 16.407.39.455.814.88 1.269 1.269l96.465 96.582H11.636C5.21 244.426 0 249.636 0 256.063s5.21 11.636 11.636 11.636H472.32l-96.465 96.465c-4.881 4.18-5.45 11.526-1.269 16.407s11.526 5.45 16.407 1.269c.455-.39.88-.814 1.269-1.269l116.364-116.364c4.511-4.537 4.511-11.867-.001-16.406z"
            fill="#FFFFFF"
            data-original="#000000"
            opacity="1"
          ></path>
        </g>
      </svg>
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Div className="container !p-0 !mb-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col px-4 py-10 mx-auto space-y-6"
      >
        <div className="mb-10 w-full">
          <span className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
            Our Team
          </span>
          <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-[#001d35] lg:text-4xl">
            Awesome team members
          </h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
          {teamData.map((item, index) => (
            <Div key={index}>
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
              />
            </Div>
          ))}
        </Slider>
      </motion.div>
    </Div>
  );
}
