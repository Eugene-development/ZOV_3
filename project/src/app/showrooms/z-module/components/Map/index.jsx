import React from 'react'

export default function Map() {
  return (
    <>
    <div className="bg-white py-8 sm:py-20">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Наши салоны</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">В связи с высокой загруженностью дизайнеров просьба предупредить о Вашем визите.</p>
        </div> 
      </div> 

        <div className=" pb-8 bg-gray-50 mx-16 overflow-hidden sm:rounded-lg shadow-xl">
          <div className="px-4 py-4 sm:p-6 ">
              <iframe
                  src="https://yandex.ru/maps/-/CCU0uNWFOC"
                  width="1024"
                  height="600"
                  title="map"
                  frameborder="0"
                  class="mx-auto w-full"
              />
          </div>
         </div>

    </>
  )
}
