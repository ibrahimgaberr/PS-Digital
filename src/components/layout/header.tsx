import Image from "next/image";
import ToggleThemeMode from "../ToggleThemeMode";
import Link from "next/link";

const Header = () => {
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8 w-full absolute z-10"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <Image className="" src="/images/logo-w.png" alt="logo" width={100} height={1} />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <Link
          href="/about"
          className="font-semibold leading-6 text-[#fff]  dark:text-[#001d35]"
        >
          About
        </Link>
        <Link
          href="/services"
          className="font-semibold leading-6 text-[#fff] dark:text-[#001d35]"
        >
          Services
        </Link>
        <Link
          href="/Portfolio"
          className="font-semibold leading-6 text-[#fff] dark:text-[#001d35]"
        >
          Our Work
        </Link>
        <Link
          href="/Portfolio"
          className="font-semibold leading-6 text-[#fff] dark:text-[#001d35]"
        >
          Success Stories
        </Link>
        <Link
          href="/contact"
          className="font-semibold leading-6 text-[#fff] dark:text-[#001d35]"
        >
          Contact Us
        </Link>
      </div>
      <div className="">
        <Link className="cs-text_btn" href="">
          Let's talk
        </Link>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <ToggleThemeMode />
      </div>
    </nav>
  );
};

export default Header;
