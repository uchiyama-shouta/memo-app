import { ChangeEventHandler, useCallback, useEffect, useState } from "react";
import { GetMemoDetailQuery } from "type/_generated_/graphql";

export const useEditMemo = (data: GetMemoDetailQuery | undefined) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (data?.memos_by_pk?.title && data?.memos_by_pk.content) {
      setTitle(data?.memos_by_pk.title);
      setContent(data?.memos_by_pk.content);
    }
  }, [data]);

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [setTitle],
  );

  return {
    title,
    content,
    setTitle,
    setContent,
    handleChangeTitle,
  };
};
