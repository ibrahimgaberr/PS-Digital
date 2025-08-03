import Div from "@/components/home/Div";
import PortfolioItem from "./Portfolio/Portfolio";
import InnerBanner from "@/components/innerBanner";

interface PortfolioItem {
  title: string;
  subtitle: string;
  href: string;
  src: string;
  category: string;
}

const Portfolio = () => {
  const portfolioData = [
    {
      title: "Colorful Art Work",
      subtitle: "View Project",
      href: "/innerProject",
      src: "/images/portfolio_1.jpeg",
      category: "ui_ux_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "View Project",
      href: "/innerProject",
      src: "/images/portfolio_2.jpeg",
      category: "logo_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "View Project",
      href: "/innerProject",
      src: "/images/portfolio_3.jpeg",
      category: "web_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "View Project",
      href: "/innerProject",
      src: "/images/portfolio_4.jpeg",
      category: "mobile_apps",
    },
    {
      title: "Colorful Art Work",
      subtitle: "View Project",
      href: "/innerProject",
      src: "/images/portfolio_1.jpeg",
      category: "ui_ux_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "View Project",
      href: "/innerProject",
      src: "/images/portfolio_2.jpeg",
      category: "web_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "View Project",
      href: "/innerProject",
      src: "/images/portfolio_3.jpeg",
      category: "ui_ux_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "View Project",
      href: "/innerProject",
      src: "/images/portfolio_4.jpeg",
      category: "logo_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "View Project",
      href: "/innerProject",
      src: "/images/portfolio_1.jpeg",
      category: "web_design",
    },
  ];
  return (
    <>
      <InnerBanner />
      <Div className="max-w-screen-2xl p-20">
        <Div className="flex flex-wrap gap-10">
          {portfolioData.map((item, index) => (
            <Div
              className={`${
                index === 0 ||
                index === 3 ||
                index === 4 ||
                index === 6 ||
                index === 8 ||
                index === 10
                  ? "w-[55%] !pt-0"
                  : "w-[40%] h-96 !pb-0 !pt-0"
              }`}
              key={index}
            >
              <PortfolioItem
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
            </Div>
          ))}
        </Div>
      </Div>
      <div className="bg-[#01080f] h-[100px] dark:bg-white"></div>
    </>
  );
};

export default Portfolio;
