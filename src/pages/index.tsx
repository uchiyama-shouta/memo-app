import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import { UserButton, useUser } from "@clerk/nextjs";
import { GetMemoQuery } from "type/_generated_/graphql";

const Home: NextPage = () => {
  const { firstName } = useUser();

  const { data, loading, error } = useQuery<GetMemoQuery>(getMemo);

  console.log({ data, loading, error });

  return (
    <div>
      <header className="py-2 px-20 h-12 border-y">
        <UserButton />
      </header>
      <main className="text-3xl text-center text-red-500">
        Hello, {firstName}!
        <div>
          <ul>
            {data?.memo.map((memo) => (
              <li key={memo.id}>{memo.title}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;

const getMemo = gql`
  query getMemo {
    memo {
      id
      title
      content
    }
  }
`;
