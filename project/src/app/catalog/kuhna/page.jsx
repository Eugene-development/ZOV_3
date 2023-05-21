import Filter from "./z-module/components/Filter/index"

export default function Kuhna() {
  return (
    <>
        {/* <Filter/> */}
        <section class="bg-white dark:bg-gray-900 antialiased">
          <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-10 ">

            <div class="grid grid-cols-1 gap-4 mt-8 lg:mt-16 sm:grid-cols-2 md:grid-cols-3">
              <div class="relative overflow-hidden rounded-lg group">
                <img class="object-cover w-full h-[240px]  scale-100 ease-in duration-300 group-hover:scale-125" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-1.png" alt=""/>
                <div class="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                  <div class="text-center">
                    <button class="text-xl font-bold text-white">
                      Подробнее
                    </button>
                    {/* <p class="text-base font-medium text-gray-300">
                      МИ1501
                    </p> */}
                  </div>
                </div>
              </div>


            </div>

            <div class="max-w-3xl p-4 mx-auto mt-8 rounded-md lg:mt-16 bg-gray-50 dark:bg-gray-800">
              <div class="flex flex-col justify-between gap-3 md:gap-6 md:items-center md:flex-row">
                <div class="flex items-center gap-1.5">
                  <span class="text-base font-normal text-gray-700 dark:text-gray-400">
                    <span class="font-semibold">
                      Вы можете вызвать замерщика. Это бесплатно.
                    </span>
                  </span>
                </div>

                <a href="#" title=""
                  class="inline-flex items-center text-base font-medium text-red-600 hover:underline dark:text-red-500">
                  Записаться на замер
                  <svg aria-hidden="true" class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
