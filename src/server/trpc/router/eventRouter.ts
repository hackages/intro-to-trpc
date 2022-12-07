import { publicProcedure, router } from "../trpc";
import {z} from 'zod'

export const eventRouter = router({
    all: publicProcedure.query(({ctx}) => {
        return ctx.prisma.event.findMany();
    }),
    search: publicProcedure.input(z.object({term: z.string()})).mutation(({ctx, input}) => {
        return ctx.prisma.event.findMany({
            where: {
                title: {
                    contains: input.term,
                    mode: 'insensitive',
                },
                
            },
        });
    })
});
