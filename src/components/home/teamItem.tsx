import Image from "next/image";
import Div from "./Div";
import Link from "next/link";

interface TeamItem {
  memberImage: string;
  memberName: string;
  memberDesignation: string;
}

export default function Team({ memberImage, memberName, memberDesignation }: TeamItem) {
  return (
    <Div className="cs-team cs-style1">
      <Div className="cs-member_thumb !rounded-tr-[40px] !rounded-bl-[40px]">
        <Image
          loading="lazy"
          fill
          className=" !rounded-tr-[40px] !rounded-bl-[40px]"
          src={memberImage}
          alt={memberName}
        />
        <Div className="cs-member_overlay" />
      </Div>
      <Div className="cs-member_info">
        <h2 className="cs-member_name dark:text-white">
          <Link href="#">{memberName}</Link>
        </h2>
        <Div className="cs-member_designation dark:text-white">
          {memberDesignation}
        </Div>
      </Div>
    </Div>
  );
}
