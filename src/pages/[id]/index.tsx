import { gql, useQuery } from "@apollo/client";
import { EditButton } from "components/Edit/EditButton";
import { useRouter } from "next/router";
import { GetMemoDetailQuery } from "type/_generated_/graphql";

const MemoPage = () => {
  const router = useRouter();
  const { data } = useQuery<GetMemoDetailQuery>(getMemoDetail, {
    variables: {
      id: router.query.id,
    },
  });

  const content = data?.memos_by_pk?.content || "";

  return (
    <div className="py-5 px-3 mx-auto mb-10 w-11/12 rounded-md border border-gray-300">
      <h2 className="mb-7 font-sans text-4xl font-bold">
        {data?.memos_by_pk?.title}
      </h2>
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      <div className="fixed right-10 bottom-3">
        <EditButton href={`/${router.query.id}/edit`} />
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
