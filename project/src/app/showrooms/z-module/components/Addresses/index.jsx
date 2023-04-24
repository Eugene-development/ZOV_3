import Image from "next/image"
import Link from "next/link"
export default function Addresses() {
  return (
    <aside aria-label="Related articles" className="bg-white dark:bg-gray-900 py-8 lg:py-24">
  <div className="px-4 mx-auto max-w-screen-xl">
      <h2 className="mb-6 lg:mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
      <div className="grid gap-6 lg:gap-12 md:grid-cols-2">
          <article className="flex flex-col xl:flex-row">
              <a href="#" className="mb-2 xl:mb-0">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mr-5 max-w-sm" alt="Image 2"></img>
              </a>
              <div className="flex flex-col justify-center">
                  <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <a href="#">Enterprise design tips</a>
                  </h2>
                  <p className="mb-4 font-light text-gray-500 dark:text-gray-400 max-w-sm">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                  <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                      Read in 12 minutes
                  </a>
              </div>
          </article>
      </div>
  </div>
</aside>
  )
}
