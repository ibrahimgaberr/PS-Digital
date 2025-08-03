import Accordion from "@/components/Accordion";
import InnerBanner from "@/components/innerBanner";
import Link from "next/link";

const Careers = () => {
  return (
    <>
      <InnerBanner />
      <form>
        <div className="space-y-12 container">
          <div className="flex flex-col py-10 mx-auto">
            <div className="w-full">
              <span className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
                We Are Here
              </span>
              <h1 className="text-3xl mb-5  font-semibold tracking-wide text-white dark:text-white lg:text-4xl">
                To Help You Start A New Project!
              </h1>
              <p>
                Let`s start from scratch! Briefly describe your needs so that we
                can be of help and start a creative discussion.
              </p>
            </div>
          </div>

          <div className=" pb-12">
            <h2 className="text-base mb-10 font-semibold leading-7 text-[#fa9f1c]">
              SELECT YOUR POSITION
            </h2>
            <Accordion />
          </div>
          <div className=" w-full pt-6 lg:w-1/2">
            <span className="text-xl font-semibold tracking-wide text-[#fa9f1c] animate-fade-up animate-delay-[1.5s]">
              Fill the form
            </span>
            <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-[#001d35] lg:text-4xl animate-fade-up animate-delay-[2s]">
              Apply and fill the form
            </h1>
          </div>
          <div
            id="form"
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
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
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
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
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
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
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-white"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full bg-transparent rounded-full border-1 border-gray-500 ring-1 pl-3  pr-3 py-2 text-white shadow-sm  ring-gray-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                >
                  <option className="text-black">Egypt</option>
                  <option className="text-black">UAE</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex">
            <div className="extraOutline p-4 bg-whtie m-auto rounded-lg w-full">
              <div className="file_upload p-5 relative border-4 border-dotted border-gray-600 rounded-lg w-full">
                <svg
                  className="text-white w-24 mx-auto mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <div className="input_field flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      multiple
                    />
                    <div className="text  text-white  font-semibold cursor-pointer p-1 px-3 btn-action">
                      Upload Your CV
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <Link
            href=""
            className="!py-[18px] my-10 !px-[60px] text-[18px] btn-action style-2"
          >
            Send
          </Link>
        </div>
        <div className="bg-[#01080f] h-[100px] dark:bg-white"></div>
      </form>
    </>
  );
};

export default Careers;
