import Image from 'next/image'

export default function Catalog() {
  return (
    <>
    <div className="bg-slate-50 pb-2 sm:pb-4 px-4">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl lg:grid-cols-6 ">
          <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 hover:from-slate-900 hover:via-slate-800 hover:to-slate-900 p-3 sm:p-5">
            <Image
              className="max-h-10 w-full object-contain"
              src="https://zovrus.ru/design/zovrus/images/menu/icon2.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center text-sm pt-2">Кухонные гарнитуры</p>
          </div>
          <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 hover:from-slate-900 hover:via-slate-800 hover:to-slate-900 p-3 sm:p-5">
            <Image
              className="max-h-10 w-full object-contain"
              src="https://zovrus.ru/design/zovrus/images/menu/icon3.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center text-sm pt-2">Корпусные шкафы</p>
          </div>
          <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 hover:from-slate-900 hover:via-slate-800 hover:to-slate-900 p-3 sm:p-5">
            <Image
              className="max-h-10 w-full object-contain"
              src="https://zovrus.ru/design/zovrus/images/menu/meb.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center text-sm pt-2">Обеденные группы</p>
          </div>
          <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 hover:from-slate-900 hover:via-slate-800 hover:to-slate-900 p-3 sm:p-5">
            <Image
              className="max-h-10 w-full object-contain"
              src="https://zovrus.ru/design/zovrus/images/menu/icon2.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center text-sm pt-2">Мебель для ванной</p>
          </div>
          <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 hover:from-slate-900 hover:via-slate-800 hover:to-slate-900 p-3 sm:p-5">
            <Image
              className="max-h-10 w-full object-contain"
              src="https://zovrus.ru/design/zovrus/images/menu/tex.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center text-sm pt-2">Бытовая техника</p>
          </div>
          <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 hover:from-slate-900 hover:via-slate-800 hover:to-slate-900 p-3 sm:p-5">
            <Image
              className="max-h-10 w-full object-contain"
              src="https://zovrus.ru/design/zovrus/images/menu/sale.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <p className="text-gray-50 text-center text-sm pt-2">Распродажа</p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
