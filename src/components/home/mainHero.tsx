import Link from "next/link";

const MainHero = () => {

  return (
    <>
      <section>
        {/* <!-- Jumbotron --> */}
        <div className="relative overflow-hidden h-[100vh] text-right">
          <video
            preload="metadata"
            width={800}
            height={240}
            autoPlay
            loop
            muted
            playsInline
            className="float-right h-screen"
          >
            <source src="/images/bg-v.mp4" type="video/mp4" />
            Your browser does not support the
            <code>video</code> tag.
          </video>
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.5)] bg-fixed">
            <div className="flex h-full items-center justify-start">
              <div className="px-6 text-left text-white md:px-[10rem]">
                <h1
                  className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-8xl"
                >
                  The best offer on the market
                  <span> for your business</span>
                </h1>
                <div>
                  <Link
                    href="/Portfolio"
                    id="header_button"
                    className="hovered_animated_button cursor_hover_zeroed dark:!border-[#001d35]"
                  >
                  <span
                    className="hovered_animated_button_circle"
                    id="header_button_circle"
                  ></span>
                  <div className="header_button_inner_content">
                    <svg width="26" height="28" viewBox="0 0 26 28" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.598 2.51465H5.7557V0.764648H25.258L25.258 21.6932H23.508L23.508 4.10635L2.02413 27.2351L0.741943 26.0441L22.598 2.51465Z"
                        className="fill-white dark:fill-[#001d35]"
                      ></path>
                    </svg>
                    <span className="text-white dark:text-[#001d35]">
                      {" "}
                      View Projects
                    </span>
                  </div>
                  </Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
      {/* <!-- Section: Design Block --> */}
    </>
  );
};

export default MainHero;
