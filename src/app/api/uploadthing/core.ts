import { createUploadthing, type FileRouter } from 'uploadthing/next'

const f = createUploadthing()

export const ourFileRouter = {
  /** Single-image upload (no auth check) */
  imageUploader: f({
    image: {
      maxFileSize: '4MB',
      maxFileCount: 1,
    },
  })
    // 👇 we simply skip the middleware / auth guard
    .onUploadComplete(async ({ file }) => {
      // file.url  ← CDN URL
      // If you want to log or persist it, do it here.
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
