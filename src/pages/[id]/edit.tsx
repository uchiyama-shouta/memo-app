import { useRouter } from "next/router";

import { gql, useQuery } from "@apollo/client";

import type { NextPage } from "next";
import type { GetMemoDetailQuery } from "type/_generated_/graphql";

import { RichTextEditor } from "components/Edit/RichText";
import { useMutationMemo } from "hooks/useMutationMemo";
import { useEditMemo } from "hooks/useEditMemo";
import { option } from "lib/richTextEditerOption";

const EditPage: NextPage = () => {
  const router = useRouter();
  const { data, refetch } = useQuery<GetMemoDetailQuery>(getMemoDetail, {
    variables: {
      id: router.query.id,
    },
  });

  const { update, deleteFunc } = useMutationMemo();

  const {
    title,
    content,
    setTitle,
    setContent: handleOnChangeContent,
    handleChangeTitle,
  } = useEditMemo(data);

  const handleDelete = () => {
    if (confirm("本当に削除しますか？")) {
      deleteFunc({
        variables: {
          id: router.query.id,
        },
        onCompleted: () => router.push("/"),
      });
    }
  };
  const handleReset = () => {
    if (confirm("リセットしますか？")) {
      if (data?.memos_by_pk?.title && data.memos_by_pk.content) {
        setTitle(data?.memos_by_pk?.title);
        handleOnChangeContent(data?.memos_by_pk?.content);
      }
    }
  };

  const handleUpdate = () => {
    if (
      title === data?.memos_by_pk?.title &&
      content === data.memos_by_pk.content
    ) {
      console.error("変更がありません");
      return;
    }
    update({
      variables: {
        id: router.query.id,
        title: title,
        content: content,
      },
      onCompleted() {
        refetch();
      },
    });
  };

  return (
    <div className="py-5 px-3 mx-auto xl:mx-auto w-11/12 xl:w-3/5 rounded-md border border-gray-300">
      <input
        type="text"
        value={title}
        onChange={handleChangeTitle}
        className="py-3 px-4 mb-8 w-full text-4xl leading-5 rounded-md border border-gray-300"
      />
      <div className="xl:mx-auto mb-6 w-full prose lg:prose-xl">
        <RichTextEditor
          value={content}
          onChange={handleOnChangeContent}
          controls={option}
          classNames={{
            root: "w-full m-0",
          }}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="py-3 px-4 mr-5 text-white bg-red-500 rounded-md"
          onClick={handleDelete}
        >
          削除
        </button>
        <button
          className="py-3 px-4 mr-5 text-white bg-orange-400 rounded-md"
          onClick={handleReset}
        >
          リセット
        </button>
        <button
          className="py-3 px-4 text-white bg-sky-500 rounded-md"
          onClick={handleUpdate}
        >
          更新
        </button>
      </div>
    </div>
  );
};

export default EditPage;

const getMemoDetail = gql`
  query getMemoDetail($id: uuid!) {
    memos_by_pk(id: $id) {
      title
      content
      updatedAt
    }
  }
`;
