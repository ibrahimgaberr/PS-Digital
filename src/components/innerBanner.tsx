import Image from "next/image";
import Link from "next/link";

const InnerBanner = () => {
  return (
    <>
      {" "}
      <div className="w-full relative">
        <Image
          fill
          className="w-full h-[60vh] object-cover mb-10"
          src="/images/portfolio_3.jpeg"
          alt="image"
        />
        <div className="absolute top-1/2 flex w-full items-center flex-col gap-5">
          <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-[#001d35] lg:text-4xl">
            About
          </h1>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-white"
                >
                  Home
                </Link>
              </li>

              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-white mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      ke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-[#fa9f1c] md:ml-2">
                    About
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default InnerBanner;
