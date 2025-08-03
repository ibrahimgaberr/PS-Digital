"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Div from "@/components/home/Div";
import Image from "next/image";

export default function Services1({
  title,
  subtitle,
  btnText,
  btnLink,
  imageUrl,
  category,
}:{title:string,subtitle:string,btnText:string,btnLink:string,imageUrl:string,category:string}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Div className="cs-portfolio cs-style2 !mb-10">
      <Div className="cs-gradient_shape" />
      <Div className="container">
        <Div className="flex items-center inverse-sec">
          <Div className="w-1/2">
            <Div
              className={
                hovered ? "cs-portfolio_img active" : "cs-portfolio_img"
              }
            >
              <h3 className="cs-portfolio_img_title">{category}</h3>
              <Div className="w-full h-[90vh] cs-portfolio_img_in cs-shine_hover_1 cs-radius_5">
                <Image
                  fill
                  src={imageUrl}
                  alt="Portfolio"
                  className="object-cover mb-15 rounded-tr-[40px] rounded-bl-[40px]"
                />
              </Div>
            </Div>
          </Div>
          <Div className="w-1/2 p-14">
            <Div className="cs-section_heading cs-style1">
              <h3 className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
                {subtitle}
              </h3>
              <h2 className="text-3xl mb-8 font-semibold tracking-wide text-white  dark:text-[#001d35] lg:text-4xl">
                {title}
              </h2>
              <span
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <Button btnLink={btnLink} btnText={btnText} />
              </span>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
