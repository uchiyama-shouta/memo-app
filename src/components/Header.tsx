import { FC } from "react";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <header className="py-2 px-10 mb-3 h-12 border-b border-gray-300">
      <div className="flex justify-between items-center xl:mx-auto w-auto  xl:w-3/5 ">
        <Link href="/" prefetch={false}>
          <a>
            <h1 className="text-xl font-bold tracking-wider">Shou-Memo</h1>
          </a>
        </Link>
        <UserButton />
      </div>
    </header>
  );
};
