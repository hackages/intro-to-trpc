import { router } from "../trpc";
import { bookRouter } from "./eventRouter";

export const appRouter = router({
  books: bookRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
