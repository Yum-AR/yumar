import { z } from 'zod';
import { router, publicProcedure } from "../trpc";

export const restaurantRouter = router({
    getRestaurant: publicProcedure.input(z.object({ isApproved: z.boolean(), restaurantId: z.string().optional() })).query(({ input, ctx }) => {
        let where = {};
        if (input.restaurantId) {
            where = {
                isApproved: input.isApproved,
                restaurantId: parseInt(input.restaurantId),
            }
        } else {
            where = {
                isApproved: input.isApproved
            }
        }

        return ctx.prisma.restaurant.findMany({
            where,
            include: {
                RestaurantAddress: true,
                RestaurantInformation: true,
                RestaurantSettings: true,
                MenuItems: true,
            }
        })
    })
})