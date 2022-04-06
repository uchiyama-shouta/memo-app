import type { VFC } from "react";
import Link from "next/link";
import { MdModeEdit } from "react-icons/md";

// Types
type Tag = "button" | "a";

type Props = {
  tag?: Tag;
  onClick?: () => void;
  href?: string;
};

export const EditButton: VFC<Props> = ({
  href,
  tag = "a",
  onClick: handleClick,
}) => {
  if (tag === "button") {
    return (
      <div className="inline-block p-3 bg-sky-500 rounded-full">
        <MdModeEdit size={30} color="white" onClick={handleClick} />
      </div>
    );
  }
  return (
    <div className="inline-block p-3 bg-sky-500 rounded-full">
      <Link href={href ? href : ""}>
        <a>
          <MdModeEdit size={30} color="white" />
        </a>
      </Link>
    </div>
  );
};
