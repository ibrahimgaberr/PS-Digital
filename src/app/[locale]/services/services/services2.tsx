"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Div from "@/components/home/Div";
import Image from "next/image";

export default function Services2({
  title,
  subtitle,
  btnText,
  btnLink,
  imageUrl,
  category,
}:{
  title: string,
  subtitle: string,
  btnText: string,
  btnLink: string,
  imageUrl: string,
  category: string}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Div className="cs-portfolio cs-style2 cs-type1">
      <Div className="cs-gradient_shape" />
      <Div className="container">
        <Div className="flex align-items-center cs-column_reverse_lg">
          <Div className="w-1/2">
            <Div className="cs-section_heading cs-style1">
              <h3 className="cs-section_subtitle">{subtitle}</h3>
              <h2 className="cs-section_title">{title}</h2>
              <span
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <Button btnLink={btnLink} btnText={btnText} />
              </span>
            </Div>
          </Div>
          <Div className="w-[40%] pl-10">
            <Div
              className={
                hovered ? "cs-portfolio_img active" : "cs-portfolio_img"
              }
            >
              <h3 className="cs-portfolio_img_title">{category}</h3>
              <Div className="cs-portfolio_img_in cs-shine_hover_1 cs-radius_5">
                <Image fill src={imageUrl} alt="Portfolio" className="cs-w100" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
