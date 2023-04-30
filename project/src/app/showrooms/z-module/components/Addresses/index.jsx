const showrooms = [
    {
        city: 'Москва',
        address: 'Мичуринский проспект,  10к1',
        metro: 'Ломоносовский проспект',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/chr-0272.resize1000x1000.jpg?2481a87f3961aa53681c2afd4246f0e6',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Профсоюзная улица, 118',
        metro: 'Коньково',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/abc-photo-98216_1280x0.resize1000x1000.jpg?3eb1cb1fb74218b0d40867bd9cbbb6e1',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Варшавское шоссе, 143к5А',
        metro: 'Аннино',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/ili05907-hdr.resize1000x1000.jpg?5ca04afcf4771e6bcbe2a5ffff48f2aa',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Спартаковская улица, 21',
        metro: 'Бауманская',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/hdr__mg_7456.resize1000x1000.jpeg?7a2f4a1a06fa420d24da80081f064205',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Полярная улица, 21',
        metro: 'Бабушкинская',
        workingMode: '10.00-21.00',
        img: 'https://zovrus.ru/files/_cache/salon/xxxl-1.resize1000x1000.jpeg?ba69f1ad3ef6fa5dd30548b2f3193fe5',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'улица Поляны, 8',
        metro: 'Бульвар Дмитрия Донского',
        workingMode: '10.00-22.00',
        img: 'https://zovrus.ru/files/_cache/salon/maxresdefault.resize1000x1000.jpg?dd5c2a5892574689efcc7b5703c70ae7',
        link: '/'
    },
]

export default function Addresses() {
  return (
    <aside aria-label="Related articles" className="bg-white dark:bg-gray-900 py-8 lg:py-20">
        <div className="px-20 mx-auto max-w-full">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Наши салоны</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">В связи с высокой загруженностью дизайнеров просьба предупредить о Вашем визите.</p>
            </div> 
            <div className="grid gap-6 lg:gap-12 md:grid-cols-2">
                {showrooms.map(item => (
                     <p className="flex flex-col xl:flex-row">
                        <div className="mb-2 xl:mb-0">
                            <img src={item.img} className="mr-5 max-w-sm rounded-md object-fill" alt="saloon"></img>
                        </div>
                        <div className="flex flex-col">
                            <p className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                <span>{item.city},</span>
                            </p>
                            <p className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                                <span>{item.address}</span>
                            </p>
                            <p className="my-4 font-light text-gray-500 dark:text-gray-400 max-w-sm">Метро: "{item.metro}"</p>
                            <p className="mb-4 font-light text-gray-500 dark:text-gray-400 max-w-sm">Режим работы: {item.workingMode}</p>
                            <div className="inline-flex items-center font-medium underline underline-offset-4 text-red-900 dark:text-primary-500 hover:no-underline">
                                Записаться к дизайнеру
                            </div>
                        </div>
                     </p>
                ))} 
            </div>
        </div>
    </aside>
  )
}
