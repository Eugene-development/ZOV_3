export default function Catalog() {
  return (
    <div className="bg-white py-4 sm:py-6">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-5 ">
          <div className="bg-slate-900 p-4 sm:p-6 ">
            <img
              className="max-h-12 w-full object-contain transition ease-in-out hover:scale-110"
              src="https://zovrus.ru/design/zovrus/images/menu/icon2.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center pt-2">Кухонные гарнитуры</p>
          </div>
          <div className="bg-slate-900 p-4 sm:p-6 ">
            <img
              className="max-h-12 w-full object-contain transition ease-in-out hover:scale-110"
              src="https://zovrus.ru/design/zovrus/images/menu/icon2.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center pt-2">Корпусные шкафы</p>
          </div>
          <div className="bg-slate-900 p-4 sm:p-6 ">
            <img
              className="max-h-12 w-full object-contain transition ease-in-out hover:scale-110"
              src="https://zovrus.ru/design/zovrus/images/menu/icon2.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center pt-2">Обеденные группы</p>
          </div>
          <div className="bg-slate-900 p-4 sm:p-6 ">
            <img
              className="max-h-12 w-full object-contain transition ease-in-out hover:scale-110"
              src="https://zovrus.ru/design/zovrus/images/menu/icon2.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center pt-2">Бытовая техника</p>
          </div>
          <div className="bg-slate-900 p-4 sm:p-6 ">
            <img
              className="max-h-12 w-full object-contain transition ease-in-out hover:scale-110"
              src="https://zovrus.ru/design/zovrus/images/menu/icon2.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center pt-2">Распродажа по дисконту</p>
          </div>
        </div>
      </div>
    </div>
  )
}
