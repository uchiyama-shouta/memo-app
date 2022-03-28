import type { VFC } from "react";

type Props = {
  title: string;
  updatedAt: string;
};

export const MemoItem: VFC<Props> = ({ title, updatedAt }) => {
  return (
    <li className="py-3 px-8 mb-3 w-11/12 text-left rounded-md border border-gray-300">
      <p className="text-2xl">{title}</p>
      <p className="text-lg">{updatedAt}</p>
    </li>
  );
};

