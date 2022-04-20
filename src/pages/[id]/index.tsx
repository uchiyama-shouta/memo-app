import { lazy, Suspense } from "react";
import type { NextPage } from "next";

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GetMemoDetailQuery } from "type/_generated_/graphql";

const EditButton = lazy(() => import("components/Button/EditButton"));

const MemoPage: NextPage = () => {
  const router = useRouter();
  const { data } = useQuery<GetMemoDetailQuery>(getMemoDetail, {
    variables: {
      id: router.query.id,
    },
  });

  const content = data?.memos_by_pk?.content || "";

  return (
    <div className="py-5 px-3 mx-auto xl:mx-auto mb-10 w-11/12 xl:w-3/5 rounded-md border border-gray-300">
      <h2 className="mb-7 font-sans text-4xl font-bold">
        {data?.memos_by_pk?.title}
      </h2>
      <div
        className="prose lg:prose-lg"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      <div className="fixed right-10 xl:right-40 bottom-3 ">
        <Suspense fallback={null}>
          <EditButton href={`/${router.query.id}/edit`} />
        </Suspense>
      </div>
    </div>
  );
};

export default MemoPage;

const getMemoDetail = gql`
  query getMemoDetail($id: uuid!) {
    memos_by_pk(id: $id) {
      title
      content
      updatedAt
    }
  }
`;
