import { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack title="Edit Profile">
      <form className="space-y-4 px-4 pb-10">
        <div className=" flex items-center space-x-3">
          <div className="h-14 w-14 rounded-full bg-slate-500" />
          <div>
            <label
              htmlFor="picture"
              className=" cursor-pointer rounded-md border border-gray-300 py-2 px-3 text-sm font-medium text-gray-700 shadow-sm focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Change
              <input
                type="file"
                className=" hidden"
                id="picture"
                accept="image/*"
              />
            </label>
          </div>
        </div>
        <Input
          label="Email address"
          name="email"
          kind="text"
          type="email"
          required
        />
        <Input
          label="Phone number"
          kind="phone"
          type="number"
          required
          name="phone"
        />
        <Button text="Update profile" />
      </form>
    </Layout>
  );
};

export default EditProfile;
