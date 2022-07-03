import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { email, phone },
  } = req;

  const payload = phone ? { phone: +phone } : { email };

  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
  });

  // if (email) {
  //   user = await client.user.findUnique({
  //     where: { email },
  //   });
  //   if (user) {
  //     console.log("found it");
  //   }
  //   if (!user) {
  //     console.log("Did not find. Create user");
  //     user = await client.user.create({
  //       data: {
  //         name: "Anonymous",
  //         email,
  //       },
  //     });
  //   }
  // }
  // if (phone) {
  //   console.log(phone);

  //   user = await client.user.findUnique({
  //     where: { phone: +phone },
  //   });
  //   if (user) {
  //     console.log("found it");
  //   }
  //   if (!user) {
  //     console.log("Did not find. Create user");
  //     user = await client.user.create({
  //       data: {
  //         name: "Anonymous",
  //         phone: +phone,
  //       },
  //     });
  //   }
  // }
  console.log(user);

  res.json({ ok: true, data: "dsjldfjs" });
  res.status(200).end();
}

export default withHandler("POST", handler);
