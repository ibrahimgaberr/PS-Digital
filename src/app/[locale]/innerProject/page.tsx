"use client";
import Button from "@/components/Button";
import Div from "@/components/home/Div";
import { motion } from "framer-motion";

const InnerProject = () => {
  return (
    <>
      <Div className="container">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/images/1.jpg"
          alt="Details"
          className="w-full h-[70vh] object-cover mt-[8rem] rounded-tr-[40px] rounded-bl-[40px]"
        />
        <Div className="flex">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-[60%] pr-6"
          >
            <div className="flex flex-col pt-10 mx-auto">
              <div className="w-full">
                <span className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
                  Creative
                </span>
                <h1 className="text-3xl mb-5  font-semibold tracking-wide text-white dark:text-[#001d35] lg:text-4xl">
                  Burger King
                </h1>
              </div>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium voltire doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p>
              Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-[40%] py-10 pl-10"
          >
            <h2 className="text-xl font-semibold tracking-wide text-[#fa9f1c] mb-8">
              Project Info
            </h2>
            <Div className="flex flex-wrap">
              <Div className="w-1/2">
                <h3 className="text-sm font-semibold tracking-wide text-[#fa9f1c]">
                  Category:
                </h3>
                <p className=" mb-2">Artwork</p>
              </Div>
              <Div className="w-1/2">
                <h3 className="text-sm font-semibold tracking-wide text-[#fa9f1c]">
                  Location:
                </h3>
                <p className=" mb-2">United Kindom</p>
              </Div>
              <Div className="w-1/2">
                <h3 className="text-sm font-semibold tracking-wide text-[#fa9f1c]">
                  Software:
                </h3>
                <p className=" mb-2">Adobe Illustrator</p>
              </Div>
              <Div className="w-1/2">
                <h3 className="text-sm font-semibold tracking-wide text-[#fa9f1c]">
                  Dated:
                </h3>
                <p className=" mb-2">14-Aug-2022</p>
              </Div>
              <Div className="col-6">
                <h3 className="text-sm font-semibold tracking-wide text-[#fa9f1c]">
                  Client:
                </h3>
                <p className=" mb-2">Andreo Bowla</p>
              </Div>
            </Div>
          </motion.div>
        </Div>
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/images/2.jpg"
          alt="Details"
          className="w-full h-[80vh] object-cover mt-8 rounded-tr-[40px] rounded-bl-[40px]"
        />
        <Div className="flex gap-5 ">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="/images/2.jpg"
            alt="Details"
            className="w-1/2 h-[70vh] object-cover mt-8 rounded-tr-[40px] rounded-bl-[40px]"
          />
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="/images/4.jpg"
            alt="Details"
            className="w-1/2 h-[70vh] object-cover mt-8 rounded-tr-[40px] rounded-bl-[40px]"
          />
        </Div>
        <Div className="flex">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <div className="flex flex-col pt-10 mx-auto">
              <div className="w-full">
                <span className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
                  Objective
                </span>
                <h1 className="text-3xl mb-5  font-semibold tracking-wide text-white  dark:text-[#001d35] lg:text-4xl">
                  Burger King
                </h1>
              </div>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium voltire doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p>
              Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit.
            </p>
          </motion.div>
        </Div>
        <Div className="flex gap-5 ">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="/images/2.jpg"
            alt="Details"
            className="w-1/2 h-[70vh] object-cover mt-8 rounded-tr-[40px] rounded-bl-[40px]"
          />
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="/images/4.jpg"
            alt="Details"
            className="w-1/2 h-[70vh] object-cover mt-8 rounded-tr-[40px] rounded-bl-[40px]"
          />
        </Div>
        <Div className="cs-page_navigation cs-center mt-20">
          <Div>
            <Button
              btnLink="/portfolio/portfolio-details"
              btnText="Prev Project"
              variant="cs-type1"
            />
          </Div>
          <Div>
            <Button
              btnLink="/portfolio/portfolio-details"
              btnText="Next Project"
            />
          </Div>
        </Div>
      </Div>
      <div className="bg-[#01080f] h-[100px] dark:bg-white"></div>
    </>
  );
};

export default InnerProject;
