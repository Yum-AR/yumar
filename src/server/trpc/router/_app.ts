import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { restaurantRouter } from "./restaurantRouter";

export const appRouter = router({
  example: exampleRouter,
  restaurant: restaurantRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
