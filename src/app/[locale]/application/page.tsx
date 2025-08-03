import InnerBanner from "@/components/innerBanner";
import Link from "next/link";

const Application = () => {
  return (
    <>
      <InnerBanner />
      <form>
        <div className="container">
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
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
            <div className="sm:col-span-3">
              <label
                htmlFor=" Website Type"
                className="block text-sm font-medium leading-6 text-white"
              >
                Website Type
              </label>
              <div className="mt-2">
                <select
                  id=" Website Type"
                  name=" Website Type"
                  className="block w-full bg-transparent rounded-full border-1 border-gray-500 ring-1 pl-3  pr-3 py-2 text-white shadow-sm  ring-gray-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                >
                  <option className="text-black">E-commerce</option>
                  <option className="text-black">B2B</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor=" Service"
                className="block text-sm font-medium leading-6 text-white"
              >
                Service
              </label>
              <div className="mt-2">
                <select
                  id=" Service"
                  name=" Service"
                  className="block w-full bg-transparent rounded-full border-1 border-gray-500 ring-1 pl-3  pr-3 py-2 text-white shadow-sm  ring-gray-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                >
                  <option className="text-black">Website</option>
                  <option className="text-black">IOS Mobile App</option>
                  <option className="text-black">Android Mobile App</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="Current"
                className="block text-sm font-medium leading-6 text-white"
              >
                Current Website
              </label>
              <div className="mt-2">
                <input
                  placeholder="Enter Current Website"
                  id="Current"
                  name="Current"
                  type="text"
                  className="block w-full bg-transparent rounded-full border-1 border-gray-500 ring-1 pl-3 py-1.5 text-white shadow-sm  ring-gray-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="refrences"
                className="block text-sm font-medium leading-6 text-white"
              >
                Refrences Websites
              </label>
              <div className="mt-2">
                <input
                  placeholder="Enter Refrences Websites"
                  id="refrences"
                  name="refrences"
                  type="text"
                  className="block w-full bg-transparent rounded-full border-1 border-gray-500 ring-1 pl-3 py-1.5 text-white shadow-sm  ring-gray-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
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
      </form>
      <div className="bg-[#01080f] h-[100px] dark:bg-white"></div>
    </>
  );
};

export default Application;
