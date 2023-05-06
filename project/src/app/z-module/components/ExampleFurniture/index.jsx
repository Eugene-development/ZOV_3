
export default function ExampleFurniture() {
  return (
    <>
    
  <div className="bg-gray-50">
      <div className="mx-auto max-w-full py-16 px-8 sm:py-24 sm:px-16 lg:px-24">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Мы производим мебель</h2>
          <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">Предлагаем мебель трёх основных направлений: кухонные гарнитуры, гардеробные шкафы и шкафы купе.</p>
      </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="https://zovrus.ru/files/_cache/product/a4-mat-akril.resize1200x1200w.png?95461fcf11bd7e19632aaa9bde5229f3"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover object-center group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white text-2xl">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Шкафы и гардеробы
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              src="https://zovrus.ru/files/_cache/product/chr-1046_2.resize1200x1200w.jpg?8a9ec4c73c7d199741f9a9837334bb3e"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white text-2xl">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Кухонные гарнитуры
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              src="https://millarti.ru/wp-content/uploads/2023/01/1-8-1.png"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white text-2xl">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Шкафы купе
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>


  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Разнообразие цветов и оттенков</h2>
        <p class="font-light text-gray-500 sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">Вы обязательно найдёте подходящий цвет под ваш интерьер из более чем 2000 вариантов. От нежных пастельных тонов до ярких цветовых решений. </p>
        <div class="gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12">
            <img class="col-span-2 mb-4 sm:mb-0 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png" alt="content gallery 1"/>
            <img class="hidden col-span-1 sm:block rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-2.png" alt="content gallery 2"/>
            <img class="hidden col-span-1 sm:block rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="content gallery 3"/>
            <img class="hidden col-span-1 sm:block rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-4.png" alt="content gallery 4"/>
            <img class="col-span-2 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-5.png" alt="content gallery 5"/>
            <img class="hidden col-span-1 sm:block rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-6.png" alt="content gallery 6"/>
        </div>
    </div>
  </section>





    </>
  )
}
