import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const restaurantRouter = router({
  getRestaurants: publicProcedure.input(z.object({
    isApproved: z.boolean(), restaurantId: z.string().optional(),
  })).query(({ input, ctx }) => ctx.prisma.restaurant.findMany({
    where: {
      isApproved: input.isApproved,
    },
    include: {
      RestaurantAddress: true,
      RestaurantInformation: true,
      RestaurantSettings: true,
      MenuItems: true,
    },
  })),
  getRestaurant: publicProcedure.input(z.object({
    restaurantId: z.number(),
  })).query(({ input, ctx }) => ctx.prisma.restaurant.findUnique({
    where: {
      restaurantId: input.restaurantId,
    },
    include: {
      RestaurantAddress: true,
      RestaurantInformation: true,
      RestaurantSettings: true,
      MenuItems: true,
    },
  })),
  searchRestaurant: publicProcedure.input(z.object({ query: z.string() })).query(({ input, ctx }) =>
    ctx.prisma.restaurant.findMany({
      where: {
        restaurantName: {
          search: input.query,
        },
      },
      include: {
        RestaurantAddress: true,
        RestaurantInformation: true,
        RestaurantSettings: true,
      },
    })),
});
