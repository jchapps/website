import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const test = await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "An Interesting Title",
      content: {
        create: {
          index: 1,
          text: "wow amazing text on content",
        },
      },
    },
  });
  console.log({ test });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
