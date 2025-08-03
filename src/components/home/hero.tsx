import Link from "next/link";

const Intro = () => {
  return (
    <>
      <header className="bg-white text-[#001d35] dark:bg-black dark:text-white">

        <div className="pt-10">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* <!--Left Col--> */}
            <div className="flex flex-col w-full  justify-center items-center text-center p-10 mx-auto  md:w-11/12 xl:w-9/12">
              <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <span>Start</span>{" "}
                <span className="block w-full py-2 leading-12  lg:inline">
                  building a buzz
                </span>{" "}
                <span>around your product ?</span>
              </h1>
              <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                we specialize in crafting custom digital strategies that drive
                growth, increase revenue, and enhance brand visibility.
              </p>
              <Link href="#" className="btn-action style-2">
                Contact Us
              </Link>
            </div>
            {/* <!--Right Col--> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Intro;
