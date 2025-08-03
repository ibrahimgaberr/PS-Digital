"use client";
import Div from "@/components/home/Div";
import ContactInfoWidget from "./contact/callInfo";
import { motion } from "framer-motion";
import InnerBanner from "@/components/innerBanner";
import { Link } from "lucide-react";

const Contact = () => {
  return (
    <>
      <InnerBanner />
      <Div className="container">
        <Div className="flex">
          <Div className="w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className=" w-full pt-6 mb-10"
            >
              <span className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
                Getting Touch
              </span>
              <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-[#001d35] lg:text-4xl">
                Do you have a project <br /> in your mind?
              </h1>
            </motion.div>
            <ContactInfoWidget withIcon />
          </Div>
          <Div className="w-1/2 pt-6">
            <span className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
              Fill the form to Contact Us
            </span>

            <form
              id="form"
              className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="sm:col-span-3"
              >
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-white dark:text-[#001d35]"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    placeholder="Enter Your Name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full bg-transparent rounded-full border-1 border-gray-500 ring-1 pl-3 py-1.5 text-white shadow-sm  ring-gray-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="sm:col-span-3"
              >
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-white dark:text-[#001d35]"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    placeholder="Enter Your Phone Number"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full bg-transparent rounded-full border-1 border-gray-500 ring-1 pl-3 py-1.5 text-white shadow-sm  ring-gray-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="sm:col-span-6"
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white dark:text-[#001d35]"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Enter Your Email Address"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full bg-transparent rounded-full border-1 border-gray-500 ring-1 pl-3 py-1.5 text-white shadow-sm  ring-gray-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="sm:col-span-6"
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white dark:text-[#001d35]"
                >
                  Project Description
                </label>
                <div className="mt-2">
                  <textarea
                    placeholder="Project Description"
                    id="Description"
                    name="Description"
                    className="block w-full h-40 bg-transparent rounded-[40px] border-1 border-gray-500 ring-1 pl-4 py-3 text-white shadow-sm  ring-gray-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
                <Link
                  href="/"
                  className="!py-[18px] !px-[60px] text-[20px] btn-action style-2 mt-10"
                >
                  Submit
                </Link>
              </motion.div>
            </form>
          </Div>
        </Div>
      </Div>
      <Div className="cs-google_map mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </Div>
    </>
  );
};

export default Contact;
