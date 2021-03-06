import { NextPage } from "next";
import Layout from "@components/layout";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Product, User } from "@prisma/client";
import Link from "next/link";

interface IProduct {
  user: User;
}

interface ProductProps {
  ok: boolean;
  product: Product & IProduct;
}

const ItemDetail: NextPage = () => {
  const router = useRouter();
  const { data } = useSWR<ProductProps>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );

  return (
    <Layout title="Item" canGoBack>
      {data ? (
        <div className="px-4 pb-10">
          <div className="mb-8">
            <div className="h-96 bg-slate-300" />
            <div className=" flex cursor-pointer items-center space-x-3 border-t border-b py-3">
              <div className="h-12 w-12 rounded-full bg-slate-300" />
              <div>
                <p className=" text-sm font-medium text-gray-700">
                  {data?.product?.user?.name}
                </p>
                <Link href={`/users/profiles/${data?.product?.userId}`}>
                  <a className="text-xs font-medium text-gray-500">
                    View profile &rarr;
                  </a>
                </Link>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-2xl font-bold text-gray-900">
                {data?.product?.name}
              </h1>
              <span className="mt-3 block text-3xl text-gray-900">
                ${data?.product?.price}
              </span>
              <p className="my-6 text-base text-gray-600">
                {data?.product?.description}
              </p>
              <div className="flex items-center justify-between space-x-2">
                <button className="flex-1 rounded-md bg-orange-500 py-3 font-medium text-white shadow-md transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  Talk to seller
                </button>
                <button className="flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <svg
                    className="h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div key={i}>
                  <div className="mb-4 h-56 w-full bg-slate-300" />
                  <h3 className=" -mb-1 text-gray-700">Galaxy S60</h3>
                  <span className="text-sm font-medium text-gray-900">$6</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};

export default ItemDetail;
