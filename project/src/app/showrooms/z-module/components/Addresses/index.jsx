const showrooms = [
    {
        city: 'Москва',
        address: 'Мичуринский проспект,  10к1',
        metro: 'Ломоносовский проспект',
        img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Мичуринский проспект,  10к1',
        metro: 'Ломоносовский проспект',
        img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Мичуринский проспект,  10к1',
        metro: 'Ломоносовский проспект',
        img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Мичуринский проспект,  10к1',
        metro: 'Ломоносовский проспект',
        img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Мичуринский проспект,  10к1',
        metro: 'Ломоносовский проспект',
        img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png',
        link: '/'
    },
    {
        city: 'Москва',
        address: 'Мичуринский проспект,  10к1',
        metro: 'Ломоносовский проспект',
        img: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png',
        link: '/'
    },
]

export default function Addresses() {
  return (
    <aside aria-label="Related articles" className="bg-white dark:bg-gray-900 py-8 lg:py-20">
        <div className="px-4 mx-auto max-w-screen-xl">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Наши салоны</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">В связи с высокой загруженностью дизайнеров просьба предупредить о Вашем визите.</p>
            </div> 
            <div className="grid gap-6 lg:gap-12 md:grid-cols-2">
                {showrooms.map(item => (
                     <p className="flex flex-col xl:flex-row">
                        <div className="mb-2 xl:mb-0">
                            <img src={item.img} className="mr-5 max-w-sm" alt="Image 2"></img>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="mb-2 text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                <span>{item.city}</span>
                            </p>
                            <p className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                                <span>{item.address}</span>
                            </p>
                            <p className="mb-4 font-light text-gray-500 dark:text-gray-400 max-w-sm">Станция метро: <br/> "{item.metro}"</p>
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
