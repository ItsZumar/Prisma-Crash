import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //prisma queries

  //create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "John Smith",
  //       email: "johnsmith@gmail.com",
  //     },
  //   });

  //find first user
  //   const user1 = await prisma.user.findFirst();

  //find many users
  //   const users = await prisma.user.findMany();

  //Create article and associate with user
  //   const article1 = await prisma.article.create({
  //     data: {
  //       title: "John Smith Second Article",
  //       body: "This is john smith's sec article",
  //       author: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });

  const articles = await prisma.article.findMany();

  //create user and article at the same time

  //   const userWithArticle = await prisma.user.create({
  //     data: {
  //       name: "sara smith",
  //       email: "sara@gmail.com",
  //       articles: {
  //         create: {
  //           title: "Article",
  //           body: "Sara's first article",
  //         },
  //       },
  //     },
  //   });

  //   const user = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "Mr Junior",
  //     },
  //   });

  //   const users = await prisma.user.findMany({
  //     include: {
  //       articles: true,
  //     },
  //   });

  //   users.forEach((user) => {
  //     console.log(`User: ${user.name}, Email: ${user.email}`);
  //     console.log("Articles: ");
  //     user.articles.forEach((article) => {
  //       console.log(` - Title: ${article.title}, Body: ${article.body}`);
  //     });
  //   });

  // Delete article
  //   const article = await prisma.article.delete({
  //     where: {
  //       id: 2,
  //     },
  //   });

  console.log(articles);
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
