import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@components/layout";

const Chats: NextPage = () => {
  const router = useRouter();
  const onClickChat = () => {
    router.push("/chats/123");
  };
  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <a
              className=" flex cursor-pointer items-center space-x-3 py-3 px-4"
              onClick={onClickChat}
            >
              <div className="h-12 w-12 rounded-full bg-slate-300" />
              <div>
                <p className=" text-gray-700">Steve Jebs</p>
                <p className="text-sm  text-gray-500">
                  See you tomorrow in the corner at 2pm!
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
