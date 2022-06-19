import { NextPage } from "next";
import Button from "../../components/button";
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
        <Button text="Submit" />
      </form>
    </Layout>
  );
};

export default Write;
