import { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const CreateStream: NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
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
        <TextArea name="description" label="Description" />
        <Button text="Go live" />
      </form>
    </Layout>
  );
};

export default CreateStream;
