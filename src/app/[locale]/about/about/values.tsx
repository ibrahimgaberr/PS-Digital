import Div from "@/components/home/Div";
import React from "react";
import CountUp from "react-countup";

export default function Values({ variant, title, subtitle, data } : {
  variant?: string;
  title: string;
  subtitle: string;
  data: {
    title: string;
    factNumber: string;
  }[];}) {
  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}` : "cs-funfact_wrap"}>
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <h2 className=" dark:text-white">{title}</h2>
          <p className=" dark:text-white">{subtitle}</p>
        </Div>
      </Div>
      <Div className="cs-funfact_right">
        <Div className="cs-funfacts">
          {data.map((item, index) => (
            <Div className="cs-funfact cs-style1" key={index}>
              <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color  dark:text-white">
                <span />
                <CountUp enableScrollSpy={true} end={+item.factNumber} />
              </Div>
              <Div className="cs-funfact_text">
                <span className="text-[#fa9f1c]">+</span>
                <p className=" dark:text-white">{item.title}</p>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
