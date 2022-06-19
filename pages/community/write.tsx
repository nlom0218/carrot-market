import { NextPage } from "next";
import Layout from "../../components/layout";

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className="px-4 pb-10">
        <textarea
          rows={10}
          placeholder="Ask a question!"
          className="mt-1 w-full resize-none rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 "
        />
        <button className="mt-2 w-full rounded-md border border-transparent bg-orange-500 py-2 px-4 font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Write;
