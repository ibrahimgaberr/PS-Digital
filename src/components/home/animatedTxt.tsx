import Image from "next/image";

export default function Animation2() {
  return (
    <>
      {/* Image Animation */}
      <div className="animate">
        <Image fill src="/images/hero.png" alt="image" />
        <Image fill src="/images/hero.png" alt="image" />
      </div>

      {/* Image Animation - Reversed direction */}
      <div className="animate-reversed">
        <Image fill src="/images/hero2.png" alt="image" />
        <Image fill src="/images/hero2.png" alt="image" />
      </div>

      {/* Text Animation */}
      <div className="bg-[#332970] w-screen box-border  p-4 flex items-center overflow-hidden fixed bottom-0">
        <div className="animate">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <div className="text-[#139bac] whitespace-nowrap inline-flex items-center justify-center">
              • NEW SITE LAUNCHING SOON&nbsp;
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
