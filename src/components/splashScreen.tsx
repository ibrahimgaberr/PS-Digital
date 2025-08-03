const SplashScreen = () => {
  
  return (
    <div className="flex justify-center w-full h-screen items-center z-10 bg-[#01080f]">
      <div className="text-white text-5xl  text-center font-bold capitalize flex flex-row">
        <span className="mt-1">We</span>
        <div className="overflow-hidden h-16">
          <div className="animate-slide">
            <span className="inline-block text-white py-1 px-3 mb-9">
              Create
            </span>
          </div>
          <div>
            <span className="inline-block text-white py-1 px-3 mb-9">
              Shape
            </span>
          </div>
          <div>
            <span className="inline-block text-white py-0 px-3 mb-9">
              Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
