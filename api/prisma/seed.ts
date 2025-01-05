import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 初期データを挿入
  const users = [
    { email: "user1@example.com", name: "Alice" },
    { email: "user2@example.com", name: "Bob" },
    { email: "user3@example.com", name: null }, // 名前がnullの場合
  ];

  // 既存データがあれば削除（任意）
  await prisma.user.deleteMany(); // 全削除（開発環境向け）

  // データを挿入
  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  await prisma.beer.create({
    data: {
      name: "IPA",
      brewery: "Craft Brewery",
      beerStyle: "IPA",
      alcohol: "6.5%",
      location: "Tokyo",
      purchasePlace: "Local Store",
      date: new Date(),
      memo: "Great aroma and taste!",
      pairings: ["Spicy Wings", "Cheese Platter"], // 配列として保存
    },
  });

  console.log("Seed data has been inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    // process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
