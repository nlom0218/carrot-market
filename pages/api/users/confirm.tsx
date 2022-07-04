import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { token },
  } = req;

  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
  });

  if (!exists) res.status(404).end();

  req.session.user = {
    id: exists?.userId,
  };
  await req.session.save();

  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrotsession",
  password:
    "sdsdfsdfs3d2f1s31df23s1df3s1df23sd1f23s1df23s1fd231s2df1s32d1f32s1df3213s2f",
});
