import type { FC } from "react";

type Props = {
  title: string;
  updatedAt: string;
};

export const MemoItem: FC<Props> = ({ title, updatedAt }) => {
  return (
    <li className="py-4 px-8 w-11/12 text-left rounded-md border border-gray-300">
      <p className="text-2xl">{title}</p>
      <p className="text-lg">{updatedAt}</p>
    </li>
  );
};
