import Marquee from "react-fast-marquee";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="pb-6 sm:pb-16 overflow-x-hidden">
      <div className="relative text-center">
        <Marquee className="overflow-hidden">
          <h1 className="text-[#fa9f1c] mx-auto text-center text-[180px] sm:leading-[250px] leading-[85px]">
            <span className="heading-bg">
              Our reputed world wide partners Our reputed world wide partners
            </span>
          </h1>
        </Marquee>
      </div>

      <div className="pt-8 pb-10 sm:pt-15">
        <Marquee direction="right" pauseOnHover={true}>
          <Image
            loading="lazy"
            className="invert dark:invert-0 max-h-12 w-full object-contain m-4 fill-white"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <Image
            loading="lazy"
            className="invert dark:invert-0 max-h-12 w-full object-contain m-4"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width="158"
            height="48"
          />
          <Image
            loading="lazy"
            className="invert dark:invert-0 max-h-12 w-full object-contain m-4"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <Image
            loading="lazy"
            className="invert dark:invert-0 max-h-12 w-full object-contain sm:col-start-2 m-4"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <Image
            loading="lazy"
            className="invert dark:invert-0 col-start-2 max-h-12 w-full object-contain sm:col-start-auto m-4"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <Image
            loading="lazy"
            className="invert dark:invert-0 max-h-12 w-full object-contain m-4"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <Image
            loading="lazy"
            className="invert dark:invert-0 max-h-12 w-full object-contain m-4"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width="158"
            height="48"
          />
          <Image
            loading="lazy"
            className="invert dark:invert-0 max-h-12 w-full object-contain m-4"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <Image
            className="invert dark:invert-0 max-h-12 w-full object-contain sm:col-start-2 m-4"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <Image
            loading="lazy"
            className="invert dark:invert-0 col-start-2 max-h-12 w-full object-contain sm:col-start-auto m-4"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
