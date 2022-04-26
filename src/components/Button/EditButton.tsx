import type { FC } from "react";
import Link from "next/link";
import { MdModeEdit } from "react-icons/md";

// Types
type Tag = "button" | "a";

type Props = {
  tag?: Tag;
  onClick?: () => void;
  href?: string;
};

const EditButton: FC<Props> = ({ href, tag = "a", onClick: handleClick }) => {
  if (tag === "button") {
    return (
      <div className="inline-block p-3 bg-sky-500 rounded-full hover:cursor-pointer">
        <MdModeEdit size={30} color="white" onClick={handleClick} />
      </div>
    );
  }
  return (
    <div className="inline-block p-3 bg-sky-500 rounded-full hover:cursor-pointer">
      <Link href={href ? href : ""} prefetch={false}>
        <a>
          <MdModeEdit size={30} color="white" />
        </a>
      </Link>
    </div>
  );
};

export default EditButton;
