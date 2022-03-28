import type { VFC } from "react";
import Link from "next/link";
import { MdModeEdit } from "react-icons/md";

type Props = {
  href: string;
};

export const EditButton: VFC<Props> = ({ href }) => {
  return (
    <div className="inline-block p-3 bg-sky-500 rounded-full">
      <Link href={href}>
        <a>
          <MdModeEdit size={30} color="white" />
        </a>
      </Link>
    </div>
  );
};
