import { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { gql, useQuery } from "@apollo/client";
// import { RichTextEditor } from "@mantine/rte";

import type {
  // ChangeEventHandler,
  ComponentType,
  Dispatch,
  SetStateAction,
} from "react";
import type { NextPage } from "next";
import type { GetMemoDetailQuery } from "type/_generated_/graphql";

type Props = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

const RichTextEditor: ComponentType<Props> = dynamic(
  () => import("@mantine/rte").then((mod) => mod.RichTextEditor) as any,
  { ssr: false },
);

const EditPage: NextPage = () => {
  const router = useRouter();
  const [text, handleOnChange] = useState(sampleMarkdown);
  const {} = useQuery<GetMemoDetailQuery>(getMemoDetail, {
    variables: {
      id: router.query.id,
    },
    fetchPolicy: "cache-and-network",
  });

  return (
    <div className="py-5 px-3 mx-auto w-11/12 rounded-md border border-gray-300">
      <input
        type="text"
        value="タイトルです"
        className="py-3 px-4 mb-8 w-full text-4xl leading-5 rounded-md border border-gray-300"
      />
      <div className="prose lg:prose-xl">
        {/* data?.memos_by_pk?.content */}
        <RichTextEditor value={text} onChange={handleOnChange} />
      </div>
    </div>
  );
};

export default EditPage;

const sampleMarkdown = `
    <h1>見出し1</h1>
    <h2>見出し2</h2>
    <h3>見出し3</h3>
    <h4>見出し4</h4>
    <p>markdownサンプル文章です。ここは地の文です。</p>
    <p>
      markdownでは、箇条書きは*や-などの記号を文頭に置くことで記述します。箇条書きの階層は行頭スペース4つを足します。
    </p>
    <ul>
      <li>これはひとつめの箇条書き</li>
      <li>ふたつめの箇条書き</li>
      <ul>
        <li>一つ階層が深い箇条書き</li>
      </ul>
      <li>みっつめの箇条書き</li>
    </ul>
    <h3>コード 3つのバッククォート記号でくくることで、コード例を示します</h3>
    <pre>
      <code>console.log()</code>
    </pre>
    <a href="http://ja.wikipedia.org/wiki/Markdown">
      http://ja.wikipedia.org/wiki/Markdown
    </a>`;

const getMemoDetail = gql`
  query getMemoDetail($id: uuid!) {
    memos_by_pk(id: $id) {
      title
      content
      updatedAt
    }
  }
`;
