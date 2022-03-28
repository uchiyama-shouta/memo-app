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

  return (
    <div className="py-5 px-3 mx-auto mb-10 w-11/12 rounded-md border border-gray-300">
      <h2 className="mb-7 font-sans text-4xl font-bold">
        {data?.memos_by_pk?.title}
      </h2>
      <div className="prose lg:prose-xl">
        {data?.memos_by_pk?.content}
        <SampleMarkdown />
      </div>
      <div className="fixed right-10 bottom-3">
        <EditButton href={`/${router.query.id}/edit`} />
      </div>
    </div>
  );
};

export default MemoPage;

const SampleMarkdown = () => (
  <>
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
    </a>
  </>
);
const getMemoDetail = gql`
  query getMemoDetail($id: uuid!) {
    memos_by_pk(id: $id) {
      title
      content
      updatedAt
    }
  }
`;
