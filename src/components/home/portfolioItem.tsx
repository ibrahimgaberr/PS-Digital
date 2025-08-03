import Link from "next/link";
import Div from "./Div";

export default function Portfolio({ href, src, title, subtitle, variant }: any) {
  return (
    <Link
      href={href}
      className={`cs-portfolio cs-bg ${variant ? variant : "cs-style1"}`}
    >
      <>
        <Div
          className="cs-portfolio_bg cs-bg !rounded-none !rounded-tr-[40px] !rounded-bl-[40px]"
          style={{ backgroundImage: `url("${src}")` }}
        />
        <Div className="cs-portfolio_info">
          <Div className="cs-portfolio_info_bg cs-accent_bg" />
          <h2 className="cs-portfolio_title">{title}</h2>
          <Div className="cs-portfolio_subtitle">{subtitle}</Div>
        </Div>
      </>
    </Link>
  );
}
