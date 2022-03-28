import { VFC } from "react";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Header: VFC = () => {
  return (
    <header className="flex justify-between items-center py-2 px-10 mb-3 h-12 border-b border-gray-300">
      <Link href="/" prefetch={false}>
        <a>
          <h1 className="text-xl font-bold tracking-wider">Shou-Memo</h1>
        </a>
      </Link>
      <UserButton />
    </header>
  );
};
