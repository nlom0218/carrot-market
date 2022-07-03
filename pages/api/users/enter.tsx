import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { email, phone },
  } = req;

  const user = phone ? { phone: +phone } : { email };
  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  console.log(token);

  res.json({ ok: true, data: "dsjldfjs" });
  res.status(200).end();
}

export default withHandler("POST", handler);
