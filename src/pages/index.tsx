import type { NextPage } from "next";
import { useRouter } from "next/router";

import { MemoList } from "components/memo/MemoList";
import { EditButton } from "components/Button/EditButton";
import { gql, useMutation } from "@apollo/client";

import type { InsertMemoMutation } from "type/_generated_/graphql";

const Home: NextPage = () => {
  const [create] = useMutation<InsertMemoMutation>(insertMemo);
  const router = useRouter();

  const handleClick = () => {
    create({
      onCompleted: (data) => {
        const id = data?.insert_memos_one?.id;
        console.log(id);
        router.push(`/${id}/edit`);
      },
    });
  };

  return (
    <div className="pt-3">
      <MemoList />
      <div className="fixed right-10 bottom-3">
        <EditButton tag="button" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Home;

const insertMemo = gql`
  mutation insertMemo {
    insert_memos_one(object: { title: "", content: "" }) {
      id
    }
  }
`;
