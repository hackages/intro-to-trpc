import { Event } from '@prisma/client';

import { PrismaClient } from '@prisma/client';
import { events } from '../mock/events';

declare const global: Global & { prisma?: PrismaClient };

export let prisma: PrismaClient;

if (typeof window === 'undefined') {
  if (process.env['NODE_ENV'] === 'production') {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
}



// const eventData = events.map(event => ({title: event.title, description: event.description}))

async function seed(){
    // await Promise.all(
    //     prisma.event.createMany({data: [{title: '', description: ''}]}),
    // );
}

seed()

