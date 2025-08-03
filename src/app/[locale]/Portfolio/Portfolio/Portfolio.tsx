import Div from "@/components/home/Div";
import Link from "next/link";

export default function PortfolioItem({ href, src, title, subtitle, variant }: { href: string; src: string; title: string; subtitle: string; variant?: string }) {
  return (
    <Link
      href={href}
      className={`cs-portfolio  h-full  object-cover !pb-0 !pt-0 cs-bg ${
        variant ? variant : "cs-style1"
      }`}
    >
      <>
        <Div className="cs-portfolio_hover" />
        <Div
          className="cs-portfolio_bg cs-bg rounded-tr-[40px] rounded-bl-[40px]"
          style={{ backgroundImage: `url("${src}")` }}
        />
        <Div className="cs-portfolio_info">
          <Div className="cs-portfolio_info_bg cs-accent_bg !rounded-full" />
          <h2 className="cs-portfolio_title">{title}</h2>
          <Div className="cs-portfolio_subtitle">{subtitle}</Div>
        </Div>
      </>
    </Link>
  );
}
