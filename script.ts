import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //prisma queries
  // await prisma.user.deleteMany();

  // create single user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Aina",
  //     age: 25,
  //     email: "aina@gmail.com",
  //     userPreference: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   // include: {
  //   //   userPreference: true,
  //   // },
  //   select: {
  //     name: true,
  //     userPreference: {
  //       select: { id: true },
  //     },
  //   },
  // });

  // create many users

  // await prisma.user.createMany({
  //   // returns count of 2
  //   data: [
  //     {
  //       name: "Aina",
  //       age: 28,
  //       email: "aina1@gmail.com",
  //     },
  //     {
  //       name: "Aina",
  //       age: 35,
  //       email: "aina2@gmail.com",
  //     },
  //   ],
  // });

  // Find unique

  const users = await prisma.user.findMany({
    where: {
      name: { in: ["Aina", "Kylie"] },
      // name: "Aina",
    },
    // orderBy: {
    //   age: "desc",
    // },
    // take: 2,
    // skip: 1,
  });

  console.log(users);
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
