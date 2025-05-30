import { createRouteHandler } from 'uploadthing/next'
import { ourFileRouter } from './core'

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
})

/** 👈 tell Next.js to run this file in the Node runtime, not Edge */
export const runtime = 'nodejs'
