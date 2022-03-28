import type { NextPage } from "next";

import { MemoList } from "components/memo/MemoList";

const Home: NextPage = () => {
  return (
    <div className="pt-3">
      <MemoList />
    </div>
  );
};

export default Home;
