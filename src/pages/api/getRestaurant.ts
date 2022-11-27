import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log(req, `request`);
  const restaurantItems = await prisma.restaurant.findMany({
    include: {
      RestaurantAddress: true,
      RestaurantInformation: true,
      RestaurantSettings: true,
      MenuItems: true,
    },
  });
  res.json(restaurantItems);
}
