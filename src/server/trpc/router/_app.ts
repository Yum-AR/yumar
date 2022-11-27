import { router } from '../trpc';
import { authRouter } from './auth';
import { restaurantRouter } from './restaurantRouter';

export const appRouter = router({
  restaurant: restaurantRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
