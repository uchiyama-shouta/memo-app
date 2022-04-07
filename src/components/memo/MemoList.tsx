import type { VFC } from "react";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import dayjs from "dayjs";

import type { GetMemoQuery } from "type/_generated_/graphql";
import { MemoItem } from "components/memo/MemoItem";
import { MemoSkelton } from "components/memo/MemoSkelton";

export const MemoList: VFC = () => {
  const { data, loading } = useQuery<GetMemoQuery>(getMemo);

  return (
    <ul className="flex flex-col items-center w-full">
      {loading ? (
        <>
          <MemoSkelton />
          <MemoSkelton />
          <MemoSkelton />
        </>
      ) : (
        data?.memos.map(({ id, title, updatedAt }) => (
          <Link href={`/${id}`} key={id} prefetch={false}>
            <a className="flex flex-col items-center w-full">
              <MemoItem
                title={title}
                updatedAt={dayjs(updatedAt).format("YYYY/MM/DD")}
              />
            </a>
          </Link>
        ))
      )}
    </ul>
  );
};

const getMemo = gql`
  query getMemo {
    memos {
      id
      title
      updatedAt
    }
  }
`;
