import { NextPage } from "next";
import { useRouter } from "next/router";
import FloatingButton from "@components/floating-button";
import Layout from "@components/layout";

const Live: NextPage = () => {
  const router = useRouter();
  const onClickLive = () => {
    router.push("/streams/123");
  };
  const onClickCreate = () => {
    router.push("/streams/create");
  };
  return (
    <Layout title="라이브" hasTabBar>
      <div className="space-y-4 divide-y-[1px]">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div
            key={i}
            className="cursor-pointer px-4 pt-4"
            onClick={onClickLive}
          >
            <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
            <h3 className="mt-2 text-xl font-bold text-gray-700">
              Let's try potatos
            </h3>
          </div>
        ))}
        <FloatingButton href="/streams/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Live;
