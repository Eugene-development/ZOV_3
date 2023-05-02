import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const services = [
  {
    name: 'Консультация',
    description:
      'Наши дизайнеры предоставят Вам информацию не только по конструкции и размещению шкафов, но и по цветовому решению.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Замер',
    description:
      'Профессиональный замер помещения является неотъемлемой частью составления проекта. При оформлении договора услуга бесплатна.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Проект',
    description:
      'Проект мебели, составленный в дизайнерской программе, даст визуальное представление о вашей будущей покупке.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Доставка',
    description:
      'Служба логистики обеспечит Вам комфортную доставку заказа в удобное время. Есть дополнительная услуга грузчиков.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Сборка',
    description:
      'Сборка и установка мебели осуществляется нашими специалистами качественно и в кратчайшие сроки. ',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Поддержка',
    description:
      'Мы всегда готовы придти Вам на помощь в сложной ситуации и стараемся всё оперативно решить.',
    href: '#',
    icon: ArrowPathIcon,
  },
]



export default function ServiceList() {
  return (
    <div className="bg-white py-8 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Наш сервис</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
            </div> 
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((item) => (
              <div key={item.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <item.icon className="h-5 w-5 flex-none text-red-900" aria-hidden="true" />
                  {item.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{item.description}</p>
                  <p className="mt-2">
                    {/* <a href={item.href} className="text-sm font-semibold leading-6 text-red-900">
                      Learn more <span aria-hidden="true">→</span>
                    </a> */}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
