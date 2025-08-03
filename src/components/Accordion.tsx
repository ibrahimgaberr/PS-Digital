"use client";

import React from "react";
import { useState } from "react";
import Div from "./home/Div";
import Link from "next/link";

export default function Accordion() {
  const [selected, setSelected] = useState<number | null>(0);
  const handelToggle = (index: any) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  const accordionData = [
    {
      question: " SENIOR .NET DEVELOPER",
      answer: (
        <div className="py-1">
          <h2 className="text-base font-semibold leading-7 text-[#fa9f1c] mb-6 border-t pt-8 border-white/10">
            JOB DESCRIPTION
          </h2>
          <p>
            Developer Responsibilities/Duties: Years of experience: 3-5 years.
            Minimum +3 years experience in C# .NET, ASP.NET MVC, Entity
            Framework, LINQ. (Dapper is a plus). Minimum +1 years experience in
            MS SQL Server, T-SQL. Experience in Building Frontends. Intermediate
            programming skills, and (OOP) are required. JQuery, JavaScript,
            HTML5, and Basic CSS. XML, SOAP, JSON, REST, XAML. Basic knowledge
            of website publishing and server management is a plus. Duties:
            Analyzing system requirements and prioritizing tasks. Collaborating
            with internal teams to produce software design and architecture.
            Writing clean, scalable code using .NET programming languages.
            Testing and deploying applications and systems. Revising, updating,
            refactoring, and debugging codes to improve existing software.
            Assist the technical support.
          </p>
          <h2 className="text-base font-semibold leading-7 text-[#fa9f1c] mb-6  pt-8">
            JOB QUALIFICATION
          </h2>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mb-8">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                Push to deploy
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                SSL certificates
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                eget. Sem sodales gravida quam turpis enim lacus amet.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                Simple queues
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
                Lobortis auctor congue commodo diam neque.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                Advanced security
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
                aliquet hac quis. Id hac maecenas ac donec pharetra eget.
              </dd>
            </div>
          </dl>
          <Link
            href="#form"
            className="!py-[18px] my-10 !px-[60px] text-[18px] btn-action style-2"
          >
            Apply Now
          </Link>
        </div>
      ),
    },
    {
      question: "JUNIOR .NET DEVELOPER",
      answer: (
        <div className="py-1">
          <h2 className="text-base font-semibold leading-7 text-[#fa9f1c] mb-6 border-t pt-8 border-white/10">
            JOB QUALIFICATION
          </h2>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mb-8">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                Push to deploy
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                SSL certificates
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                eget. Sem sodales gravida quam turpis enim lacus amet.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                Simple queues
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
                Lobortis auctor congue commodo diam neque.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                Advanced security
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
                aliquet hac quis. Id hac maecenas ac donec pharetra eget.
              </dd>
            </div>
          </dl>
          <Link
            href="#form"
            className="!py-[18px] my-10 !px-[60px] text-[18px] btn-action style-2"
          >
            Apply Now
          </Link>
        </div>
      ),
    },
    {
      question: " APP SUPPORT",
      answer: (
        <div className="py-1">
          <h2 className="text-base font-semibold leading-7 text-[#fa9f1c] mb-6 border-t pt-8 border-white/10">
            JOB QUALIFICATION
          </h2>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mb-8">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                Push to deploy
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                SSL certificates
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                eget. Sem sodales gravida quam turpis enim lacus amet.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                Simple queues
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
                Lobortis auctor congue commodo diam neque.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                Advanced security
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
                aliquet hac quis. Id hac maecenas ac donec pharetra eget.
              </dd>
            </div>
          </dl>
          <Link
            href="#form"
            className="!py-[18px] my-10 !px-[60px] text-[18px] btn-action style-2"
          >
            Apply Now
          </Link>
        </div>
      ),
    },
    {
      question: "  JUNIOR COMMUNITY MANAGER",
      answer: (
        <div className="py-1">
          <h2 className="text-base font-semibold leading-7 text-[#fa9f1c] mb-6 border-t pt-8 border-white/10">
            JOB QUALIFICATION
          </h2>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 mb-8">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                Push to deploy
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                SSL certificates
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                eget. Sem sodales gravida quam turpis enim lacus amet.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                Simple queues
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
                Lobortis auctor congue commodo diam neque.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#001d35]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g>
                      <path
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                        d="M20.614 5.649a1 1 0 0 1 .084 1.422L10.184 18.74a1 1 0 0 1-1.428.058l-6.084-5.727a1.008 1.008 0 0 1-.09-1.36 1.008 1.008 0 0 1 1.455-.126l4.72 4.246a1 1 0 0 0 1.412-.074l9.043-10.027a1 1 0 0 1 1.402-.082z"
                        clip-rule="evenodd"
                        data-original="#000000"
                        className=""
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                Advanced security
              </dt>
              <dd className="mt-2 text-base leading-7 text-white">
                Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
                aliquet hac quis. Id hac maecenas ac donec pharetra eget.
              </dd>
            </div>
          </dl>
          <Link
            href="#form"
            className="!py-[18px] my-10 !px-[60px] text-[18px] btn-action style-2"
          >
            Apply Now
          </Link>
        </div>
      ),
    },
  ];
  
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? "active" : ""}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
