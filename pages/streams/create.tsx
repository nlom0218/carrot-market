import { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";

const CreateStream: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className="space-y-4 px-4 pb-16">
        <Input required label="Name" name="name" type="text" kind="text" />
        <Input
          required
          label="Price"
          type="number"
          kind="price"
          placeholder="0.00"
          name="price"
        />
        <div>
          <label
            className=" mb-1 block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>

          <textarea
            id="description"
            rows={10}
            className="mt-1 w-full resize-none rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500 "
          />
        </div>
        <Button text="Go live" />
      </form>
    </Layout>
  );
};

export default CreateStream;
