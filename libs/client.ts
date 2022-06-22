import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

client.user.create({
  data: {
    email: "nlom02182@naver.com",
    name: "khd",
  },
});
